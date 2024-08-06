import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Heading from './Heading';
// import Testimonials from './Testimonials';
function TechyAbout() {

    const introRef = useRef<HTMLInputElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const text = new SplitType('.wrapper-text', { types: "words" });
        gsap.set(".wrapper", { autoAlpha: 1, visibility: 'visible' });
        gsap.set(text.words, { opacity: 0.1 });


        const initialAnimation = gsap.to(text.words, {
            opacity: 1,
            ease: "power2.in",
            stagger: { from: "start", amount: 2, ease: "power.out" },
            scrollTrigger: {
                trigger: '.about',
                start: "top bottom",
                end: "top 5%",
                scrub: true,
            }
        });

        const counter = gsap.from(".counter", {
            innerText: 0,
            duration: 4,
            snap: {
                innerText: 1
            },
            scrollTrigger: {
                trigger: '.about',
                start: "top 50%",
            }
        });
    }, {});

    return (
        <section id='About' className=' max-w-[1600px] m-auto about p-4 min-h-[100vh]'>
            <Heading title='Who Am I' trigger="about" />
            <div className=' p-4 gap-4 w-full justify-between '>
                <div ref={introRef} className='intro  w-full overflow-hidden'>
                    <div className='wrapper invisible'>
                        <p className='wrapper-text sm:text-4xl text-2xl sm:leading-[52px] text-pretty font-bold intro-text text-bg-white'>
                            Your go-to single solution for full-stack developer and software engineer. Developed and deployed a wide range of web-applications and custom solutions using various programming languages, can help you by building your dream tech product.
                        </p>
                    </div>
                </div>
                <div className='align-middle flex md:flex-row flex-col w-full  justify-between  text-center sm:mt-32 mt-8 max-w-[90vw]'>
                    <div className='sm:text-xl text-lg  mb-8  p-4 font-semibold md:w-1/3 w-full'>
                        <p> <span className='counter text-stroke sm:text-[170px] text-[122px] '>1</span></p>
                        <p className='bg-black mt-[-38px] relative p-2'>+ Years Of Experience</p>
                    </div>
                    <div className='sm:text-xl text-lg mb-8 p-4 font-bold md:w-1/3 w-full '>
                        <p><span className='counter text-stroke sm:text-[170px] text-[122px]'>2</span ></p>
                        <p className='bg-black mt-[-38px] relative p-2'>Successful Client Projects</p>
                    </div>
                    <div className='sm:text-xl text-lg  p-4 font-bold  md:w-1/3 w-full'>
                        <p><span className='counter text-stroke sm:text-[170px] text-[122px]'>7</span></p>
                        <p className='bg-black mt-[-38px] relative p-2'>+Projects in My Portfolio</p>
                    </div>
                </div>
            </div>
            {/* <Testimonials /> */}
        </section>
    )
}

export default TechyAbout