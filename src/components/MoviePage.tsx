// Heading should be the movie title
// Year, Rating and Duration should be included below the title, seperated by a " - "
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";

const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["movies", { id }], () =>
    fetch(`/api/movies/${id}`).then((res) => res.json())
  );
  return isLoading ? (
    <p>Loading Movies...</p>
  ) : error ? (
    <p>Something went wrong loading movie</p>
  ) : (
    <div>
      <h1>{data.movie.name}</h1>
      <p>{data.movie.year}</p>
      <Link to={`/movies/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default MoviePage;
