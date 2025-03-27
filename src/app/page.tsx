
import { SidebarProvider } from "@/components/SidebarContext";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <SidebarProvider>
        <Hero />
      </SidebarProvider>
    </main>
  );
}
