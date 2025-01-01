import Image from 'next/image'
import { montserrat } from '../fonts'

export default function NavBar() {
    return (
        <div className="nav--text flex items-center justify-between w-[90%] mx-auto my-0">
            <div className="icon flex items-center --font-montserrat">
                <Image
                    aria-label="hero-text"
                    className="cursor-pointer"
                    src='/images/nnnn.png'
                    height={100}
                    width={100}
                    alt=""
                ></Image>
                <h2 className={`${montserrat.className}`}>
                    <span className="block font-medium tracking-widest text-base">
                        College Of
                    </span>
                    <span className="block text-blue-400 font-bold tracking-wide text-[1.3rem]">
                        Computing
                    </span>
                </h2>
            </div>
            <nav className="flex items-center list-none gap-8 text-[1rem] font-semibold tracking-wider">
                <li>About</li>
                <li>Events</li>
                <li>FAQs</li>
                <li>Footer</li>
            </nav>
        </div>
    )
}
