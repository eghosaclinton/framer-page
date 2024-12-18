'use client'
import { motion } from 'motion/react';
import CodeComponent from './CodeSnippet';

export default function Hero (){
    return (
    <motion.section
        className="flex flex-col gap-10 justify-center items-center py-12"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
        <div className="hero--text w-3/5">
            <h1 className="text-5xl font-semibold letter tracking-wide">
                Welcome to the College of Computing – Where Innovation Meets Opportunity!
            </h1>
        </div>
        <CodeComponent />
    </motion.section>
    );
}