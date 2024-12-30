import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=" w-full  bg-gradient-to-b from-black to-gray-800  text-white">
      <div className="flex flex-col p-4  justify-center max-w-screen-lg mx-auto h-fit py-28">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Contact</p>
            <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex  justify-center items-center color-white">
            <form action="https://getform.io/f/dc0b4ef0-b067-43e8-9734-d0cee6c90285" method="POST" className="flex flex-col w-full md:w-1/2" >
                <input type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input type="text"
                name="email"
                placeholder="Enter your email"
                rows="10"
                className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea name="message" placeholder='Enter your message'  rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-3  mx-auto
                 items-center rounded-md hover:scale-110 duration-300 mt-3 mb-3 text-center ">Let's talk</button>
                 </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
