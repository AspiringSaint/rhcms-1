import { useNavigate } from 'react-router-dom';
import '../styles/pages/NotFoundPage.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="notfound-container">
            <h1 className="notfound-code">404</h1>
            <h2 className="notfound-message">Oops! Page not found</h2>
            <p className="notfound-description">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <button className="notfound-btn" onClick={handleGoBack}>
                Go Back
            </button>
        </div>
    );
};

export default NotFoundPage;
