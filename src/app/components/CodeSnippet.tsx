'use client'
import { useState } from 'react' 
import { motion } from 'motion/react'
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function CodeComponent(){
  const [output, setOutput] = useState<string | null>(null)
  const [executionTime, setExecutionTime] = useState<number | null>(null)

  const codeSnippet = `print(our-identity)`

  const runCode = () => {
    const startTime = performance.now()
    
    // Simulate code execution (in a real scenario, you'd use a proper Python interpreter)
    setTimeout(() => {
      const endTime = performance.now()
      setOutput("We are Computing!")
      setExecutionTime(endTime - startTime)
    }, 100)
  }

  return (
    <div className="code--snippet w-[45%] mx-auto">
      <div className="flex justify-between bg-gray-800 rounded-t-lg p-4">
        <SyntaxHighlighter 
          language="python" 
          style={atomDark}
          customStyle={{
            backgroundColor: 'transparent',
            padding: '0',
            margin: '0',
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
        <button 
          onClick={runCode} 
          className="bg-green-500 px-4 py-[.4rem] rounded-lg hover:bg-green-600 text-white">
          Run
        </button>
      </div>
      {output && (
        <motion.div
          initial={{height:0}}
          animate={{height: "8.5rem"}}
          transition={{ duration: 1, }}
        className="bg-gray-900 rounded-b-lg p-4 text-white">
          <motion.h3 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-lg font-semibold mb-2">
            Console Output:
          </motion.h3>
          <motion.pre 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 1.5, delay: 0.5 }}
          className="bg-gray-800 p-2 rounded">
            {output}
          </motion.pre>
          {executionTime && (
            <motion.p 
            initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 1.5, delay: 0.5}}
            className="mt-2 text-sm text-gray-400">
              Execution time: {executionTime.toFixed(2)} ms
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  )
}