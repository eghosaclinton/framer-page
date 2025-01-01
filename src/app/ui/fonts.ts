import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'


export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

export const marlinSoft = localFont({
    src: '../../../public/fonts/FontMesa - MarlinSoftBasic-Regular.otf',
    variable: '--font-marlin-soft',
})