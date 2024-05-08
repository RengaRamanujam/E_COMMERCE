// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div className='flex rounded-xl mx-1 mt-2 bg-blue-200 p-4 text-2xl font-sans'>
//       <div className="flex justify-between items-center">
//         <div className="flex space-x-4">
//           <Link to={'/'} className='"text-black mx-4 no-underline hover:text-green-300"'>Home</Link>
//           <Link to='/about' className={"text-black mx-4 no-underline hover:text-green-300"}>About Us</Link>
//           <Link to={'/cart'} className="text-black mx-4 no-underline hover:text-green-300">Cart</Link>
//         </div>
//         <div className="flex space-x-4">
//           <Link to='/login' className="text-black mx-4 no-underline hover:text-green-300">Login</Link>
//           <Link to='/signup' className="text-black mx-4 no-underline hover:text-green-300">Signup</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex rounded-xl mx-1 mt-2 bg-blue-200 p-4 text-2xl font-sans'>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to={'/'} className='text-black mx-4 no-underline hover:text-black'>Home</Link>
          <Link to='/about' className='text-black mx-4 no-underline hover:text-black'>About Us</Link>
          <Link to={'/cart'} className='text-black mx-4 no-underline hover:text-black'>Cart</Link>
        </div>
        <div className="flex space-x-4">
          <Link to='/login' className='text-black mx-4 no-underline hover:text-black'>Login</Link>
          <Link to='/signup' className='text-black mx-4 no-underline hover:text-black'>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
