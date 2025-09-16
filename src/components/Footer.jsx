import React from 'react';

const Footer = ({ toggleTheme, theme }) => {
    return (
        <footer className="bg-opacity-70 bg-indigo-900 text-white text-center p-6 w-full shadow-inner">
            <button
                onClick={toggleTheme}
                className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-md"
            >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <p className="mt-4 text-sm text-purple-200">© 2025 Muhammad Awais. All rights reserved.</p>
        </footer>
    );
};

export default Footer;