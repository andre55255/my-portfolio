import React from "react";
import { Navbar } from "../../components/navbar";

type AuxProps = {
    children: React.ReactNode;
}

export default function PublicLayout({ children }: AuxProps) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}