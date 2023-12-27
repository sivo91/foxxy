import React, { useState, FocusEvent, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';





const Index: React.FC = () => {

  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [process, setProcess] = useState<boolean>(false);
  const [tnx, setTnx] = useState<boolean>(false);

  const myFunc = (element: HTMLInputElement): void => {
    if (element) {
      element.style.backgroundColor = '#f2f2f2';
    }
  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: { email: string; name: string, msg: string } = { email, name, msg };
    console.log(data)

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

     try {
      setProcess(true);
      
      const res = await axios.post('/api/contact', data, config);
      console.log(res.data)
      toast.success(res.data.message)

     /*  setTimeout(() => {
        router.push('login');
      }, 500); */
      setName('')
      setEmail('')
      setMsg('')
      setTnx(true)

      setProcess(false);

    } catch (error: any) {
      console.error('Registration failed:', error)
      setProcess(false);
    }  
  };




   const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(event.target.value);
  };



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

       {
        tnx === false && (
          <>
              <form onSubmit={handleSubmit} className='my-5 rounded-2'>
                        <p className='fs-5 m-0 mb-2 text-center fw-semibold'>User</p>

                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input type="text" 
                                className="form-control" 
                                id="name" 
                                value={name}
                                onFocus={(e) => myFunc(e.currentTarget)}
                                onChange={ e => setName(e.target.value)}
                                placeholder="Enter your Name" />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input type="email" 
                                className="form-control" 
                                id="email" 
                                value={email}
                                onFocus={(e) => myFunc(e.currentTarget)}
                                onChange={ e => setEmail(e.target.value)}
                                placeholder="Enter your email" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          value={msg}
                          onChange={handleTextChange}
                        />
                      </div>
                        

                        <button type="submit" 
                                disabled={process}
                                className="btn btn-primary w-100 rounded-1 my-3">
                          { process ? 'Processing' : 'Submit'}
                        </button>

        </form>
          </>
        )
       }

       {
        tnx === true && (
          <>
             <form className='rounded-3 p-4 my-5'>
               <h5 className='text-center'>
                   The email has been sent! We will contact you shortly! 
               </h5>
             </form>
          </>
        )
       }



            <style>{`
              form {
                position: relative;
                width: 400px;
                margin: 0 auto;
                border: 1px solid gray;
                padding: 20px 10px;

              }
            `}</style>

    </>
  )
}

export default Index