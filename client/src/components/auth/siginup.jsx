import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUP() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [signup, isSignup] =useState(false);
    const navigate = useNavigate();

   
    const handlesignup = (e) =>{
      e.preventDefault();
      const user = {name, email, pass};
      localStorage.setItem('user', JSON.stringify(user)); 
      isSignup(true);

    }

    if (signup){
      navigate('/');
    }
    
    const handleclick =() =>{
      navigate('/'); 
  }
    
  return (
<div>
  <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/"> 
                        <h3 className="text-4xl font-bold text-purple-600">
                            QuickChat
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
              <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e)=>setName(e.target.value)}
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    required  
                                      />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e)=>setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                    required
                                  />
                            </div>
                        </div>
                        
        <div className="flex w-full mt-4">
          <button type="submit" 
          className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
          onClick={handlesignup}
          >
            <span className="mr-2 uppercase">Signup</span>
            <span>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
    </form>
    <div className="flex justify-center items-center mt-6">
      <h3 className='inline-flex items-center font-bold text-gray-500 text-xs text-center'>
      Have an account?
      <span>
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2' 
        onClick={handleclick}
        >Login
      </button>
      </span>
      </h3>
    </div>
    </div>
 </div> 
</div>
  )
}

