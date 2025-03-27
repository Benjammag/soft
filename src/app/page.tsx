
import { SidebarProvider } from "@/components/SidebarContext";
import Profile from "@/components/Profilee";
import Hero from "../components/Hero";
import Prof from "@/components/prof";
// import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function Home() {
  return (
    <main>
      <SidebarProvider>
        <Hero />
        {/* <Profile /> */}


        {/* <Prof /> */}
      </SidebarProvider>
    </main>
  );
}
