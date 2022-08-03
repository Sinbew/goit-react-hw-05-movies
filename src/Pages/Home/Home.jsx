import { Link } from 'react-router-dom';

import { fetchTrends } from 'api/api';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends().then(setMovies);
  }, []);

  return (
    <>
      <ul className={styles.filmList}>
        {movies.map(({ id, title, name, poster_path }) => {
          return (
            <li key={id} className={styles.filmListItem}>
              <Link className={styles.homeMovieItem} to={`/movies/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
                  }
                  alt={title}
                />

                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
