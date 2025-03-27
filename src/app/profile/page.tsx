import React from 'react'
import Profilee from "@/components/Profilee";
import { SidebarProvider } from "@/components/SidebarContext";
import Prof from "@/components/prof";
import type { AppProps } from "next/app";

export default function Profile() {
    return (
        <div>
            <SidebarProvider>
                <Profilee />
            </SidebarProvider>
        </div>
    )
}
