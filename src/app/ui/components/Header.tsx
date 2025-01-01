'use client'
import { motion } from 'motion/react'
import NavBar from './Nav'

export default function Header() {
    return (
        <motion.header
            className="shadow-lg"
            initial={{ y: -75 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
        >
            <NavBar />
        </motion.header>
    )
}
