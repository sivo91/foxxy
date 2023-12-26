



import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from "@/utils/db";
import Icons from '@/models/Icons';


interface data {
  id: string;
  heart: number;
  like: number;
  hands: number
 
}

// Define a type for the response body when necessary
type ResponseData = {
  success: boolean;
  message: string;
  data: data | null
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  await connectDB();

  if (req.method !== 'GET') {
    return res.status(401).json({
      success: false,
      message: 'Invalid request method!',
      data: null
    });
  }


  const data = await Icons.findOne()
  //console.log(data)




  return res.status(201).json({
      success: true,
      message: 'get icons',
      data
    });
};

export default handler;