// Form should include the following fields
// Movie Name, Year, Rating and Duration (in minutes)
// Form will be submitted to /api/movies
// After successful save the user should be redirected to new movies page
// validation would be nice
import { useQuery, useQueryClient } from "react-query";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let movieSchema = object({
  name: string().required(),
  year: number().required().positive().integer(),
});

const MovieTextField = styled(TextField)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(2),
}));

// TODO: Add formik for validation and submit

const MovieForm = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const queryClient = useQueryClient();
  const isEditing = id !== undefined;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(movieSchema),
  });
  const { data, isLoading } = useQuery(
    ["movies", { id }],
    () => fetch(`/api/movies/${id}`).then((res) => res.json()),
    {
      enabled: isEditing,
    }
  );

  const onSubmit = (data: any) => {
    fetch(isEditing ? `/api/movies/${id}` : `/api/movies`, {
      method: isEditing ? "PATCH" : "POST",
      body: JSON.stringify(data),
    }).then(() => {
      queryClient.invalidateQueries(["movies", { id }]);
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
      <h1>{isEditing ? `Edit ${"name goes here"}` : "Add a new movie"}</h1>
      <>
        {isLoading ? (
          <p>Loading Form...</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue={data?.movie?.name || ""}
              render={({ field }) => (
                <MovieTextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={errors.name}
                  helperText={errors.name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="year"
              control={control}
              defaultValue={data?.movie?.year || ""}
              render={({ field }) => (
                <MovieTextField
                  id="year"
                  label={"Year"}
                  variant="outlined"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  error={errors.year}
                  helperText={errors.year?.message}
                  {...field}
                />
              )}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        )}
      </>
    </div>
  );
};

export default MovieForm;
