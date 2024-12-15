'use client'

import { motion, useScroll } from 'motion/react'

export default function Home() {
    const scrollProgress = useScroll()

    // const {scrollY, scrollX, scrollYProgress, scrollXProgress} = scrollProgress
    //will use it for upcoming events section

    // console.log(scrollY)
    // console.log(scrollYProgress)

    return (
        <main>
            <motion.div
                className="flex p-8 min-h-[100vh]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            >
                <div className="hero--text w-1/2">
                    <h1 className="text-5xl font-semibold letter tracking-wide">
                        Felicitations from the College Of Computing, Wishing you
                        a Detty December
                    </h1>
                </div>
            </motion.div>
        </main>
    )
}
