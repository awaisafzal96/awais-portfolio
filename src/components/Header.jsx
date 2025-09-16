import React, { forwardRef } from 'react';

const Header = forwardRef((props, ref) => {
    return (
        <header ref={ref} id="header" className="text-center p-8 bg-opacity-50 bg-indigo-900 rounded-xl mb-8 shadow-lg opacity-0 translate-y-10 transition-all duration-700">
            <img
                src="/profile.jpg" // Replace with your actual image URL or local path (e.g., https://github.com/yourusername/awais-portfolio/raw/main/public/profile.jpg)
                alt="Muhammad Awais Profile"
                className="w-40 h-40 rounded-full border-4 border-pink-400 mx-auto mb-4 hover:scale-110 hover:rotate-3 transition-transform duration-500"
            />
            <h1 className="text-5xl font-extrabold text-pink-300">Muhammad Awais</h1>
            <h2 className="text-2xl font-semibold text-purple-300">Junior DevOps Engineer</h2>
            <p className="mt-4">
                <a href="https://linkedin.com/in/awaisafzal221" className="text-blue-300 hover:text-blue-100 mx-4 transition-colors duration-300">LinkedIn</a>
                <a href="https://github.com/awaisafzal96" className="text-blue-300 hover:text-blue-100 mx-4 transition-colors duration-300">GitHub</a>
            </p>
            <p className="mt-2 text-purple-200 italic">Currently open to opportunities in DevOps and Cloud Engineering</p>
        </header>
    );
});

export default Header;