
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jost",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Designo",
    description: "Creative design agency",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body className={jost.variable}>

                <header className="md:my-16 lg:mx-41.25 md:mx-10 my-8.75 mx-6">
                    <Navbar />
                </header>
                <main className="lg:mx-41.25 md:mx-10 mx-0">
                    {children}
                </main>
            </body>
        </html>
    );
}

