import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEL({ title, slug, coverPhoto, author }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.secondary"
              fontWeight={600}
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height={194}
        image={coverPhoto.url}
        alt={title}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          sx={{
            minHeight: "64px",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blog/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
