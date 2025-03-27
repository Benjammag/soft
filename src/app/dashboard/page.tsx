import React from 'react';
import Hero from "@/components/Hero";
import { SidebarProvider } from "@/components/SidebarContext";
import Prof from "@/components/prof";
import type { AppProps } from "next/app";

export default function Dashboard() {
    return (
        <div>
            <SidebarProvider>
                <Hero />
            </SidebarProvider>

        </div>
    )
}
