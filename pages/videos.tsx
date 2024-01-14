import React from 'react'
import videos from '@/utils/videos'
import Icons from '@/components/Icons'




const Index = () => {


  
  return (
   <>
       <h3 className='text-center my-5'>Videos</h3>


       <div className="container-fluid video-box" style={{marginBottom: '150px'}}>
        {
          videos.map((item, idx) => (
            <>
              <div key={idx} style={{width:'300px'}} className='m-3'>
                 <video src={item} autoPlay controls width="100%">
                        Your browser does not support the video tag.
                      </video>
              </div>
            </>
          ))
        }

         <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/yT44Q7zPQmI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
       </div>

       <Icons/>


       <style>{`
       
         .video-box {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
         }
       `}</style>
   </> 
  )
}

export default Index