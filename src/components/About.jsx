import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-10 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
          "I am an undergraduate student at National Institute of Technology
          Patna, pursuing B-tech in Electrical Engineering. I am a
          coding enthusiast with strong knowledge of Data Structures and
          Algorithms and also having experience in web development. My interests
          include competitive programming, public speaking, and learning about new technologies.
          I strive to be the best version of myself every day."
        </p>
        
        
      </div>
    </div>
  );
};

export default About;
