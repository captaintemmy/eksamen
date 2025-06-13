"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@/Components/ui/checkbox";
import GooeyNav from "@/Components/ui/GooeyNav";
import Particles from "@/Components/ui/Particles";

const dummydata = [
  "Counter-Strike 2",
  "League of Legends",
  "Rocket League",
  "Valorant",
  "Minecraft"
];

const navItems = [
  { label: "Home", href: "#" },
  { label: "Turneringer", href: "#" },
];

export default function LanSignup() {
  const [name, setName] = useState("");
  const [selectedGames, setSelectedGames] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (game: string) => {
    setSelectedGames((prev) => ({
      ...prev,
      [game]: !prev[game],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Takk for påmeldingen, ${name}!\nDu har valgt: ${dummydata.filter(g => selectedGames[g]).join(", ")}`);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 overflow-hidden bg-black">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleCount={180}
          particleSpread={10}
          speed={0.12}
          particleColors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
          alphaParticles
          particleBaseSize={120}
          sizeRandomness={1}
          cameraDistance={18}
          className="w-full h-full"
        />
      </div>

//NAVBAR
      <nav className="w-full max-w-6xl mx-auto flex items-center bg-transparent justify-between py-4 px-2 mb-12 z-10">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center shadow">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <span className="ml-2 text-white text-lg font-semibold tracking-wide">Eksempel LAN</span>
        </div>

        <div className="flex-1 flex justify-center bg-transparent ">
          <GooeyNav items={navItems} />
        </div>
        <div>
          <button className="flex items-center gap-2 px-3 py-1 rounded-md  text-gray-300 hover:bg-gray-700 transition">
            <span className=" w-7 h-7  rounded-full flex items-center justify-center text-white font-bold">U</span>
            <span className="hidden sm:inline">User</span>
          </button>
        </div>
      </nav>

      <div className="w-full max-w-xl bg-gray-900/90 rounded-2xl shadow-2xl border border-gray-800 p-8 z-10 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Påmelding til LAN</h1>
        <p className="text-gray-400 mb-8">Fyll ut skjemaet for å melde deg på spillkonkurranser.</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
              Navn
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Skriv inn navnet ditt"
            />
          </div>
          <div>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="text-gray-400 font-semibold pb-2">Spill</th>
                  <th className="text-gray-400 font-semibold pb-2 text-center">Delta?</th>
                </tr>
              </thead>
              <tbody>
                {dummydata.map(game => (
                  <tr key={game} className="bg-gray-800 rounded-lg">
                    <td className="py-2 px-4 rounded-l-lg text-white">{game}</td>
                    <td className="py-2 px-4 rounded-r-lg text-center">
                      <Checkbox
                        checked={!!selectedGames[game]}
                        onCheckedChange={() => handleCheckboxChange(game)}
                        className="mx-auto"
                        aria-label={`Delta i ${game}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow transition"
          >
            Meld på
          </button>
        </form>
      </div>
      <footer className="mt-12 text-gray-600 text-sm z-10">
        &copy; {new Date().getFullYear()} LAN Påmelding
      </footer>
    </main>
  );
}