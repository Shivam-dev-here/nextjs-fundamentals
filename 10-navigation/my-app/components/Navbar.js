"use client"
import { usePathname } from 'next/navigation'
import React, { use } from 'react'

const Navbar = () => {
  // const pathname = usePathname()
    const pathname = usePathname()
  return (
    <div>
            <nav className="bg-gray-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Shivam-dev-here</h1>

          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div>You are at page {pathname}</div>
    </div>
  )
}

export default Navbar
