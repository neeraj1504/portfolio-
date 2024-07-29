import React from 'react'
// import arrayDestruct from "../assets/other/portfolio/arrayDestruct.jpg"
// import installNode from "../assets/other/portfolio/installNode.jpg"
// import reactParallax from "../assets/other/portfolio/reactParallax.jpg"
// import reactSmooth from "../assets/other/portfolio/reactSmooth.jpg"
// import reactWeather from "../assets/other/portfolio/reactWeather.jpg"
// import byteverse from "../assets/other/portfolio/byteverse.png"
import chatapp from "../assets/other/project/chatapp.png";
import doctorappointment from "../assets/other/project/doctor-appointment.png";
import spotify from "../assets/other/project/spotify.png";
// import byteverse from "../assets/other/project/byteverse.png";
import ecommerce from "../assets/other/project/ecommerce.png";
import currency from "../assets/other/project/currency converter.png";


const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:chatapp
        },
        {
            id:2,
            src:doctorappointment
        },
        // {
        //     id:3,
        //     src:byteverse
        // },
       
        {
            id:4,
            src:spotify
        },
        {
            id:5,
            src:currency
        },
        {
            id:6,
            src:ecommerce
        },
    ]

    
  return (
    <div name="project"
    className="  pb-8 bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen ">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
           <div className="  pb-2">
               <p className="text-4xl font-bold inline mt-15
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
