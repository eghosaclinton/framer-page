import { Montserrat, Plaster } from 'next/font/google'
import localFont from 'next/font/local'


export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

export const plaster = Plaster({
    subsets: ["latin"],
    weight: "400",
    display: 'swap',
    variable: '--font-plaster',
})

export const marlinSoft = localFont({
    src: '../../../public/fonts/FontMesa - MarlinSoftBasic-Regular.otf',
    variable: '--font-marlin-soft',
})