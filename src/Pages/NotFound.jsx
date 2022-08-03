import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div>
      <h3>
        404 Page not found, <Link to="/">Go to Home Page</Link>
      </h3>
    </div>
  );
};
