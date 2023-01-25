import React, { useState, useEffect } from 'react';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="container relative flex flex-col p-6 mx-auto transition duration-700 ease-in-out bg-opacity-80 drop-shadow-xl hover:scale-105">
      <div className="flex items-center justify-center md:justify-between ">
        <a
          className="pt-2 "
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="jkp2.svg"
            alt="logo"
            className="transition duration-700 ease-in-out hover:scale-110"
          />
        </a>
        <div className="hidden space-x-8 lg:flex">
          <a
            href="https://www.linkedin.com/in/kalepadot/"
            className="font-extrabold transition duration-700 ease-in-out text-md hover:text-white hover:scale-110 text-accent9"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kalepadot"
            className="font-extrabold transition duration-700 ease-in-out text-md hover:text-white hover:scale-110 text-accent9"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
