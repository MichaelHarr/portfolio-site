import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <div className="text-white font-medium">MH</div>

        <div className="space-x-4 text-gray-300 hidden sm:flex">
          <Link to="home" smooth={true} duration={300} className="cursor-pointer hover:text-white">Home</Link>
          <Link to="projects" smooth={true} duration={300} className="cursor-pointer hover:text-white">Projects</Link>
          <Link to="about" smooth={true} duration={300} className="cursor-pointer hover:text-white">About</Link>
          <Link to="contact" smooth={true} duration={300} className="cursor-pointer hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
