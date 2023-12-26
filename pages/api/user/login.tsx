



import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";

const secret = process.env.JWT_SECRET!;

// Define a type for your response data
type ResponseData = {
  success: boolean;
  message: string;
  userData?: any; 
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  await connectDB();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'Please create an account first!' });
    }

    const doMatch = await bcrypt.compare(password, user.password);

    if (!doMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect password.' });
    }

    const userData = {
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: '1d', // 1 day
    });

    const serializedToken = serialize('userToken', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV !== 'production', 
      path: '/',
    });

    // Set token
    res.setHeader('Set-Cookie', serializedToken);

    return res.status(201).json({
      success: true,
      message: `Sign-in successful`,
      userData
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Something is wrong',
    });
  }
}

export default handler;
