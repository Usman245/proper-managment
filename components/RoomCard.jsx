// components/RoomCard.jsx
"use client";

import { useRouter } from "next/navigation";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSquareFoot, MdOutlinePerson, MdOutlineLocationCity } from "react-icons/md";

export default function RoomCard({ room }) {
  const router=useRouter()
  return (
    <div className="bg-white p-2 rounded-[30px] shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-56 object-cover rounded-[30px]"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow">
          i
        </button>
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
            <button className="bg-blue-900 text-white px-4 py-2 rounded-2xl text-sm font-medium w-full text-center font-poppins-bold" onClick={()=>router.push('/book-now')}>
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
