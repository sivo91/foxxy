

import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from "@/utils/db";
import Views from '@/models/Views';

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

   const count = req.body.pageOpens
   console.log(count)


/*   try {
    const { email, password } = req.body;

    const userExist = await Views.findOne({ email });


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
  } */



  return res.status(201).json({
      success: true,
      message: 'Your account is ready! Please Sign In.',
    });
};

export default handler;