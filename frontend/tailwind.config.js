/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#cccccc', // rgba(255,255,255,0.8) ≈ #cccccc
                'secondary': '#404040', // rgba(255,255,255,0.25) ≈ #404040
            },
        },
    },
    plugins: [],
};
