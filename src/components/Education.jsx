import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="education" className="max-w-4xl mx-auto p-8 bg-opacity-20 bg-purple-800 rounded-xl mb-8 shadow-md opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl font-bold text-center mb-6 text-pink-300">Education</h2>
            <div className="bg-opacity-50 bg-indigo-900 p-6 rounded-xl hover:bg-opacity-70 hover:-translate-y-2 transition-all duration-500 shadow-lg">
                <h3 className="text-xl font-semibold text-purple-300">Bachelor of Science in Software Engineering (BSSE)</h3>
                <p className="text-lg">University of Central Punjab, Lahore, Pakistan</p>
                <p className="text-lg">2020 - 2025</p>
            </div>
        </section>
    );
});

export default Education;