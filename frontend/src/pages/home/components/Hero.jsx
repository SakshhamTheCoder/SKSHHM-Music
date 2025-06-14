import BlurBg from "../../../components/BlurBg";
import { motion } from "motion/react";

const Hero = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
            <div className="text-center text-4xl font-black z-10 relative text-primary">
                SKSHHM Music
            </div>
            <BlurBg />
        </motion.div>
    );
};

export default Hero;