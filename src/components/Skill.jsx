import React from 'react'
import html from "../assets/other/tools/html.png";
import react from "../assets/other/tools/react.png";
import cpp from "../assets/other/tools/cpp.png";
import sql from "../assets/other/tools/sql.png";
import oops from "../assets/other/tools/oops.jpg"
import tailwind from "../assets/other/tools/tailwind.png";

const Experiences = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
       
      
       
       
        {
            id:7,
            src:react,
            title:"REACT",
            style:"shadow-orange-500"
        },
        {
            id:8,
            src:tailwind,
            title:"TAILWIND",
            style:"shadow-orange-500"
        },
        {
            id:9,
            src:oops,
            title:"OOPS",
            style:"shadow-orange-500"
        },
        {
            id:10,
            src:cpp,
            title:"CPP",
            style:"shadow-orange-500"
        },
        {
            id:11,
            src:sql,
            title:"SQL",
            style:"shadow-orange-500"
        },
       
    ]
  return (
    <div name="skill" className=" bg-gradient-to-b from-gray-800 to-black w-full h-full pt-10">
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-screen text-white py-30 px-4">
        <div >
            <p className="text-4xl font-bold border-b-4 border-gray-500 px-1 inline  ">Skill</p>
            <p className="py-4">This are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center md:py-2 px-12 sm:px-0">
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration:500 py-1 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-2">{title}</p>
                    </div>
                ))
            }
                
        </div>
      </div>
    </div>
  )
}

export default Experiences
