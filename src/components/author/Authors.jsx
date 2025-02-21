import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;

  if (error) return <h3>Error...</h3>;

  const { authors } = data;
  return (
    <Grid2
      container
      sx={{ boxShadow: "rgba(0,0,0,.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid2 size={{ xs: 12 }} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </Link>
          </Grid2>
          {index !== authors.length - 1 && (
            <Grid2 size={{ xs: 12 }}>
              <Divider variant="middle" />
            </Grid2>
          )}
        </React.Fragment>
      ))}
    </Grid2>
  );
}

export default Authors;
