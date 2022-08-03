import { useEffect, useState } from 'react';
// import { useMemo } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSerchMovies } from 'api/api';

import { Link } from 'react-router-dom';
import styles from './Movies.module.css';
import { toast } from 'react-toastify';
export const Movies = () => {
  // const queryObj = useMemo(() => Object.fromEntries([...query]), [query]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const [searchFilm, setSearchFilm] = useState([]);

  const location = useLocation();

  const onSubmit = evt => {
    evt.preventDefault();

    if (evt.target.query.value === '') {
      toast.error('Please enter a movie name');

      return;
    }

    setSearchParams({ query: evt.target.query.value });
    evt.target.query.value = '';
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getSerchMovies(query).then(setSearchFilm);
  }, [query, searchParams, setSearchFilm]);

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="query" />
        <button type="submit">Search a movie</button>
      </form>

      <hr />

      <>
        {' '}
        {searchFilm.length ? (
          <ul className={styles.filmList}>
            {searchFilm.map(el => {
              return (
                <li key={el.id}>
                  <img
                    width="500"
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                        : "'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'"
                    }
                    alt={el.name}
                  />
                  <Link state={{ from: location }} to={`/movies/${el.id}`}>
                    <p>{el.title ? el.title : el.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>Please, search a movie</h3>
        )}
      </>
    </>
  );
};
