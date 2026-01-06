import { useEffect } from 'react';
// Импортируем все изображения
import astroHKL from './images/AstroHKL.jpg';
import bigSell from './images/BigSell.jpg';
import globerys from './images/Globerys.jpg';
import hklFirstVersion from './images/hklFIrstVershion.jpg';
import hklSecondVersion from './images/hklsecondvershion.jpg';
import rukHTMLCSS from './images/rukHTML+CSS.jpg';

const Projects = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Руководство по HTML5 & CSS3',
            description: 'Полноценное современное и простое руководство для новичков. Подробное объяснение с примерами реального кода.',
            image: rukHTMLCSS, // Используем импортированное изображение
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            liveDemo: 'https://narrativee.github.io/RukovodstvoHTML-CSS-for-GM3/',
            github: 'https://github.com/NarraTivee/RukovodstvoHTML-CSS-for-GM3'
        },
        {
            id: 2,
            title: 'Логистическая компания HKL',
            description: 'Итоговая версия сайта-визитки для логистической компании Halaburda&Kravel Logistic. Четко, минималистично и по делу. Выполнен на Astro.js.',
            image: astroHKL,
            tech: ['React.js', 'Astro.js', 'SCSS/SASS'],
            liveDemo: 'https://narrativee.github.io/HKL-with-Astro/',
            github: 'https://github.com/NarraTivee/HKL-with-Astro'
        },
        {
            id: 3,
            title: 'Версия сайта для логистической компании',
            description: 'Вторая версия сайта-визитки для логистической компании Halaburda&Kravel Logistic основанная на React.js.',
            image: hklSecondVersion,
            tech: ['React.js', 'SCSS/SASS'],
            liveDemo: 'https://narrativee.github.io/HKL_secondVershion/',
            github: 'https://github.com/NarraTivee/HKL_secondVershion'
        },
        {
            id: 4,
            title: 'Сайт-визитка логистической компании',
            description: 'Первая версия сайта-визитки на чистом HTML5 и CSS3 для логистической компании Halaburda&Kravel Logistic.',
            image: hklFirstVersion,
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            liveDemo: 'https://narrativee.github.io/HKL/',
            github: 'https://github.com/NarraTivee/HKL'
        },
        {
            id: 5,
            title: 'Интернет магазин',
            description: 'Версия интернет магазина по продажи цифровых товаров для реального заказчика основаный на чистом HTML5 и CSS3.',
            image: bigSell,
            tech: ['HTML5', 'CSS3'],
            liveDemo: 'https://narrativee.github.io/BigSell/',
            github: 'https://github.com/NarraTivee/BigSell'
        },
        {
            id: 6,
            title: 'Информационный двухстраничный сайт',
            description: 'Один из первых моих проектов. Стандартный информационный двухстраничный сайт на чистом HTML5 и CSS3.',
            image: globerys,
            tech: ['HTML5', 'CSS3'],
            liveDemo: 'https://narrativee.github.io/globerys/globerys.html',
            github: 'https://github.com/NarraTivee/globerys'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{
                                opacity: 0,
                                transform: 'translateY(30px)',
                                transition: `all 0.6s ease ${index * 0.1}s`
                            }}
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={(e) => {
                                        console.error(`❌ ОШИБКА: Не могу загрузить ${project.title}`);
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%233b0202'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='24' fill='%23FF5C5C' text-anchor='middle' dy='.3em'%3E" +
                                            project.title.split(' ')[0] + "%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.liveDemo} className="project-link" target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                    <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;