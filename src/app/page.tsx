import HomePage from "@/components/HomePage";
import Features from "@/components/Features";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HomePage />;
      <Features />
      <Testimonials />
    </>
  );
}
