import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>404</Box>
      <Box>Page Not Found</Box>
    </Container>
  );
};

export default NotFound;
