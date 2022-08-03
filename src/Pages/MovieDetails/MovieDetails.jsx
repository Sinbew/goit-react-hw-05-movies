import { getDetailsMovies } from 'api/api';
import { useEffect, useState } from 'react';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getDetailsMovies(movieId).then(setMovieInfo);
  }, [movieId]);

  return (
    <>
      {movieInfo ? (
        <>
          <button
            className={styles.btn}
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </button>
          <hr />
          <div className={styles.wrapper}>
            <div>
              <img
                width="500"
                src={
                  movieInfo.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                    : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
                }
                alt={movieInfo.title}
              />
            </div>
            <div className={styles.descrWrapper}>
              <h2>
                {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
              </h2>
              <h3>
                User score:{' '}
                {Math.ceil(Number(movieInfo.vote_average) * 10) + '%'}
              </h3>
              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>
              <h3>Genres</h3>
              <span>
                {movieInfo.genres.map(genre => genre.name).join(', ')}
              </span>
            </div>
          </div>

          <hr />
          <div className={styles.info}>
            <h3>Additional inforamtion</h3>
            <Link
              className={styles.link}
              state={{ from: location?.state?.from ?? '/' }}
              to="cast"
            >
              Cast
            </Link>
            <br />
            <Link
              className={styles.link}
              state={{ from: location?.state?.from ?? '/' }}
              to="reviews"
            >
              Reviews
            </Link>
          </div>

          <Outlet />
        </>
      ) : (
        <h3>Ooops, something went wrong</h3>
      )}
    </>
  );
};

export default MovieDetails;
