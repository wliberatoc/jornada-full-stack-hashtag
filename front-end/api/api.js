import axios from "axios";

const URL = "http://localhost:3001";

const responseArtisits = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtisits.data;
export const songsArray = responseSongs.data;
