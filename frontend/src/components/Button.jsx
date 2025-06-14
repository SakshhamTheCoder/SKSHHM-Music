import { Link } from 'react-router-dom';
const Button = ({ to, onClick, children, className = "", ...props }) => {
    // If 'to' is provided, render as a Link, else as a button
    if (to) {
        return (
            <Link
                to={to}
                className={`cursor-pointer px-6 py-2 rounded-full border border-secondary bg-transparent text-primary hover:border-primary transition-colors duration-200 text-lg font-medium shadow ${className}`}
                style={{ backdropFilter: 'blur(2px)' }}
                {...props}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer px-6 py-2 rounded-full border border-secondary bg-transparent text-primary hover:border-primary transition-colors duration-200 text-lg font-medium shadow ${className}`}
            style={{ backdropFilter: 'blur(2px)' }}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
