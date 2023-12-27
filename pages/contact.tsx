import React from 'react'

const Index = () => {
  return (
    <>
      <h3 className='text-center my-5'>Contact</h3>
      <h4 className='text-center'>Email: vacavillesf2@gmail.com</h4>
      <br />

      <h4 className="text-center" >
         <a href="mailto: vacavillesf2@gmail.com" 
            style={{textDecoration: 'none'}}
            className="call-link">Send Email 
          </a>
      </h4>

      <h4 className="text-center" >
         <a href="tel:707-770-6743" 
            style={{textDecoration: 'none'}}
            className="call-link">707-770-6743
          </a>
      </h4>
    </>
  )
}

export default Index