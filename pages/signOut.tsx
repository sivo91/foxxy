import React from 'react'

const Index = () => {



  return (
    <>
       <h3 className='text-center my-5'>Thank You for Visiting!</h3>

       <p className='logout-text'>
         You have successfully logged out. Before you go, we have a small request.
            If you could take a moment to share our page about finding a new home for Foxy, it would mean the world to us. We&apos;re looking for a loving and caring home for a very special dog, and your help in spreading the word is invaluable.
        </p>

        <p className='text-center my-3'>Remember, even a quick share can make a big difference!</p>
        <p className='text-center'> Thank you for your support!</p>


        <style>{`
          .logout-text {
            position: relative;
            max-width: 600px;
            margin: 0 auto;
          }
        `}</style>
    </>
  )
}

export default Index