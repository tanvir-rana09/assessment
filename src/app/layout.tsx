import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Assessment",
    description: "Assessment - Teachers Profile Student List Based On Course",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sen.className}>
                <main className="bg-whitex">
                    <div >
                        <Header />
                    </div>
                    <div className="flex gap-5 sm:p-5 p-2">
                        <div className="w-[25rem] hidden md:block ">
                            <Sidebar />
                        </div>
                        <div className="w-full">{children}</div>
                    </div>
                </main>
            </body>
        </html>
    );
}
