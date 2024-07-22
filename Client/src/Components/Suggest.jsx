import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import React, { useContext } from 'react'
import { Mycontext } from './Context';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import { Info } from '../Texts/TestData'

const Suggest = ({ setFillDummy, FillDummy, from, Pinshow, setPinshow }) => {
    const context = useContext(Mycontext);
    const { Dark, Dummyshow, setDummyshow } = context;

    return (
        <div className={` flex justify-center z-50 
        fixed
        `}>

            <motion.div
                className={`  h-32 sm:w-80 w-72 text-center fixed sm:top-24 top-16 sm:right-10  p-2 rounded-lg
            ${Dark ? 'bg-slate-700 text-white' : 'bg-slate-300'}
            `}
                initial={"Offscreen"}
                whileInView={"onScreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.1 }}
                variants={Animate5}
            >
                <span onClick={() => setDummyshow(!Dummyshow)} className=' absolute right-0 cursor-pointer text-white top-0 bg-red-500 rounded-se-lg px-4  '>X</span>
                <h1 className=' mt-6 mb-3'>
                    Want Data for Testing Purpose ?
                </h1>
                <button onClick={() => {
                    if (from === 'pincode') {
                        setPinshow(!Pinshow)
                    } else {
                        setFillDummy(!FillDummy);
                    }
                }
                } className=' px-2 py-1 text-white'>Get data</button>
                <Tooltip id="my-tooltip" style={{ width: '24rem', marginTop: '.4rem', backgroundColor: 'white', color: 'black' }} openOnClick place='bottom' />
                <span className='tooltip border-2 cursor-default border-slate-600 h-6 w-6 font-semibold  italic rounded-full absolute bottom-2 right-2'>
                    <a data-tooltip-id="my-tooltip" className='px-2  ' data-tooltip-content={Info}>
                        i
                    </a>
                </span>
            </motion.div>
        </div >
    )
}

export default Suggest