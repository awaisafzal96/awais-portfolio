import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="about" className="max-w-4xl mx-auto p-8 bg-opacity-20 bg-purple-800 rounded-xl mb-8 shadow-md opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl font-bold text-center mb-6 text-pink-300">About Me</h2>
            <p className="text-lg leading-relaxed">
                I am a motivated BSSE graduate from the University of Central Punjab with hands-on experience in Linux, GitHub Actions, and core DevOps tools. I am eager to apply my skills in cloud technologies, CI/CD, and automation to support software delivery processes as a DevOps Intern.
            </p>
        </section>
    );
});

export default About;