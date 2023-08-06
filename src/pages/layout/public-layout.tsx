import React from "react";
import { Navbar } from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/scroll-to-top";

type AuxProps = {
    children: React.ReactNode;
}

export default function PublicLayout({ children }: AuxProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
            <ScrollToTop />
        </>
    );
}