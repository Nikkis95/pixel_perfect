import eact from 'react';
import ITCMLogo from '../assets/ITCM.logga.jpg';

export default function Header() {
    return (
        <header className="bg-white py-6">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                <img src={ITCMLogo} alt="ITCM Logo" className="h-10" />
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a></li>
                        <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
                        <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
