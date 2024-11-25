import type {Metadata} from "next";
import localFont from "next/font/local";
import "../globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider} from "antd";
import {darkTheme} from "@/app/theme";
import Header from "@/app/[locale]/components/Header";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "KzL",
    description: "",
};

export default async function RootLayout({
                                             children,
                                             params: {locale}
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {


    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextIntlClientProvider messages={messages}>
            <AntdRegistry>
                <ConfigProvider theme={darkTheme}>
                    <Header/>
                    <main>{children}</main>
                </ConfigProvider>
            </AntdRegistry>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
