import React from "react";
import { Navbar } from "../../components/navbar";
import Footer from "../../components/footer";

type AuxProps = {
    children: React.ReactNode;
}

export default function PublicLayout({ children }: AuxProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                {children}
            </body>
            <footer>
                <Footer />
            </footer>
        </>
    );
}