

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch } from 'react-redux'
import { userLogin } from '@/reduxFile/userSlice';



const Login: React.FC = () => {



  const router = useRouter();
  const dispatch = useDispatch()


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [process, setProcess] = useState<boolean>(false);

  const data = { email, password };

  //const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setProcess(true);
      const res = await axios.post('/api/user/login', data, config);
       dispatch(userLogin(res.data.userData))
       
      toast.success(res.data.message);
      router.push('/');
      setProcess(false);

    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message);
      setProcess(false);
    }
  };


  return (
    <>
      
      <h3 className='text-center mt-5'>Sign In</h3>
     
      

      <form onSubmit={handleLogin}>
        <div className="mb-3">

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email}
              onChange={e => {
                // ensure value without space
                const newValue = e.target.value;
                setEmail(newValue.startsWith(' ') ? newValue.trim() : newValue);
              }} 
            />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" 
                 className="form-control" 
                 id="password" 
                 value={password}
                 onChange={ e => {
                  // ensure value without space
                    const newValue = e.target.value
                    setPassword(newValue.startsWith(' ') ? newValue.trim() : newValue)
                 }}
                 placeholder="Enter your password" />
        </div>

  
        <button type="submit" 
                disabled={process}
                className="btn btn-primary w-100 my-3 rounded-1">
          { process ? 'Processing' : 'Submit' }
        </button>

        <hr />

        <div className='mt-3 d-flex justify-content-between mx-1'>
          <Link href={'/'}
                style={{textDecoration: 'none'}}>
            Forgot Password
          </Link>

          <Link href={'/signUp'}
                style={{textDecoration: 'none'}}>
            Sign Up
          </Link>
        </div>
      </form>

      <style jsx>{`
        form {
          position: relative;
          width : 400px;
          margin: 50px auto;
          border: 1px solid gray;
          padding: 40px;
          border-radius: 7px;
          background-color: white;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
  
    </>
  );
};

export default Login