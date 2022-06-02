import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)({
  fontSize: 25,
  fontWeight: "bold",

  height: 50,
  width: "100vw",
  backgroundColor: "#000000",
  color: "#ffffff",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CustomHeader = () => {
  return <StyledBox>Bet Builder Fixture</StyledBox>;
};

export default CustomHeader;
