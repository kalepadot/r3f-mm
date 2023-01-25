import React, { useState, useEffect } from 'react';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="container relative flex flex-col p-6 mx-auto transition duration-700 ease-in-out bg-opacity-80 bg-accent5 drop-shadow-xl hover:scale-105">
      <div className="flex items-center justify-center md:justify-between ">
        <a
          className="pt-2 "
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="vercel.svg"
            alt="logo"
            className="transition duration-700 ease-in-out hover:scale-110"
          />
        </a>
        <div className="hidden space-x-8 lg:flex">
          <a
            href="https://www.linkedin.com/in/kalepadot/"
            className="text-sm font-bold transition duration-700 ease-in-out hover:text-white hover:scale-110 text-accent0"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kalepadot"
            className="text-sm font-bold transition duration-700 ease-in-out hover:text-white hover:scale-110 text-accent0"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm font-bold transition duration-700 ease-in-out hover:text-white hover:scale-110 text-accent0"
          >
            Promotional Video
          </a>
        </div>
        <a
          href="https://www.amazon.com/"
          className="hidden p-3 px-6 pt-2 text-sm font-bold transition duration-700 ease-in-out rounded-full drop-shadow-lg border-accent0 bg-accent0 hover:text-white text-accent5 md:block baseline hover:bg-accent5 hover:border-accent0 hover:scale-110"
        >
          Resume Shopping
        </a>
      </div>
    </nav>
  );
}
