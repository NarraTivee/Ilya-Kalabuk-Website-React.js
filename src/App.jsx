import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

function App() {
    const [notification, setNotification] = useState(null);

    const showNotification = (type, message) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 5000);
    };

    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact showNotification={showNotification} />
            </main>

            <ScrollToTop />

            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    );
}

export default App;