/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonVcardFill } from "react-icons/bs";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, userLogOut } from '@/reduxFile/userSlice';
import { RootState } from '@/reduxFile/store'; // Import RootState


const Navbar = () => {

  const user = useSelector((state: RootState) => state.userAuth.user);
  console.log(user)
  const dispatch = useDispatch()




  const CloseRightSideBar = (): void => {
      setTimeout(() => {
        const closeButton = document.querySelector('#offcanvasRight .btn-close') as HTMLButtonElement;
        closeButton?.click();
      }, 400);
    };

    const CloseSideBar = () => {
      setTimeout(() => {
        const closeButton = document.querySelector('#offcanvasWithBothOptions .btn-close') as HTMLButtonElement;
        closeButton?.click();
      }, 400)
     }




  return (

   <>
    
     <nav className='d-flex justify-content-between'>

         <div>
           <button className="btn btn-dark ms-3 my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <GiHamburgerMenu/>
           </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={0} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">

               <Link href={'/'} 
                      className='rounded-1 my-3 text-dark fs-5 ms-3' 
                      onClick={CloseSideBar}
                      style={{textDecoration: 'none'}}>
                My Journey
              </Link>
              <br />
               <Link href={'/'} 
                      className='rounded-1 my-3 text-dark fs-5 ms-3' 
                      onClick={CloseSideBar}
                      style={{textDecoration: 'none'}}>
                Images
              </Link>
              <br />
               <Link href={'/'} 
                      className='rounded-1 my-3 text-dark fs-5 ms-3' 
                      onClick={CloseSideBar}
                      style={{textDecoration: 'none'}}>
                Videos
              </Link>
               

              </div>
            </div>
         </div>

          <h3 className='mt-4'>The Road Home</h3>

         <div>
          <button className="btn btn-dark me-3 my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <BsPersonVcardFill/>
          </button>

            <div className="offcanvas offcanvas-end" tabIndex={0} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className='rightSide'>
                    <Link href={'/login'}
                          onClick={CloseRightSideBar}
                          className='btn btn-outline-secondary rounded-1 mt-3'
                          style={{textDecoration: 'none'}}>
                       Sign In
                    </Link>
                    <Link href={'/signUp'}
                          className='btn btn-outline-secondary rounded-1 mt-3'
                          onClick={CloseRightSideBar}
                          style={{textDecoration: 'none'}}>
                       Sign Up
                    </Link>
                </div>
              </div>
            </div>
         </div>
    </nav>


    <style>{`
      
      .rightSide {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: 30px;
      }
    
    `}</style>
   
   </>

  )
}

export default Navbar