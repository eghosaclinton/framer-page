'use client'
import { motion } from 'motion/react'

export default function ScrollButtons() {
    return (
        <div className="scroll--buttons flex text-lg font-bold flex-col gap-4 fixed bottom-8 right-12">
            <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-white flex justify-center items-center p-4 rounded-full drop-shadow-xl"
            >
                ++
            </motion.button>
            <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-white flex justify-center items-center p-4 rounded-full shadow-xl"
            >
                --
            </motion.button>
        </div>
    )
}
