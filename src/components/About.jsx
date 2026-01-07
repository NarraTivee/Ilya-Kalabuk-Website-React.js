import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const skills = [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Git',
        'Responsive Design', 'Astro.js', 'SCSS/SASS', 'Web Design', 'Problem Solving'
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-top-row">
                        <div className="story-column slide-in" style={{ opacity: 0, transform: 'translateX(-30px)', transition: 'all 0.8s ease' }}>
                            <div className="story-timeline">
                                <div className="story-section">
                                    <h3 className="story-title">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        Моё начало в IT
                                    </h3>
                                    <div className="story-content">
                                        <p>Мой путь в мир технологий начался более трёх лет назад, когда мне было чуть больше тринадцати. Ещё с десяти лет я всем твердил, что буду специалистом в IT. Отец обратил внимание на мой интерес и отправил меня на курсы — так я впервые столкнулся с программированием.
                                            С самого начала меня захватила возможность создавать цифровые продукты собственными силами — превращать строки кода в работающие программы, способные решать реальные задачи.</p>
                                        <p>Первые шаги были непростыми: начиналось всё с Python. Изучать его было интересно и необычно, но после года я решил попробовать силы в веб-разработке. Много времени было уделено изучению HTML5 и CSS3. Начинал я с самого малого — с азов. Мне пришлось пройти через множество трудностей: я смотрел «гайды для полных чайников» :D и скрупулёзно конспектировал всё. Затем появились мои первые мини-проекты, где постоянно приходилось где-то что-то подсматривать, а новое изучать с помощью бесчисленных запросов в Google. Но с каждым новым проектом, с каждой решённой задачей я чувствовал, как растут моё понимание и уверенность.
                                        </p>
                                    </div>
                                </div>

                                <div className="story-section">
                                    <h3 className="story-title">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                        </svg>
                                        Развитие и рост
                                    </h3>
                                    <div className="story-content">
                                        <p>Со временем я начал углубляться в различные технологии. Frontend-разработка стала моей страстью — возможность создавать красивые, интуитивно понятные интерфейсы, которые приносят реальную пользу пользователям. Дизайны для собственных проектов я брал из открытых источников.</p>
                                        <p>Я начал изучать JavaScript, а затем — React.js, и был впечатлён его мощью и гибкостью. Компонентный подход, управление состоянием приложения, виртуальный DOM — всё это открыло для меня новые горизонты в веб-разработке.</p>
                                        <div className="story-highlight">
                                            <p><strong>Ключевой момент:</strong> Моим первым коммерческим проектом стал сайт для логистической компании Halaburda&Kravel Logistic. Именно тогда я понял, что программирование — это не просто хобби, а реальная работа, которая позволяет мне быть счастливым и увлечённым, создавая при этом ценности для бизнеса. В тот момент, после получения первой небольшой прибыли, у меня загорелись глаза, а желание работать, учиться и пробовать что-то новое выросло невероятно. С этого дня я начал упорно работать над собой.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="code-column slide-in" style={{ opacity: 0, transform: 'translateX(30px)', transition: 'all 0.8s ease 0.2s' }}>
                            <div className="code-animation">
                                <div className="code-line">// Personal Developer Profile</div>
                                <div className="code-line">const ilyaKalabuk = {'{'}</div>
                                <div className="code-line indent">personalInfo: {'{'}</div>
                                <div className="code-line indent indent">name: "Ilya Kalabuk",</div>
                                <div className="code-line indent indent">age: 17,</div>
                                <div className="code-line indent indent">location: "Grodno, Belarus",</div>
                                <div className="code-line indent indent">education: "Student"</div>
                                <div className="code-line indent">{'},'}</div>
                                <div className="code-line indent">skills: {'{'}</div>
                                <div className="code-line indent indent">frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],</div>
                                <div className="code-line indent indent">tools: ["Git", "VS Code", "Pinterest"],</div>
                                <div className="code-line indent indent">languages: ["JavaScript", "Python Basics", "SQL Basics"],</div>
                                <div className="code-line indent indent">learning: ["Node.js", "TypeScript"]</div>
                                <div className="code-line indent">{'},'}</div>
                                <div className="code-line indent">experience: {'{'}</div>
                                <div className="code-line indent indent">years: "3+",</div>
                                <div className="code-line indent indent">projects: "50+",</div>
                                <div className="code-line indent indent">commercial: "Halaburda&Kravel Logistic"</div>
                                <div className="code-line indent">{'},'}</div>
                                <div className="code-line indent">philosophy: "Continuous learning and innovation",</div>
                                <div className="code-line indent">status: "Open for new opportunities"</div>
                                <div className="code-line">{'};'}</div>

                                <div className="code-line" style={{ marginTop: '20px' }}>// Current Focus</div>
                                <div className="code-line">const currentGoals = [</div>
                                <div className="code-line indent">"Master advanced React patterns",</div>
                                <div className="code-line indent">"Build full-stack applications",</div>
                                <div className="code-line indent">"Explore AI in web development",</div>
                                <div className="code-line indent">"Contribute to open source"</div>
                                <div className="code-line">];</div>

                                <div className="code-line" style={{ marginTop: '20px' }}>// Contact</div>
                                <div className="code-line">const contact = {'{'}</div>
                                <div className="code-line indent">email: "ilyaaleksandrovich00@gmail.com",</div>
                                <div className="code-line indent">github: "github.com/NarraTivee",</div>
                                <div className="code-line indent">telegram: "@overcustt",</div>
                                <div className="code-line indent">available: true</div>
                                <div className="code-line">{'};'}</div>

                                <div className="code-terminal-footer">
                                    <div className="terminal-status">Connected</div>
                                    <div className="terminal-prompt">overcustt@dev:~$</div>
                                    <div className="terminal-cursor">_</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="full-width-story slide-in" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.8s ease 0.4s' }}>
                        <div className="story-quote">
                            "Код - это не просто набор инструкций для компьютера. Это язык, на котором мы говорим с будущим."
                        </div>

                        <div className="story-section">
                            <h3 className="story-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                                Современные технологии и AI
                            </h3>
                            <div className="story-content">
                                <p>В последнее время я активно погружаюсь в мир искусственного интеллекта и машинного обучения. JavaScript стал моим основным инструментом для работы с данными и алгоритмами. Я уверен, что будущее IT лежит на стыке веб-технологий и искусственного интеллекта.</p>
                                <p>Меня особенно интересует:</p>
                                <ul style={{ marginLeft: '20px', color: '#D89C9C' }}>
                                    <li>Разработка умных интерфейсов с элементами AI</li>
                                    <li>Оптимизация процессов с помощью машинного обучения</li>
                                    <li>Создание адаптивных систем, которые учатся на взаимодействии с пользователями</li>
                                </ul>
                            </div>
                        </div>

                        <div className="story-section">
                            <h3 className="story-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                Мои принципы и философия
                            </h3>
                            <div className="story-content">
                                <p>Я руководствуюсь несколькими ключевыми принципами, которые определяют мою работу:</p> <p><strong>1. Постоянное обучение:</strong> Технологии не стоят на месте, и чтобы оставаться в тонусе, нужно постоянно учиться. Каждый день я изучаю что-то новое — будь то новый фреймворк, паттерн проектирования или подход к решению проблем.</p>
                                <p><strong>2. Качество кода:</strong> Чистый, читаемый и поддерживаемый код — это не роскошь, а необходимость. Я следую принципам SOLID, пишу тесты и документирую свои решения.</p> <p><strong>3. Пользователь в центре:</strong> Любой продукт должен быть удобным, быстрым и решать конкретные проблемы пользователей. UX/UI — не просто красивые картинки, а продуманный опыт взаимодействия.</p>
                                <p><strong>4. Инновации:</strong> Я всегда ищу способы сделать что-то лучше, эффективнее, проще. Внедрение новых технологий — это не цель, а средство для достижения лучших результатов.</p>
                            </div>
                        </div>

                        <div className="story-section">
                            <h3 className="story-title">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                                </svg>
                                Цели и планы
                            </h3>
                            <div className="story-content">
                                <p>На ближайшие несколько лет я ставлю перед собой амбициозные цели:</p> <p><strong>Профессиональный рост:</strong> Углубить знания в современных фронтенд-фреймворках (React, Vue, Angular), освоить серверные технологии (Node.js, Django) и изучить архитектурные паттерны для создания масштабируемых приложений.</p>
                                <p><strong>AI/ML экспертиза:</strong> Получить глубокое понимание машинного обучения, нейронных сетей и их практического применения в веб-разработке.</p>
                                <p><strong>Коммерческий опыт:</strong> Работа над сложными проектами в команде профессионалов и участие в полном цикле разработки — от идеи до релиза и поддержки.</p> <p><strong>Сообщество:</strong> Делиться знаниями через блог и открытые проекты, а в перспективе — создать собственные обучающие материалы для начинающих разработчиков.</p>

                            </div>
                        </div>

                        <div className="story-stats">
                            <div className="stat-item">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Года в IT</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Проектов</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">6+</div>
                                <div className="stat-label">Технологий</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">∞</div>
                                <div className="stat-label">Энтузиазма</div>
                            </div>
                        </div>

                        <div className="skills">
                            <h3>Skills & Technologies</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;