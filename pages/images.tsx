/* eslint-disable @next/next/no-img-element */
import React from 'react'
import images from '@/utils/images'
import Icons from '@/components/Icons'




const Index = () => {

  
  return (
    <>
      <h3 className='text-center mt-5'>Images</h3>

       <div className="container-fluid img-box my-5">

           {
            images[0].map((item, idx) => (
              <>
                 <div key={idx}>
                  <img  src={item} style={{width: '200px'}} className="rounded m-3" alt="img"></img>
                 </div>
              </>
            ))
           }

       </div>

       <hr />


       <div className="container-fluid img-box">

           {
            images[1].map((item, idx) => (
              <>
                 <div key={idx}>
                  <img  src={item} style={{width: '300px'}} className="rounded m-3" alt="img"></img>
                 </div>
              </>
            ))
           }

       </div>


        <Icons/>


       <style>{`
       
         .img-box {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 150px;
         }
       `}</style>

    </>
  )
}

export default Index