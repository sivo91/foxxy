

import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  success: boolean;
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) =>  {


  try {


   const serialised = serialize("userToken", "", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'production', 
        maxAge: -1, // -1 means no token
        path: "/",
      });


    res.setHeader("Set-Cookie", serialised);

    return res.status(201).json({ 
      success: true,
      message: "Successfully logged out!"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong'
    });
  }
}

export default handler;
