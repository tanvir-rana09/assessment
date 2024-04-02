import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
                    <div>
                        <Header />
                    </div>
                    <div className="w-full">{children}</div>
                </main>
            </body>
        </html>
    );
}
