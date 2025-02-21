import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        p="10px"
        textAlign="center"
        mt={10}
      >
        پروژه وبلاگ با GraphQL - دوره ریکت
      </Typography>
    </footer>
  );
}

export default Footer;
