import Image from "next/image";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
   <div>
    <Hero />
    <AboutUs />
    {/* <h1>Homepage</h1> */}
   </div>
  );
}
