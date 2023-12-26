


import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from "@/utils/db";
import bcrypt from 'bcrypt';
import User from "@/models/User";

// Define a type for the response body when necessary
type ResponseData = {
  success: boolean;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  await connectDB();

  if (req.method !== 'POST') {
    return res.status(401).json({
      success: false,
      message: 'Invalid request method!',
    });
  }




  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(404).json({
        success: false,
        message: 'Email already exist!',
      });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      isAdmin: false,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'Your account is ready! Please Sign In.',
    });

    
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error! Try it later.',
    });
  }
};

export default handler;
