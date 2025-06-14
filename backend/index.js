import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const ARTIST_ID = '7nCJcYHdNQNrZA7Px7TbZG';
// const ARTIST_ID = '4mHAu7NX2UNsnGXjviBD9e';

async function getSpotifyToken() {
    const res = await axios.post('https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
            },
        }
    );
    return res.data.access_token;
}

let releasesCache = null;
let cacheTimestamp = 0;
const CACHE_TTL = 1000 * 60 * 10;

async function getAllReleases(token, artistId) {
    let releases = [];
    let nextUrl = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single,appears_on&limit=50&market=IN`;
    while (nextUrl) {
        const res = await axios.get(nextUrl, { headers: { Authorization: `Bearer ${token}` } });
        releases = releases.concat(res.data.items);
        nextUrl = res.data.next;
    }

    const unique = {};
    releases.forEach(r => { unique[r.id] = r; });
    releases = Object.values(unique);
    releases.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    return releases;
}

app.get('/api/artist-releases', async (req, res) => {
    try {
        if (releasesCache && Date.now() - cacheTimestamp < CACHE_TTL) {
            return res.json(releasesCache);
        }
        const token = await getSpotifyToken();
        const releases = await getAllReleases(token, ARTIST_ID);
        releasesCache = releases;
        cacheTimestamp = Date.now();
        res.json(releases);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch releases', details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
