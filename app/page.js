import Image from "next/image";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Layanan from '../components/Layanan';
import Proyek from '../components/Proyek';
import Testimoni from '../components/Testimoni';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
   <div>
    <Hero />
    <AboutUs />
    <Layanan />
    <Proyek />
    <Testimoni />
    <FAQ />
    <Contact />
    {/* <h1>Homepage</h1> */}
   </div>
  );
}
