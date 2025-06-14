import Button from "../../../components/Button";
import { motion } from "motion/react";

const socialLinks = [
    {
        name: "Spotify",
        url: "https://open.spotify.com/artist/7nCJcYHdNQNrZA7Px7TbZG",
    },
    {
        name: "SoundCloud",
        url: "https://soundcloud.com/skshhm",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/skshhm.music",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UC53mis2mynpZYQ1RHVrd8JQ",
    },
    {
        name: "Developer Portfolio",
        url: "https://sakshham.tech",
    }
];

const Socials = () => {
    return (
        <div className="min-h-[30vh] flex items-center justify-start flex-col gap-8 p-4 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center text-4xl font-black z-10 relative text-primary mb-4"
            >
                Connect With Me
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="flex flex-wrap gap-6 justify-center z-10"
            >
                {socialLinks.map((s, i) => (
                    <motion.div
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2 + i * 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <Button
                            to={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {s.name}
                        </Button>
                    </motion.div>
                ))}
            </motion.div>
            <div className="absolute inset-0 -z-10 pointer-events-none">
            </div>
        </div>
    );
};

export default Socials;