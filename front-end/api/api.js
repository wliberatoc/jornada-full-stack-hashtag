import "dotenv/config";
import axios from "axios";

const { NODE_ENV } = process.env;
//const URL = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";
const URL = "https://jornada-full-stack-hashtag-sn3g.onrender.com/api";

const responseArtisits = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtisits.data;
export const songsArray = responseSongs.data;
