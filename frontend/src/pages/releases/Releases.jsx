import { useState, useEffect, useCallback } from "react";
import BlurBg from "../../components/BlurBg";
import { motion } from "motion/react";
import Album from "./components/Album";

const Releases = () => {
    const [albums, setAlbums] = useState([]);
    const [appearsOn, setAppearsOn] = useState([]);
    const [loadedIframes, setLoadedIframes] = useState({});

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await fetch('http://192.168.29.29:3001/api/artist-releases');
                const data = await response.json();
                const mainAlbums = data.filter(item => item.album_group !== 'appears_on').map(item => item.id);
                const features = data.filter(item => item.album_group === 'appears_on').map(item => item.id);
                setAlbums(mainAlbums);
                setAppearsOn(features);
            } catch (error) {
                console.error('Error fetching releases:', error);
            }
        };
        fetchReleases();
    }, []);

    const handleIframeLoad = useCallback((id) => {
        setLoadedIframes(l => ({ ...l, [id]: true }));
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4"
            >
                <BlurBg />
                <div className="text-center text-4xl font-black z-10 relative text-primary">
                    Releases
                </div>
                <div className="text-center text-lg z-10 relative text-secondary mt-2">
                    Scroll down to discover my music
                </div>
            </motion.div>

            <div className="min-h-screen flex items-center justify-center flex-col gap-8 p-4">
                <div className="w-full max-w-5xl">
                    <div className="text-2xl font-bold mb-4 text-primary">Discography</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {albums.map((id, idx) => (
                            <Album
                                key={id}
                                id={id}
                                idx={idx}
                                loaded={loadedIframes[id]}
                                onLoad={() => handleIframeLoad(id)}
                            />
                        ))}
                    </div>
                </div>

                {appearsOn.length > 0 && (
                    <div className="w-full max-w-5xl mt-12">
                        <div className="text-2xl font-bold mb-4 text-primary">Featured On</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {appearsOn.map((id, idx) => (
                                <Album
                                    key={id}
                                    id={id}
                                    idx={idx}
                                    loaded={loadedIframes[id]}
                                    onLoad={() => handleIframeLoad(id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Releases;
