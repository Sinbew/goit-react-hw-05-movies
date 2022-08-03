import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Home from './Pages/Home/Home';
import { Movies } from './Pages/Movies/Movies';
import { Navigation } from './components/Navigation/Navigation';
import { MovieDetails } from './Pages/MovieDetails/MovieDetails';
import { Cast } from './components/Cast/Cast';
import { Reviews } from './components/Reviews/Reviews';
import { NotFound } from 'Pages/NotFound';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

const Home = lazy(() => import('./Pages/Home/Home'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
};
