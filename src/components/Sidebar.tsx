import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Function to determine words based on the current path
    const getWordsForPage = () => {
        switch(location.pathname) {
            case '/':
                return [
                    { name: "Charles Babbage", link: "#charles-babbage" },
                    { name: "Ada Lovelace", link: "#ada-lovelace" },
                    { name: "Alan Turing", link: "#alan-turing" }
                ];
            case '/logic-gates':
                return [{ name: "Logic", link: "#logic-gates" }, { name: "Gates", link: "#gates" }, { name: "Tutorial", link: "#tutorial" }];
            case '/computer-architecture':
                return [{ name: "Computer", link: "#computer-architecture" }, { name: "Architecture", link: "#architecture" }, { name: "Basics", link: "#basics" }];
            case '/operating-systems':
                return [{ name: "Operating", link: "#operating-systems" }, { name: "Systems", link: "#systems" }, { name: "Intro", link: "#intro" }];
            case '/algorithms':
                return [{ name: "Algorithms", link: "#algorithms" }, { name: "Data", link: "#data" }, { name: "Structures", link: "#structures" }];
            case '/full-stack-development':
                return [{ name: "Full", link: "#full-stack-development" }, { name: "Stack", link: "#stack" }, { name: "Development", link: "#development" }];
            default:
                return [{ name: "Page", link: "#not-found" }, { name: "Not", link: "#not" }, { name: "Found", link: "#found" }];
        }
    };

    const words = getWordsForPage();

    return (
        <div className="sidebar">
            {words.map(word => (
                <div key={word.name} className="sidebar-item">
                    <a href={word.link} className="sidebar-link">{word.name}</a>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;