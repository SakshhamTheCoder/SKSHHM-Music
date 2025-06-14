import { useState, useEffect, useRef } from "react";
import Button from "../../../components/Button";
import { motion, useScroll, useTransform } from "motion/react";

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 0]);

    const [latestRelease, setLatestRelease] = useState(null);
    useEffect(() => {
        const fetchLatestRelease = async () => {
            fetch('https://skshhm-music-backend.vercel.app/api/artist-releases')
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const latest = data[0];
                        setLatestRelease(latest.id);
                    }
                })
                .catch(error => console.error('Error fetching releases:', error));
        };
        fetchLatestRelease();
    }, []);
    return (
        <>
            <motion.div
                ref={ref}
                style={{ opacity, scale, y }}
                className="min-h-screen flex items-center justify-center flex-col gap-8 p-4"
            >
                <div className="text-center text-4xl font-black text-primary mb-4">
                    Latest Release
                </div>
                <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg min-h-[352px] flex items-center justify-center">
                    {latestRelease ? (
                        <iframe
                            src={`https://open.spotify.com/embed/album/${latestRelease}?theme=0`}
                            width="100%"
                            height="352"
                            style={{ minHeight: 352, border: 0 }}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            allowFullScreen
                            title="Spotify Player"
                        ></iframe>
                    ) : (
                        <div className="text-2xl font-bold text-primary">Loading...</div>
                    )}
                </div>
                <Button to="/releases">View All Releases</Button>
            </motion.div>
            <div className="min-h-[70vh] flex flex-col gap-8 items-center justify-center relative overflow-hidden p-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center text-4xl font-black z-10 relative text-primary mb-4"
                >
                    About Me
                </motion.div>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
                        className="rounded-full w-1/2 lg:w-1/3 border border-secondary p-4 mb-4 justify-items-center">
                        <motion.img
                            initial={{ scale: 0.97 }}
                            animate={{ scale: [1, 0.97, 1, 0.97, 1] }}
                            transition={{
                                duration: 5,
                                times: [0, 0.25, 0.5, 0.75, 1],
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            src="/logo.png"
                            alt="Artist"
                            className="rounded-full w-2/3 object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                        className="w-1/2 text-center text-lg z-10 relative text-primary mt-2">
                        I'm an Electronic Dance Music (EDM) producer who enjoys exploring sub-genres like
                        <strong> Future Bounce, Future House, Future Bass, and Melodic Dubstep.</strong> I've been passionate
                        about EDM since I was a kid and have always dreamed of making tracks like my inspirations —
                        <strong> Martin Garrix, Brooks, Mesto, Skrillex, Mike Williams, and Zedd.</strong>
                        <br /><br />
                        I started creating music using a mobile app called <strong>Music Maker JAM</strong>,
                        where I experimented with loops and made tons of fun tracks. While it was limited,
                        it was the spark that got me started. When I turned 16 and got my first PC, I moved on to
                        <strong> FL Studio</strong>, which I now use as my main DAW to produce music more
                        seriously and creatively.
                        <br /><br />
                        Alongside music, I also have a strong passion for programming. I've been a self-taught
                        coder since 8th grade and have built several websites and apps purely out of curiosity
                        and interest. I love bringing ideas to life and am always looking forward to building
                        new and exciting projects.
                    </motion.div>
                </div>

            </div>
        </>
    );
};

export default About;