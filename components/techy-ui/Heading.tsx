import React from 'react'


const Heading = ({ title, trigger }: { title: string, trigger: string }) => {
    return (
        <div className={`wrapper wrapper-heading overflow-hidden mb-8 invisible text-center `}>
            <p className='sm:text-[4em]  text-[3em]  font-bold uppercase intro-heading'>{title}</p>
        </div >
    )
}

export default Heading