import React from 'react'
import html from "../assets/other/tools/html.png";
import css from "../assets/other/tools/css.png";
import github from "../assets/other/tools/github.png";
import javascript from "../assets/other/tools/javascript.png";
import firebase from "../assets/other/tools/firebase.png";
import node from "../assets/other/tools/node.png";
import react from "../assets/other/tools/react.png";
import cpp from "../assets/other/tools/cpp.png";
import sql from "../assets/other/tools/sql.png";
// import cloud from "../assets/other/tools/cloud.png";
import oops from "../assets/other/tools/oops.jpg"
import tailwind from "../assets/other/tools/tailwind.png";
import expressjs from "../assets/other/tools/expressjs.png"
const Experiences = () => {
    const techs=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-orange-500"
        },
        {
            id:3,
            src:github,
            title:"GITHUB",
            style:"shadow-orange-500"
        },
        {
            id:4,
            src:javascript,
            title:"JAVASCRIPT",
            style:"shadow-orange-500"
        },
        {
            id:5,
            src:firebase,
            title:"FIREBASE",
            style:"shadow-orange-500"
        },
        {
            id:6,
            src:node,
            title:"NODE",
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
        {
            id:12,
            src:expressjs,
            title:"EXPRESSJS",
            style:"shadow-orange-800"
        },
    ]
  return (
    <div name="skill" className=" bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white">
        <div >
            <p className="text-4xl font-bold border-b-4 border-gray-500 px-1 inline">Skill</p>
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
