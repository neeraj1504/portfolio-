// import React from 'react'

// const Education = () => {
//   return (
//     <div className=" mx-auto pt-10 w-full h-screen bg-black  text-white">
//       <div className="pt-10 animate-fade-in">
//           <p className="text-3xl font-bold inline ">
//             Education
//           </p>
          
//         </div>
//     </div>
//   )
// }

// export default Education

import React from "react";

const Education = () => {
  return (
    <div
      name="Education"
      className=" w-full  bg-black text-white"
    >
      <div className="max-w-screen-lg p-4 pl-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            Education
          </p>
        </div>

         <div className="  list-disc list-inside  mt-4 mb-12 space-y-2 text-xl mx-auto ">
           <p>Bachelor of Technology in Electrical Engineering - National Institute of Technology Patna (Graduation: 2021-2025) - (CGPA: 8.46)</p>
            <p>Secondary School (12th Grade) - Mohammad Hasan Inter College (Year: 2019, Board: Uttar Pradesh Board, Percentage: 78%)</p>
            <p>High School (10th Grade) - Chitanram H S S Jamalpur (Year: 2017, Board: Uttar Pradesh Board, Percentage: 86.6%)</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default Education;



