import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const MainPage = () => {
  const { data, isLoading, error } = useQuery("movies", () =>
    fetch("/api/movies").then((res) => res.json())
  );

  return (
    <div className="App">
      <h1>My Movies</h1>
      {isLoading ? (
        <p>Loading Movies...</p>
      ) : error ? (
        <p>Somethign went wrong!!!</p>
      ) : (
        <List>
          {data.movies.map((movie: Movie, index: Number) => {
            const { id, name } = movie;

            return (
              <ListItem
                key={id.toString()}
                component={Link}
                to={`/movies/${id}`}
                secondaryAction={
                  <Link to={`/movies/${id}/edit`}>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                }
                divider={index < data.movies.length - 1}
              >
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </List>
      )}
      <Button
        component={Link}
        to="/movies/new"
        variant="contained"
        type="submit"
      >
        Add Movie
      </Button>
    </div>
  );
};

export default MainPage;
