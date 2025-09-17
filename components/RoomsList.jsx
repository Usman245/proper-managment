// components/RoomsList.jsx
"use client";

import RoomCard from "./RoomCard";

const rooms = [
  {
    id: 1,
    title: "Studio, 1 Queen Bed",
    rating: "9.5",
    reviews: 245,
    size: "333 sq ft",
    sleeps: 2,
    view: "City view",
    bed: "1 Queen Bed",
    price: 420,
    oldPrice: 560,
    availability: "2 rooms left",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Studio, 1 King Bed",
    rating: "9.5",
    reviews: 245,
    size: "333 sq ft",
    sleeps: 2,
    view: "City view",
    bed: "1 King Bed",
    price: 420,
    oldPrice: 560,
    availability: "2 rooms left",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Queen Salon - Accessible",
    rating: "9.5",
    reviews: 245,
    size: "333 sq ft",
    sleeps: 2,
    view: "City view",
    bed: "1 Queen Bed",
    price: 420,
    oldPrice: 560,
    availability: "2 rooms left",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Room, 1 King Bed",
    rating: "9.5",
    reviews: 245,
    size: "333 sq ft",
    sleeps: 2,
    view: "City view",
    bed: "1 King Bed",
    price: 420,
    oldPrice: 560,
    availability: "2 rooms left",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Deluxe Room, 2 Queen Beds",
    rating: "9.5",
    reviews: 245,
    size: "333 sq ft",
    sleeps: 4,
    view: "City view",
    bed: "2 Queen Beds",
    price: 480,
    oldPrice: 600,
    availability: "3 rooms left",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Luxury Suite, 1 King Bed",
    rating: "9.5",
    reviews: 245,
    size: "500 sq ft",
    sleeps: 3,
    view: "Sea view",
    bed: "1 King Bed",
    price: 600,
    oldPrice: 750,
    availability: "1 room left",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Family Suite, 2 Queen Beds",
    rating: "9.5",
    reviews: 245,
    size: "450 sq ft",
    sleeps: 4,
    view: "Garden view",
    bed: "2 Queen Beds",
    price: 550,
    oldPrice: 700,
    availability: "2 rooms left",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Penthouse Suite, King Bed",
    rating: "9.5",
    reviews: 245,
    size: "800 sq ft",
    sleeps: 2,
    view: "Skyline view",
    bed: "1 King Bed",
    price: 900,
    oldPrice: 1200,
    availability: "Only 1 left",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
  },
];

export default function RoomsList() {
  return (
    <section className="py-8 w-full bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
      <h2 className="font-montserrat-bold text-2xl md:text-3xl text-gray-900 mb-6">Choose your room</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
        </div>
      </div>
    </section>
  );
}
