const BlurBg = () => {
    return <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
            src="/logonobg.png"
            alt="Background Logo"
            className="w-5/6 max-w-2xl opacity-80 blur-md lg:blur-xl select-none" />
    </div>;
};

export default BlurBg;