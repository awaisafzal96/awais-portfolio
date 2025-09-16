import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-800 to-purple-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-500 ease-in-out z-50 shadow-2xl`}>
            <div className="p-6 text-center border-b border-purple-600">
                <h2 className="text-2xl font-bold text-pink-300">Muhammad Awais</h2>
                <p className="text-sm text-pink-200">Junior DevOps Engineer</p>
            </div>
            <ul className="mt-6">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="block py-3 px-6 text-lg hover:bg-purple-700 hover:text-pink-200 transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.innerWidth < 768 && toggleSidebar()}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;