import React from 'react';
import { useLocation } from 'react-router-dom';

interface LinkItem {
    name: string;
    link: string;
}

const Sidebar = () => {
    const location = useLocation();

    // Function to determine words based on the current path
    const getWordsForPage = (): LinkItem[] => {
        switch (location.pathname) {
            case '/':
                return [
                    { name: "Charles Babbage", link: "#charles-babbage" },
                    { name: "Ada Lovelace", link: "#ada-lovelace" },
                    { name: "Alan Turing", link: "#alan-turing" },
                    { name: "Grace Hopper", link: "#grace-hopper" }
                ];
            case '/logic-gates':
                return [
                    { name: "Historical Figures", link: "#historical-figures" },
                    { name: "Logic Gates" , link: "#logic-gates" },
                    { name: "Combinational Circuits", link: "#combinational-circuits"},
                    { name: "Sequential Circuits", link: "#sequential-circuits"},
                    { name: "Finite State Machines", link: "#finite-state-machines"}
                ];
            case '/computer-architecture':
                return [
                    { name: "Computer", link: "#computer-architecture" },
                    { name: "Architecture", link: "#architecture" },
                    { name: "Basics", link: "#basics" }
                ];
            case '/operating-systems':
                return [
                    { name: "Operating", link: "#operating-systems" },
                    { name: "Systems", link: "#systems" },
                    { name: "Intro", link: "#intro" }
                ];
            case '/algorithms':
                return [
                    { name: "Algorithms", link: "#algorithms" },
                    { name: "Data", link: "#data" },
                    { name: "Structures", link: "#structures" }
                ];
            case '/full-stack-development':
                return [
                    { name: "Full", link: "#full-stack-development" },
                    { name: "Stack", link: "#stack" },
                    { name: "Development", link: "#development" }
                ];
            default:
                return [
                    { name: "Page Not Found", link: "#not-found" }
                ];
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string): void => {
        e.preventDefault(); // Prevent the default anchor link behavior
        const header = document.querySelector('.header') as HTMLElement; // Cast as HTMLElement for TypeScript
        const headerHeight = header.offsetHeight; // Get the actual height of the header

        const target = document.querySelector(link) as HTMLElement; // Cast as HTMLElement
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10; // Subtract header height and add a small margin

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    const words = getWordsForPage();

    return (
        <div className="sidebar">
            {words.map(word => (
                <div key={word.name} className="sidebar-item">
                    <a href={word.link} className="sidebar-link" onClick={(e) => handleClick(e, word.link)}>{word.name}</a>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;