import Image from "next/image";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Layanan from '../components/Layanan';

export default function Home() {
  return (
   <div>
    <Hero />
    <AboutUs />
    <Layanan />
    {/* <h1>Homepage</h1> */}
   </div>
  );
}
