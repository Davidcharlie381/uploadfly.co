import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import UpTime from "@/components/UpTime";
import PlausibleProvider from "next-plausible";

export default function Home() {
  return (
    <PlausibleProvider domain="uploadfly.cloud">
      <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/grid-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <Navbar />
      <Hero />
      </div>
      <Features />
      {/* <TechStack /> */}
      <UpTime />
    </PlausibleProvider>
  );
}
