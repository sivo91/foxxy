import React, {useState, useCallback,useEffect } from 'react';
import { FcLike } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { PiHandsClapping } from "react-icons/pi";
import axios from 'axios';

interface ItemDetails {
  id: string;
  data: {
    heart: number;
    like: number;
    hands: number;
  };
}


const Icons: React.FC = () => {

 const [heart, setHeart] = useState<number>(0)
 const [like, setLike] = useState<number>(0)
 const [hands, setHands] = useState<number>(0)
 const [loading, setLoading] = useState(false)
const [item, setItem] = useState<ItemDetails | null>(null)


const fetchItem = async () => {
      try {
 
        const response = await axios.get<ItemDetails>('/api/icons/getIcons');
      //  console.log(response.data)
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

useEffect(() => {
    fetchItem();
  }, []);


const config = {
              headers: {
                "Content-Type": "application/json",
              },
            }

 const handleHeart = async () => {
      try {
        const res = await axios.post('/api/icons/setHeart', { heart } , config)
      // console.log(res.data)
        fetchItem();

      } catch (err:any) {
        console.log(err)
      }
 }

 const handleLike = async () => {
        try {
            const res = await axios.post('/api/icons/setLike', { like } , config)
            //console.log(res.data)
            fetchItem();

          } catch (err:any) {
            console.log(err)
          }
 }

 const handleHands = async () => {
      try {
          const res = await axios.post('/api/icons/setHands', { hands } , config)

          fetchItem();

        } catch (err:any) {
          console.log(err)
        }
 } 




  return (
    <>
      <div className='icons justify-content-evenly'>

        <div className=' pointer' 
             onClick={handleHeart} >
          <FcLike className='fs-3'/>
          <span style={{position:'relative', top:' -9px'}}>
           {item?.data?.heart}
          </span>
        </div>

        <div className=' pointer'
           onClick={handleLike} >
          <SlLike className='fs-3'/>
          <span style={{position:'relative', top:' -9px'}}>
            {item?.data?.like}
          </span>
        </div>

        <div className=' pointer'
               onClick={handleHands} >
          <PiHandsClapping className='fs-3'/>
          <span style={{position:'relative', top:' -9px'}}>
            {item?.data?.hands}
          </span>
        </div>
 
      </div>

      <style>{`
        .pointer {
          cursor: pointer;
        }

        .icons {
          position: fixed;
          bottom: 50px;
          left: 0;          
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width:400px;
          margin: 0 auto;
          border-radius: 20px;
          background-color: #fff; 
          padding: 10px; 
          border:1px solid gray;
          box-shadow: 1px 1px 25px 20px rgba(255, 255, 255, 1); 
        }
      `}</style>
    </>
  )
}

export default Icons;
