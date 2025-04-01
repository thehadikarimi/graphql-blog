import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginLeft: "auto",
              color: "unset",
            }}
          >
            <Typography component="h1" variant="h5" fontWeight="bold" flex="1">
              وبلاگ ریکت
            </Typography>
          </Link>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
