import Image from "next/image";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Layanan from '../components/Layanan';
import Proyek from '../components/Proyek';

export default function Home() {
  return (
   <div>
    <Hero />
    <AboutUs />
    <Layanan />
    <Proyek />
    {/* <h1>Homepage</h1> */}
   </div>
  );
}
