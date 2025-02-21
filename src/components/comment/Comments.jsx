import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Grid2, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (error) return <h4>Error...</h4>;

  return (
    <Grid2
      sx={{
        boxShadow: "rgba(0,0,0,.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid2 size={{ sx: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid2
            size={{ xs: 12 }}
            key={comment.id}
            m={2}
            p={2}
            border="1px solid gray"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
}

export default Comments;
