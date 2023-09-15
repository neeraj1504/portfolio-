import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          {" "}
          LinkedIn <FaLinkedin size={30} />{" "}
        </>
      ),
      href: "https://www.linkedin.com/in/abhishek-maurya-0964b522a",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          {" "}
          GitHub <FaGithub size={30} />{" "}
        </>
      ),
      href: "https://github.com/AbhishekMaurya2002",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          {" "}
          Mail <HiOutlineMail size={30} />{" "}
        </>
      ),
      href: "https://gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          {" "}
          Resume <BsFillPersonLinesFill size={30} />{" "}
        </>
      ),
      href: "https://drive.google.com/file/d/1AHO_tgL8e7Y1fbloMFx_w103bY2yK2D1/view?usp=drivesdk",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              { style }
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
