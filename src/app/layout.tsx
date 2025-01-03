import type { Metadata } from 'next'
import Header from './ui/components/Header'
import ScrollButtons from './ui/components/ScrollButtons'
import Footer from './ui/components/Footer'
import { Montserrat, Plaster } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

const plaster = Plaster({
    subsets: ["latin"],
    weight: "400",
    display: 'swap',
    variable: '--font-plaster',
})

const marlinSoft = localFont({
    src: '../../public/fonts/FontMesa - MarlinSoftBasic-Regular.otf',
    variable: '--font-marlin-soft',
})

export const metadata: Metadata = {
    title: 'Welsu Computing',
    description: 'The Standard.',
    openGraph: {
        title: "Welsu's College of Computing",
        images: '../../public/images/nnnn.png'
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="image/ico" />
            </head>
            <body
                className={`${marlinSoft.className} ${plaster.variable} ${montserrat.variable} antialiased`}
            >
                <Header />
                {children}
                <ScrollButtons />
                <Footer />
            </body>
        </html>
    )
}
