'use client'
import Hero from './components/Hero';
import About from './components/About';

export default function Home() {
    // const {scrollY, scrollX, scrollYProgress, scrollXProgress} = scrollProgress
    //will use it for upcoming events section

    // console.log(scrollY)
    // console.log(scrollYProgress)

    return (
        <main className='flex flex-col gap-4'>
            <Hero />
            <About />
        </main>
    )
}
