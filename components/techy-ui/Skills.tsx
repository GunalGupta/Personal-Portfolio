import React, { useEffect, useState, useRef } from 'react';
import Heading from './Heading';
import TagCloud from 'TagCloud';
import Image from 'next/image';

import {
    aws,
    bootstrap,
    git,
    mongodb,
    next,
    nodejs,
    react,
    streamlit,
    tailwind,
    typescript
} from '../../public';


interface YourComponentProps {
    container: string;
    texts: string[];
    newRadius: number;
}


const Skills: React.FC<YourComponentProps> = ({ container, texts, newRadius }) => {

    const skills = [react, nodejs, bootstrap, typescript, next, tailwind, mongodb, aws, streamlit, git];
    const [radius, setRadius] = useState(300);

    useEffect(() => {
        const container = '.tagcloud-container';
        const texts = [
            'Cloud ', 'CSS', 'JavaScript', 'TypeScript',
            'Boostrap', 'Tailwind', 'React',
            'NextJS', 'Laravel', 'Symfony', 'Express',
            'NodeJS', 'GSAP', 'MySql', 'MongoDB',
            'HTML', 'Script Shell', 'Figma', 'Framer Motion'
        ];


        // Determine the radius based on the device width
        const isMobile = window.innerWidth <= 1100; // Adjust the breakpoint as needed
        const newRadius = isMobile ? 200 : 300;

        setRadius(newRadius);

        const tagCloudInstance = TagCloud(container, texts, {
            radius: newRadius,
            initSpeed: 'slow',
            useHTML: true,
        });

    }, [container, texts, newRadius]);


    useEffect(() => {


    }, []);

    return (
        <section id='Skills' className='three skills max-w-[1600px] m-auto'>
            <Heading title='Tech-Stack' trigger='skills' />
            {/* mt-[128px] for testimonal in section skiils*/}
            {/* tagcloud-container */}
            <div className=' w-full sm:text-2xl text-xl flex-grow mb-16 mt-8 p-2'>
                <div className="flex sm:gap-8 gap-2">
                    {skills.map((image, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <Image src={image} alt={`Image ${index + 1}`} width={200} height={200} className="rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default Skills