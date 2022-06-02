import moment from "moment";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";

const CustomizedToggleButton = styled(ToggleButton)({
  fontSize: 12,
  lineHeight: 1.5,
  textTransform: "none",

  margin: 2,
  borderRadius: 30,
  width: 100,
  boxShadow: "none",
  borderColor: "#e2e2e2",
  backgroundColor: "#e2e2e2",
  color: "#000000",

  "&:hover": {
    boxShadow: "none",
    backgroundColor: "#ed3634",
    borderColor: "##ed3634",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ed3634",
    borderColor: "#ed3634",
  },
});

const CustomToggleButton = ({ date }) => {
  return (
    <CustomizedToggleButton value={`${date}`}>
      <Stack>
        <Box>{moment(date).format("ddd")}</Box>
        <Box>{moment(date).format("Do MMM")}</Box>
      </Stack>
    </CustomizedToggleButton>
  );
};

export default CustomToggleButton;
