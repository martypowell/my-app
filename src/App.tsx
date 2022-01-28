import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./components/MainPage";
import MoviePage from "./components/MoviePage";
import "./api/server.js";
import MovieForm from "./components/MovieForm";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a client
const queryClient = new QueryClient();

// Please FORK
// If you have any issues wiht using codesandbox please let us know

// You CAN
// Use any libraries you want
// Style it how you want
// Solve problems the way you want
// Use js or ts

// You CANNOT
// edit api.server.js to accomplish a task

// In addition to meeting the requirements we will be looking for
// - Coding styles
// - Clean interface
// - Accessability

// You should use routing for the page and form components, the list will be the default route
// Should load a list of movies from `api/movies`
// Should show a loading message when movies are loading
// Should show a list of movies that includes name, year, and ability to edit the movie
// The name of the movie should be a link to the movie details (components/MoviePage)
// Show a message to the user if the movies do not load
// At the bottom of the list add the ability to add a new movie (this will use components/MovieForm)

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#ffea00",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <span
                  style={{
                    background: "white",
                    color: "#009688",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  MMDB
                </span>
              </Typography>
            </a>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="movies" element={<MainPage />} />
              <Route path="movies/:id" element={<MoviePage />} />
              <Route path="movies/new" element={<MovieForm />} />
              <Route path="movies/:id/edit" element={<MovieForm />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
}
