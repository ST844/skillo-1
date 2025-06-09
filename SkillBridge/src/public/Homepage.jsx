 
import React from "react";
import { Button } from "@/components/ui/button";

export default function HandpanLanding() {
  return (
    <div className="font-sans bg-[#f5f3ef] min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">
          <span className="text-black">Master</span>
          <span className="text-black"> the Handpan</span>
        </div>
        <nav className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-black">Learn Handpan</a>
          <a href="#" className="hover:text-black">Shop Handpan</a>
          <div className="relative group">
            <button className="hover:text-black">Tools ▾</button>
            {/* Add dropdown here if needed */}
          </div>
        </nav>
        <div className="flex gap-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
            Start learning
          </Button>
          <Button variant="outline" className="rounded-full px-4 py-2">
            Log in
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Learning handpan made <br />
            <span className="text-black">simple & fun</span>
          </h1>
          <p className="text-gray-700 text-lg">
            From 'never played before' to mastering your handpan, embark on a
            journey with step-by-step courses led by world-renowned teachers
            and a vibrant community to support you.
          </p>
          <div className="flex gap-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full">
              Start learning for free
            </Button>
            <Button variant="outline" className="px-6 py-3 rounded-full">
              Explore courses
            </Button>
          </div>
        </div>

        {/* Instructors Section */}
        <div className="relative mt-12 md:mt-0 w-[400px] h-[400px]">
          {/* Replace with image URLs */}
          {[
            { top: "0%", left: "50%" },
            { top: "20%", left: "10%" },
            { top: "40%", left: "80%" },
            { top: "60%", left: "30%" },
            { top: "80%", left: "60%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
              style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
            >
              <img
                src={`https://via.placeholder.com/100?text=Instructor+${i + 1}`}
                alt={`Instructor ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
