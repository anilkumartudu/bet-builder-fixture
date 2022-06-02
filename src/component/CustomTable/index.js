import moment from "moment";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    textAlign: "center",

    backgroundColor: "#ed3634",
    color: "#ffffff",
  },
  [`&.${tableCellClasses.body}`]: {
    cursor: "pointer",

    display: "flex",
    alignContent: "center",
    backgroundColor: "#f1efef",
  },
});

const CustomTable = ({ leagueName, leagueMatches }) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{leagueName}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leagueMatches.map((leagueMatch) => (
            <TableRow key={`${leagueMatch.MatchId}`}>
              <StyledTableCell
                onClick={() =>
                  navigate(`/match-info`, {
                    state: { matchInfo: leagueMatch },
                  })
                }
              >
                <Box sx={{ fontWeight: "bold", textAlign: "right", flex: 4 }}>
                  {leagueMatch.Team1Name}
                </Box>
                <Box sx={{ flex: 1, textAlign: "center" }}>
                  {moment(leagueMatch.KickOffUtc).format(`kk:mm`)}
                </Box>
                <Box sx={{ fontWeight: "bold", flex: 4 }}>
                  {leagueMatch.Team2Name}
                </Box>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
