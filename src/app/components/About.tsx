'use client'
import { motion } from 'motion/react'
import ParallaxText from './ParallaxText'

export default function About () {
    return (
    <motion.section className='parallax--section'>
        <ParallaxText baseVelocity={3}>
           | Computer Science | Software Engineering
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
           | Cyber Security | Information Technology
        </ParallaxText>
    </motion.section>
    )
}