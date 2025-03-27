import React from 'react'
import Profilee from "@/components/Profilee";
import { SidebarProvider } from "@/components/SidebarContext";

export default function Profile() {
    return (
        <div>
            <SidebarProvider>
                <Profilee />
            </SidebarProvider>
        </div>
    )
}
