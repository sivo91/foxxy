import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from "@/utils/db";
import Icons from '@/models/Icons';

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

   const hands = req.body.hands + 1
   //console.log(typeof hands)

   
   const update = await Icons.findOne()

   update.hands += Number(hands)
   
   await update.save()


  return res.status(201).json({
      success: true,
      message: 'update icons',
    });
};

export default handler;