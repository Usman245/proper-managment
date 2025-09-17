import Navbar from "@/components//layout/Navbar";
import PropertyCard from "@/components/PropertyCard";
import Reviews from "@/components/Reviews";
import RoomsList from "@/components/RoomsList";
import YouMightAlsoLike from "@/components/YouMightAlsoLike";
import ToptierWayToTravel from "@/components/ToptierWayToTravel";
import NeedToKnowDetails from "@/components/NeedToKnowDetails";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return(
  <div>
    <PropertyCard/>
    <RoomsList/>
    <ToptierWayToTravel/>
    <Reviews/>
    <YouMightAlsoLike/>
    <NeedToKnowDetails/>
    <FAQ/>
  </div>
  );
}
