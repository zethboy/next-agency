"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);
  return (
    <>
      {!isLoggedIn && <Navbar />}
      <div className="w-full">{children}</div>
      {!isLoggedIn && <Footer />}
      {isLoggedIn && (
        <div className="fixed top-0 left-0 w-full bg-[#8B0000] text-white text-center py-2 z-[9999] font-bold shadow-lg animate-fadein-section">
          Anda login sebagai <span className="text-yellow-400">Admin</span> &mdash;{' '}
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              window.location.reload();
            }}
            className="underline hover:text-yellow-400 ml-2"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
