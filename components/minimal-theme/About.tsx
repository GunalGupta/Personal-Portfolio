import Image from "next/image";
import React from "react";
import Link from "next/link";
import JobTitleAnimation from "./JobTitleAnimation";
import SocialIcons from "./SocialIcons";

function MinimalAbout() {
    return(
        <React.Fragment>
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <section className="md:w-1/3 md:sticky md:top-4 md:self-start">
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                    <Image
                    src="/_static/avatar.svg"
                    width={150}
                    height={150}
                    alt="Gunal Gupta"
                    className="rounded-full mx-auto mb-4"
                    priority
                    />
                    <h2 className="text-2xl font-bold text-center mb-2">Gunal Gupta</h2>
                    <JobTitleAnimation />
                    <div className="flex justify-center space-x-4 mb-4">
                    <SocialIcons />
                    </div>
                    <div className="text-center hover:scale-110 transform transition duration-200">
                    <Link 
                        href="/resume"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        View Resume
                    </Link>
                    </div>
                </div>
                </section>
                <main className="md:w-2/3">
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">About this site</h2>
                    <p className="mb-4">
                    Welcome to my home on the internet. This site serves as my portfolio and a place to share my projects.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">About me</h2>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Full Stack Developer based in India</li>
                    <li><b>Tech Stack:</b> Next.js, Tailwind CSS, GSAP, Framer Motion</li>
                    <li><b>Programming Languages:</b> C/C++, Python</li>
                    <li><b>Education:</b> B.Tech in Computer Science and Engineering</li>
                    <li>Beyond development, I'm constantly exploring the internet for new tech stories and enjoy playing mobile games</li>
                    </ul>
                    <p className="mb-4">
                    If you'd like to hire me, please send me an email at{' '}
                    <Link
                        href="mailto:guptagunal@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        guptagunal@gmail.com
                    </Link>
                    {' '}or reach out on any of my social handles.
                    </p>
                </section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default MinimalAbout;