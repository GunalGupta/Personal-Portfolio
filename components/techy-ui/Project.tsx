"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { academic, bank_hamara, deepika_gupta, seraphic_advisors, taxnfinguru, virtual_lab_coa } from '@/public/_static/projects'
import Heading from './Heading'

export function Project() {
    const tabs = [
        {
            title: "Seraphic Advisors",
            value: "Seraphic Advisors",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>Seraphic Advisors</p>
                    <Image
                        src={seraphic_advisors.src}
                        alt="Project Image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                        style={{ top: '20%', width: '90%', height: '80%' }}
                    />
                </div>
            ),
        },
        {
            title: "TaxNFinGuru",
            value: "TaxNFinGuru",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>TaxNFinGuru</p>
                    <Image
                        src={taxnfinguru.src}
                        alt="Project Image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                        style={{ top: '20%', width: '90%', height: '80%' }}
                    />
                </div>
            ),
        },
        {
            title: "Plag Detector",
            value: "Plag Detector",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>Plag Detector</p>
                    <Image
                        src={academic.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                        style={{ top: '20%', width: '90%', height: '80%' }}
                    />
                </div>
            ),
        },
        {
            title: "Bank Hamara",
            value: "Bank Hamara",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>Bank Hamara</p>
                    <Image
                        src={bank_hamara.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                        style={{ top: '20%', width: '90%', height: '80%' }}
                    />
                </div>
            ),
        },
        {
            title: "Virtual Lab",
            value: "Virtual Lab",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>Virtual Lab</p>
                    <Image
                        src={virtual_lab_coa.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                        style={{ top: '20%', width: '90%', height: '80%' }}
                    />
                </div>
            ),
        },
    ];

    return (
        <section id='Projects' className='four Projects overflow-hidden'>
            <Heading title='Projects' trigger='Projects' />
            <div className="h-[25rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
                <Tabs tabs={tabs} />
            </div>
        </section>
    );
}