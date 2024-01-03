import React, { useContext } from 'react'
import { TermsList } from '../Texts/Texts'
import { Mycontext } from './Context'
import ScrollTo from './ScrollTo'

const Terms = () => {
    const context = useContext(Mycontext);
    const { Dark } = context;
    return (
        <>
            <ScrollTo />
            <div className={` font-Poppins1 mt-20  h-fit  pt-5 pb-20 px-3
        ${Dark ? 'Dark2' : ' Light1  '}
        `}>
                <h1 className=' text-center text-2xl pb-4'>Terms And Condition</h1>
                <div className=' flex flex-col gap-4 '>
                    <p>
                        {TermsList.Intro}
                    </p>
                    <p>
                        {TermsList.Desc}
                    </p>
                    <p>
                        {TermsList.Resp}
                    </p>
                    <p>
                        {TermsList.Prop}
                    </p>
                    <p>
                        {TermsList.Limit}
                    </p>
                </div>
                <button
                    onClick={() => window.history.back()}
                    className="md:px-6 md:py-2 px-4 py-2 mt-5   text-lg text-white"
                >
                    Go Back
                </button>
            </div>
        </>
    )
}

export default Terms