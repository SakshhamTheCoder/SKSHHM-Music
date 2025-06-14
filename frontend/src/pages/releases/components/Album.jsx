import { motion } from "motion/react";

const Album = ({ id, idx, loaded, onLoad }) => (
    <motion.div
        className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        whileInView={loaded ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
    >
        <iframe
            src={`https://open.spotify.com/embed/album/${id}?theme=0`}
            width="100%"
            height="352"
            style={{ minHeight: 352, border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
            title={`Spotify Player for ${id}`}
            onLoad={onLoad}
        ></iframe>
    </motion.div>
);

export default Album;