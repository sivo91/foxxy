import React, { useState, FocusEvent, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


const Register: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);
  const [process, setProcess] = useState<boolean>(false);

  const myFunc = (element: HTMLInputElement): void => {
    if (element) {
      element.style.backgroundColor = '#f2f2f2';
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: { email: string; password: string } = { email, password };


    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      toast.error(`Password don't match!`);
      return;
    } else {
      setPasswordMatchError(false);
    }

    console.log(data)

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

     try {
      setProcess(true);
      

      const res = await axios.post('/api/user/register', data, config);

      toast.success(res.data.message);

      setTimeout(() => {
        router.push('login');
      }, 500);

      setProcess(false);

    } catch (error: any) {
      console.error('Registration failed:', error);
      toast.error(error.response.data.message);
      setProcess(false);
    } 
  };

  return (
    <>
     
          <form onSubmit={handleSubmit} className='my-5 rounded-2'>
                      <p className='fs-5 m-0 mb-2 text-center fw-semibold'>User</p>

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
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input type="password" 
                              className="form-control" 
                              id="password" 
                              value={password}
                              onFocus={(e) => myFunc(e.currentTarget)}
                              onChange={ e => setPassword(e.target.value)}
                              placeholder="Enter your password" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="confirm" className="form-label">
                          Confirm
                        </label>
                        <input type="password" 
                              className="form-control" 
                              id="confirm" 
                              value={confirmPassword}
                              onFocus={(e) => myFunc(e.currentTarget)}
                              onChange={ e => setConfirmPassword(e.target.value)}
                              placeholder="Confirm your password" />
                      </div>

                      <button type="submit" 
                              disabled={process}
                              className="btn btn-primary w-100 rounded-1 my-3">
                        { process ? 'Processing' : 'Submit'}
                      </button>
                       {passwordMatchError && (
                            <p className="text-danger text-center">Passwords do not match!</p>
                          )}

                      <hr />

                    <div className='text-center'>
                      <Link href={'/private/login'} 
                            style={{textDecoration: 'none'}}>
                        Sign In
                      </Link>
                    </div>
                      

                     

                   </form>



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
  );
};

export default Register;
