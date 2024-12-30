import React from 'react'
// import arrayDestruct from "../assets/other/portfolio/arrayDestruct.jpg"
// import installNode from "../assets/other/portfolio/installNode.jpg"
// import reactParallax from "../assets/other/portfolio/reactParallax.jpg"
// import reactSmooth from "../assets/other/portfolio/reactSmooth.jpg"
// import reactWeather from "../assets/other/portfolio/reactWeather.jpg"
// import byteverse from "../assets/other/portfolio/byteverse.png"
import SwiftCart from "../assets/other/project/SwiftCart.png";
import testonomial from "../assets/other/project/testonomial.png";
import Tic_Tac_Toe from "../assets/other/project/Tic_Tac_Toe.png";




const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:SwiftCart
        },
        {
            id:2,
            src:testonomial
        },
        
       
        {
            id:4,
            src:Tic_Tac_Toe
        },
       
    ]

    
  return (
    <div name="project"
    className="   bg-gradient-to-b from-black to-gray-800 w-full 
    text-white h-screen ">
        <div className=" max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
           <div className="  pb-2">
               <p className="text-4xl font-bold inline mt-10
               border-b-4 border-gray-500">Project</p>
               <p className="py-6">Checkout some of my works</p>
           </div>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
            {
                portfolios.map(({id,src})=>(
                   
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3  duration-200 hover:scale-105">Demo</button>
                                    <button className="w-1/2 px-6 py-3  duration-200 hover:scale-105">Code</button>
                                </div>
                    </div>
                   
                ))
            }

               </div>
        </div>
      
    </div>
  )
}

export default Portfolio
