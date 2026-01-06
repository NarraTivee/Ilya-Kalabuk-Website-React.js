import { useEffect, useRef } from 'react';
import avatarImage from './images/ilya kalabyk.jpg';
const OrbitAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const style = document.createElement('style');
        style.textContent = `
      @keyframes orbit0 {
        from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
      }
      @keyframes orbit1 {
        from { transform: rotate(60deg) translateX(160px) rotate(-60deg); }
        to { transform: rotate(420deg) translateX(160px) rotate(-420deg); }
      }
      @keyframes orbit2 {
        from { transform: rotate(120deg) translateX(200px) rotate(-120deg); }
        to { transform: rotate(480deg) translateX(200px) rotate(-480deg); }
      }
      @keyframes orbit3 {
        from { transform: rotate(180deg) translateX(160px) rotate(-180deg); }
        to { transform: rotate(540deg) translateX(160px) rotate(-540deg); }
      }
      @keyframes orbit4 {
        from { transform: rotate(240deg) translateX(120px) rotate(-240deg); }
        to { transform: rotate(600deg) translateX(120px) rotate(-600deg); }
      }
      @keyframes orbit5 {
        from { transform: rotate(300deg) translateX(160px) rotate(-300deg); }
        to { transform: rotate(660deg) translateX(160px) rotate(-660deg); }
      }
      @keyframes orbit6 {
        from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const technologies = [
        {
            name: 'HTML5',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            duration: 20
        },
        {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            duration: 18
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            duration: 22
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            duration: 19
        },
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            duration: 21
        },
        {
            name: 'Tailwind',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            duration: 17
        },
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            duration: 23
        },
    ];

    return (
        <div className="avatar-container" ref={containerRef}>
            <div className="sun-core">
                <img
                    src={avatarImage}
                    alt="Ilya Kalabuk"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </div>

            {technologies.map((tech, index) => (
                <div
                    key={tech.name}
                    className="orbit-icon"
                    style={{
                        animation: `orbit${index} ${tech.duration}s linear infinite`,
                        animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.animationPlayState = 'paused';
                        e.currentTarget.style.transform += ' scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.animationPlayState = 'running';
                        e.currentTarget.style.transform = e.currentTarget.style.transform.replace(' scale(1.2)', '');
                    }}
                >
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            style={{
                                width: '70%',
                                height: '70%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrbitAnimation;