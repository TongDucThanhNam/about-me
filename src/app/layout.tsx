import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {webMetaData} from "@/config/site";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL(webMetaData.url),
    title: {
        default: webMetaData.name,
        template: `%s - ${webMetaData.name}`,
    },
    description: webMetaData.description,
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: webMetaData.url,
        title: webMetaData.name,
        description: webMetaData.description,
        siteName: webMetaData.name,
        images: [
            {
                url: webMetaData.image,
                width: 1024,
                height: 768,
                alt: webMetaData.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: webMetaData.name,
        description: webMetaData.description,
        images: [webMetaData.image],
        creator: "@tongducthanhnam",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
