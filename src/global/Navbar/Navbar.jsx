  import React from "react";
import momo from "../../assets/momo.jpeg"
 
 const Navbar =()=>{
  return (
     <nav className="m-auto flex items-start  flex-wrap text-base justify-center">
     <div className="container   flex items-center justify-between ">

        {/* Logo */}
        <a className="flex title-font justify-between font-medium items-center text-gray-900" href="#">
          <img src={momo} className="w-16" alt="momo" width="123" height="144"/>
       <span className="text-3xl font-bold text-yellow-900 ">Tem<span className="text-yellow-700">Momo</span></span>
       </a>    
         
        {/* Navigation Links */}
          <a className=" text-s hover:text-gray-900" href="#">Notification</a>
          <a className="text-s hover:text-gray-900" href="#">My Order</a>
          <a className=" hover:text-gray-900" href="#">Edit My Profile</a>
          <a className=" hover:text-gray-900" href="#">something</a> 
       
  
        <div className="flex items-center gap-4">
 <button class="flex  mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-m">LogIn</button>
   
 
 <button className="btn  btn-soft btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">SignUp</button>
</div>
         </div>
       </nav>
  );
};

export default Navbar;















  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  import React from "react";
// import momo from "../../assets/momo.jpeg"
 
//  const Navbar =()=>{
//   return (
//     <nav className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         {/* Logo */}
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">
//           <img src={momo} className="w-16" alt="momo" width="1000" height="400"/>
// //                         <span className="text-3xl font-bold text-yellow-900 ">Met <span className="text-yellow-700">Momo</span></span>
// //                     </div>
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">Tailblocks</span>
//         </a>

//         {/* Navigation Links */}
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-gray-900" href="#">First Link</a>
//           <a className="mr-5 hover:text-gray-900" href="#">Second Link</a>
//           <a className="mr-5 hover:text-gray-900" href="#">Third Link</a>
//           <a className="mr-5 hover:text-gray-900" href="#">Fourth Link</a>
//         </nav>

//         {/* Button */}
//         <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//           Button
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-4 h-4 ml-1"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
















    
// //    <div className="relative w-full">
// //     <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
// //         <div className="container m-auto px-2 md:px-24 lg:px-14">
// //             <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
// //                 <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
// //                     {/* <a href="https://tailus.io/blocks/hero-section" aria-label="logo" className="flex space-x-2 items-center"> */}
// //                     <div className="flex items-center justify-center mt-16 space-x-3"> 
// //                         <img src={momo} className="w-16" alt="momo" width="1000" height="400"/>
// //                         <span className="text-3xl font-bold text-yellow-900 ">Met <span className="text-yellow-700">Momo</span></span>
// //                     </div>

// //                     <button aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden">
// //                         <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
// //                         <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
// //                     </button>
// //                 </div>

// //                 <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
// //                     <div className="text-gray-600 lg:pr-4">
// //                         <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
// //                             <li>
// //                                 <a href="#" className="block md:px-4 transition hover:text-yellow-700">
// // <span>I've a restaurant</span>
// //                                 </a>
// //                             </li>
// //                             <li>
// //                                 <a href="#" className="block md:px-4 transition hover:text-yellow-700">
// // <span>Wishlist</span>
// //                                 </a>
// //                             </li>
// //                             <li>
// //                                 <a href="#" className="block md:px-4 transition hover:text-yellow-700">
// // <span>Cart</span>
// //                                 </a>
// //                             </li>
// //                         </ul>
// //                     </div>

// //                     <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
// //                         <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
// //                             <span className="block text-yellow-800 font-semibold text-sm">
// //                                 Sign up
// //                             </span>
// //                         </button>
// //                         <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
// //                             <span className="block text-yellow-900 font-semibold text-sm">
// //                                 Login
// //                             </span>
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     </nav>
// //   </div>
// //     )
// //  }
// //  export default Navbar