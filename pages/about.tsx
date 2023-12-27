/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'



const Index: React.FC = () => {



  return (
    <>
       
       <h3 className='text-center mt-5'>Hi there, I am Foxy</h3>
       <h6 className='muted text-center'>Siberian Husky</h6>
       <h6 className='muted text-center mb-4'>60 lbs, 2 years, 1 months</h6>

       <div className="imgBox">
        <img src="./foxy/foxy.jpg" className="img" alt="img"/>
      </div>

      <div className="container-fluid my-5">
        <div className="row justify-content-center">

          {/* about */}
          <div className="col-12 col-md-5 border rounded-2 m-3 p-3">
           

            <p className='lead fw-semibold'>
              Spayed/Neutered?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Microchipped?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              House trained?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Friendly with dogs?
            </p>
            <p>Yes</p>

            <p className='lead fw-semibold'>
              Friendly with children?
            </p>
            <p>Unknown</p>

            <p className='lead fw-semibold'>
              Friendly with cat?
            </p>
            <p>Unknown</p>

           
            
          </div>



          {/* care */}
          <div className="col-12 col-md-5 border rounded-2 m-3 p-3">
            <h4>Care info</h4>

             <p className='lead fw-semibold'>
              Potty break schedule
            </p>
            <p>2-3x day</p>

             <p className='lead fw-semibold'>
              Energy Level?
            </p>
            <p>High</p>

             <p className='lead fw-semibold'>
              Feeding schedule?
            </p>
            <p>3x day</p>

             <p className='lead fw-semibold'>
              Can be left alone?
            </p>
            <p>1 - 4 hours</p>

             <p className='lead fw-semibold'>
              Medication?
            </p>
            <p>No</p>

             <p className='lead fw-semibold'>
              Additional care instructions?
            </p>
   
            <ul>
               <li>
                A foxy always wants to be next to a person.
               </li>
            </ul>

          </div>
        </div>
      </div>

      <Link href={'/'}
            className='btn btn-primary rounded-1 vstack mx-auto mb-5'
            style={{textDecoration: 'none', width: '200px'}}>
        Go Back
      </Link>

  

      <style>{`
      
      .img {
        position: relative;
        width: 100%;
      }

      .imgBox {
        position: relative;
        width: 400px;
        height: 300px;
        margin: 0 auto;
        overflow: hidden;
      }
      
      `}</style>
    
    </>
  )
}

export default Index