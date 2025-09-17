// components/RoomCard.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaRegHeart, FaInfo } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSquareFoot, MdOutlinePerson, MdOutlineLocationCity } from "react-icons/md";

export default function RoomCard({ room }) {
  const router = useRouter();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-white p-2 rounded-[30px] shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-56 object-cover rounded-[30px]"
        />
        
          <button 
            className="absolute top-2 right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <FaInfo className="w-3 h-3 text-gray-600" />
          </button>
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute top-10 right-2 bg-gray-900 text-white text-xs rounded-lg p-3 w-64 z-50 shadow-lg">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Room Information</h4>
                <p className="text-gray-200">• Free WiFi included</p>
                <p className="text-gray-200">• Air conditioning</p>
                <p className="text-gray-200">• Private bathroom</p>
                <p className="text-gray-200">• Room service available</p>
                <p className="text-gray-200">• City view from window</p>
                <p className="text-gray-200">• Non-smoking room</p>
                <p className="text-gray-200">• Daily housekeeping</p>
              </div>
              {/* Arrow */}
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          )}
      </div>

      {/* Content */}
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="text-md font-bold font-montserrat-bold">{room.title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <FaStar className="text-yellow-500" size={20} />
          <span>{room.rating}</span>
          <span>({room.reviews} reviews)</span>
        </div>

        {/* Features */}
        <ul className="mt-2 text-sm text-gray-600 font-normal space-y-1">
          <li className="flex items-center gap-2">
            <MdOutlineSquareFoot size={20} className="text-black"/> {room.size}
          </li>
          <li className="flex items-center gap-2">
            <MdOutlinePerson size={20} className="text-black"/> Sleeps {room.sleeps}
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineLocationCity className="text-black" size={20}/> {room.view}
          </li>
          <li className="flex items-center gap-2">
            <IoBedOutline color="text-black" size={20}/> {room.bed}
          </li>
        </ul>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${room.price}</span>
            <span className="line-through text-gray-400 ml-2">${room.oldPrice}</span>
            <span className="text-sm text-gray-500"> /night</span>
          
          </div>
          <div className="text-green-600 font-medium text-sm">{room.availability}</div>
        </div>
           {/* Actions */}
           <div className="flex items-center sm:gap-4 gap-2 mt-4">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-2xl text-sm font-medium w-full text-center font-poppins-bold cursor-pointer" onClick={()=>router.push('/book-now')}>
              Reserve
            </button>
            <button className="p-1.5 bg-gray-200 flex items-center justify-center rounded-full ">
              <FaRegHeart size={24}/>
            </button>
          </div>
      </div>
    </div>
  );
}
