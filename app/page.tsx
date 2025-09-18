import About from "@/components/About";
import FutureRoadmap from "@/components/FutureRoadmap";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import InvestorsCall from "@/components/InvestorsCall";
import Rewards from "@/components/Rewards";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-white">
    {/* // <div className="font-sans min-h-screen bg-gradient-to-r from-[#333333] via-[#1a1a1a] to-black bg-[length:400%_400%] animate-[gradient_15s_ease_infinite] text-white"> */}
      <section className="flex flex-col">
        <Header />
        <About />
        <HowItWorks />
        {/* <Rewards /> */}
        {/* <InvestorsCall /> */}
        <FutureRoadmap />
        <Footer />
      </section>
    </div>
  );
}
