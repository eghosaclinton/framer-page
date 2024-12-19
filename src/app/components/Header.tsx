'use client'
import { motion } from 'motion/react'
import NavBar from './Nav'

export default function Header() {
    return (
        <motion.header
            className="shadow-lg p-3"
            initial={{ y: -75 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
        >
            <NavBar />
        </motion.header>
    )
}
