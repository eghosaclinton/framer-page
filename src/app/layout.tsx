import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Header from './components/Header'
import ScrollButtons from './components/ScrollButtons'
import Footer from './components/Footer'
import './globals.css'

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

const marlinSoft = localFont({
    src: '../../public/fonts/FontMesa - MarlinSoftBasic-Regular.otf',
    variable: '--font-marlin-soft',
})

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: 'Welsu Computing',
    description: 'The Standard.',
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
                className={`${marlinSoft.variable} ${montserrat.variable} antialiased`}
            >
                <Header />
                {children}
                <ScrollButtons />
                
                <Footer />
            </body>
        </html>
    )
}
