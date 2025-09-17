// components/Navbar.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiFilter } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile nav
  const [filterOpen, setFilterOpen] = useState(false); // filters dropdown
  const [menuOpen, setMenuOpen] = useState(false); // desktop menu dropdown

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex gap-8 items-center justify-center">
        <div className="text-2xl font-bold text-blue-900 mt-[-6px]">
          <Link href='/'>
          Top Tier Travel
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600 font-normal ">
          <Link href="/hotels" className="hover:text-blue-900 transition">Hotels</Link>
          <Link href="/support" className="hover:text-blue-900 transition">Contact</Link>
          <Link href="/contact-us" className="hover:text-blue-900 transition">Support</Link>
        </nav>
        </div>

      

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-3 relative">
          {/* Filters Button */}
          <div className="hidden md:block relative">
            <button
              className="flex items-center space-x-2 border border-gray-400 rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
              onClick={() => {
                setFilterOpen(!filterOpen);
                setMenuOpen(false);
              }}
            >
              <FiFilter className="w-4 h-4 text-blue-900" />
              <span>Filters</span>
            </button>

            {/* Filters Dropdown */}
            {filterOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Filter 1</li>
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Filter 2</li>
                </ul>
              </div>
            )}
          </div>

          {/* Menu Button */}
          <div className="relative">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-blue-900 hover:bg-gray-50 transition"
              onClick={() => {
                if (window.innerWidth >= 768) {
                  setMenuOpen(!menuOpen);
                  setFilterOpen(false);
                } else {
                  setIsOpen(!isOpen);
                }
              }}
            >
              <FiMenu className="w-6 h-6" />
            </button>

            {/* Desktop Menu Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20 hidden md:block">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Menu Item 1</li>
                  <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Menu Item 2</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          <Link href="/hotels" className="block text-gray-700 font-medium hover:text-blue-900">Hotels</Link>
          <Link href="/contact-us" className="block text-gray-700 font-medium hover:text-blue-900">Contact</Link>
          <Link href="/support" className="block text-gray-700 font-medium hover:text-blue-900">Support</Link>
          <button
            className="flex items-center space-x-2 border rounded-xl px-4 py-2 w-full justify-center text-gray-700 hover:bg-gray-50"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <FiFilter className="w-4 h-4 text-blue-900" />
            <span>Filters</span>
          </button>
          {filterOpen && (
            <div className="mt-2 bg-white border rounded-lg shadow-lg">
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Filter 1</li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Filter 2</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
