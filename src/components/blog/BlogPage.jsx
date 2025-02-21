import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid2, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  const navigate = useNavigate();

  if (loading) return <Loader />;

  if (error) return <h3>Error...</h3>;

  return (
    <Container maxWidth="lg">
      <Grid2 container>
        <Grid2
          size={{ xs: 12 }}
          mt={9}
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon
            onClick={() => {
              navigate(-1);
            }}
            style={{ cursor: "pointer" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <Comments slug={slug} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default BlogPage;
