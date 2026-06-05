import React from 'react';
import ITCMLogo from '../assets/ITCM.logga.jpg';

export default function Header() {
    return (
        <header className="bg-white py-6 line-header-border">
            <div className="w-full px-6 flex items-center justify-between">
                <img src={ITCMLogo} alt="ITCM Logo" className="h-16" />
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#whatWeDo" className="text-gray-700 hover:text-gray-900 hover:underline">WHAT WE DO</a></li>
                        <li><a href="#cases" className="text-gray-700 hover:text-gray-900 hover:underline">CASES</a></li>
                        <li><a href="#contact" className="text-gray-700 hover:text-gray-900 hover:underline">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
