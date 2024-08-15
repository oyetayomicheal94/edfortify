import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function Login() {
   
  return (
    <div classNameName='container'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.jpg'
          alt='logo'
          width={160}
          height={160}
          // className='object-contain'
        />
      </Link>
      <div className="signup_form">
        <div className="mt-5 bg-gray-200 rounded-lg shadow-lg p-4 form_details" >
          <form className="space-y-6" action="#" method="POST">
            <fieldset className="form_split">
              <div className="mt-2">
                <input id="matric No." name="matric No." type="text" required placeholder="Matric No." 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                />
              </div>
            </fieldset>
            <div className="form_split">
              <div className="mt-2">
                <input id="psw." name="psw" type="Password" required placeholder="Password..." 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>
            <button type="submit" 
              style={{ backgroundColor: '#0096a5'}}
              className="flex w-full justify-center rounded-md  px-3 py-1.5 
              text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
                  Log In
            </button>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
//     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//     <Image
//         src= {"/assets/images/logo.jpg"}
//         alt= 'school logo'
//         width={150}
//         height={80}
//         className='flex flex-center ml-12' 
//     />
//   </div>
   
//   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     <form className="space-y-6" action="#" method="POST">
//       <div>
//         <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Matric No.</label>
//         <div className="mt-2">
//           <input id="matric no" name="matric no" type="number" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
//         </div>
//       </div>

//       <div>
//         <div className="flex items-center justify-between">
//           <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
         
//         </div>
//         <div className="mt-2">
//           <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
//         </div>
//         <div className="text-sm mt-2">
//             <a href="#" className="font-semibold  hover:text-indigo-500" style={{color: "#0096a5"}}>Forgot password?</a>
//           </div>
//       </div>
//       <div>
//         <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{backgroundColor: "#0096a5"}}>Sign in</button>
//       </div>
//     </form>

    
//   </div>
// </div>
    
  );
}

export default Login;
