import dotenv from 'dotenv';

dotenv.config();

export const moviesURL = process.env.REACT_API;
export const apiKey = process.env.REACT_API_KEY;