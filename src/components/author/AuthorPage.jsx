import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Avatar, Container, Grid2, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (error) return <h3>Error...</h3>;

  const {
    author: { name, field, avatar, description, post },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid2 container mt={10}>
        <Grid2
          size={{ xs: 12 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={6}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid2>
        <Grid2 container size={{ xs: 12 }} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid2 container size={{ xs: 12 }} spacing={2} mt={2}>
            {post.map((post) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default AuthorPage;
