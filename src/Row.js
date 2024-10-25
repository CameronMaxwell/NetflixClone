import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log('Fetched movies:', request.data.results); // Log fetched movie data
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const sanitizeMovieName = (name) => {
        return name.replace(/[^a-zA-Z0-9 ]/g, "").trim();
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            const movieName = sanitizeMovieName(movie?.name || movie?.title || "");
            console.log(`Searching for trailer: ${movieName}`); // Log sanitized movie name
            movieTrailer(movieName)
                .then((url) => {
                    if (url) {
                        console.log(`Found trailer URL: ${url}`); // Log found trailer URL
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'));
                        console.log(`YouTube Video ID: ${urlParams.get('v')}`); // Log YouTube video ID
                    } else {
                        console.log('No trailer URL found');
                    }
                })
                .catch((error) => {
                    console.log('Error finding trailer:', error);
                });
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
