import React from "react";
import HeroImg from "../assets/picture/nerraj.jpg"; //this is the way to import image from other folder
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll"; // "ai" is first two letters of AiOutlineArrowRight
const Home = () => {
  return (
    <div
      class="home"
      className="pt-40 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I Am Front End developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I am involved in competitive programming and open source projects.
            For competitive programming, I use platforms like Codeforces,
            LeetCode, and refer to GeeksforGeeks and
            CP-Algorithms for learning. I also contribute to open source on
            platforms like GitHub. Additionally, I am learning how
            tech stacks are used in tech companies
          </p>
          <div>
            <Link
              to="Education"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineArrowRight size={25} classNam="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="my profile"
            className=" mx-auto h-[400px] w-[600px] rounded-full items-center justify-center "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
