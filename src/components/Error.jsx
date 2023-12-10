import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";

const Error = () => {
  return (
    <main className="min-h-full px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h3 className="text-blue-700 font-bold text-2xl">404</h3>
        <h1 className="font-bold text-3xl m-4">Page not found</h1>
        <p className="text-slate-500 m-4">Sorry, we couldn’t find the page you’re looking for.</p>
        <button className="text-white font-bold bg-blue-700 m-4 p-4 rounded-lg hover:bg-blue-500">Go back home</button>
        <span className="text-slate-700 font-bold cursor-pointer">Contact support <span aria-hidden="true">&rarr;</span></span> 
    </div>
    </main>
  )
}

export default Error