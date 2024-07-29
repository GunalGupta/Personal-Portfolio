import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src="/_static/avatar.svg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
          priority
        />
        <h1 className="text-2xl font-bold">Gunal Gupta</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I’m a fullstack software engineer specializing in building scalable
            web applications and solutions having rich user interface using NextJS.
          </p>
          <p className="mt-4 mb-4">
            I am a creative problem solver who can take insights from one domain and apply them successfully to a completely unrelated domain.
            With a strong background in computer science, software development and AI. 
            My education and work experience have equipped me with a wide range of technical skills, 
            including proficiency in various programming languages and frameworks.
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <Link
              href="mailto:guptagunal@gmail.com"
              className="border-b inline-block"
            >
              send me an email
            </Link>
            &nbsp;or reach out on any of my social handles.
          </p>
        </div>
      </section>
      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />

      </React.Fragment>
  );
}
