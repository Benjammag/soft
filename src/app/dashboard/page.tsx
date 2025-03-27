import React from 'react';
import Hero from "@/components/Hero";
import { SidebarProvider } from "@/components/SidebarContext";

export default function Dashboard() {
    return (
        <div>
            <SidebarProvider>
                <Hero />
            </SidebarProvider>

        </div>
    )
}
