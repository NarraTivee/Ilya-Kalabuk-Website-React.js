import { useEffect, useState } from 'react';

const Notification = ({ type, message, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, 4700);

        return () => clearTimeout(timer);
    }, [onClose]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`custom-notification ${type} ${isVisible ? 'show' : ''}`}>
            <div className="notification-content">
                <div className="notification-text">{message}</div>
                <button className="notification-close" onClick={handleClose}>&times;</button>
            </div>
        </div>
    );
};

export default Notification;