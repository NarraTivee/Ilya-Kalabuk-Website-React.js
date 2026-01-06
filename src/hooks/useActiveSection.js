import { useEffect, useState } from 'react';

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'contact'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return activeSection;
};

export default useActiveSection;