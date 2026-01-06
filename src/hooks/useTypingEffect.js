import { useEffect, useState } from 'react';

const useTypingEffect = (phrases, speed = 100) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        let timer;

        const currentPhrase = phrases[phraseIndex];

        const type = () => {
            if (!isDeleting) {
                // Печатаем
                if (currentIndex < currentPhrase.length) {
                    setCurrentText(currentPhrase.substring(0, currentIndex + 1));
                    setCurrentIndex(prev => prev + 1);
                    timer = setTimeout(type, speed);
                } else {
                    // Ждем после завершения печати
                    timer = setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                // Удаляем
                if (currentIndex > 0) {
                    setCurrentText(currentPhrase.substring(0, currentIndex - 1));
                    setCurrentIndex(prev => prev - 1);
                    timer = setTimeout(type, speed / 2);
                } else {
                    // Переходим к следующей фразе
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                    timer = setTimeout(type, 500);
                }
            }
        };

        timer = setTimeout(type, speed);

        return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, phraseIndex, phrases, speed]);

    return currentText;
};

export default useTypingEffect;