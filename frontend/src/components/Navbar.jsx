import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/releases', label: 'Releases' },
];

const Navbar = () => {
    const location = useLocation();
    const isActive = (href) => location.pathname === href;
    return (
        <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.3, delay: 1 }}
            className="backdrop-blur-lg fixed gap-4 lg:gap-8 top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 flex flex-row items-center justify-center z-50 border border-secondary hover:border-primary transition-shadow duration-200 rounded-full lg:w-auto w-xs"
        >
            <img src="/logonobg.png" alt="Logo" className="h-10 w-10" />
            <span className="h-8 w-px bg-secondary" />
            {links.map(({ href, label }) => (
                <Link
                    key={`${href}${label}`}
                    to={href}
                    className={`text-lg font-medium transition-colors duration-200 ${isActive(href) ? 'text-primary' : 'text-secondary'} hover:text-primary`}
                >
                    {label}
                </Link>
            ))}
        </motion.nav>
    );
};

export default Navbar;