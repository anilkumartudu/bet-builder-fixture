import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import { getMarkets, getSelections } from "../../services/FootballService";
import CustomHeader from "../../component/CustomHeader";

const MatchInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { matchInfo } = location.state;

  const [markets, setMarkets] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState("");
  const [selections, setSelections] = useState(null);
  const [selectedLeg, setSelectedLeg] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetMarkets();
    handleGetSelections();
  }, []);

  const handleGetMarkets = async () => {
    try {
      setIsLoading(true);
      const result = await getMarkets();
      setMarkets(result);
      setSelectedMarket(result[0]);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetSelections = async () => {
    try {
      setIsLoading(true);
      const result = await getSelections();
      setSelections(result);
      setSelectedLeg(result[0]);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <>
      <Stack direction="column" spacing={1}>
        <CustomHeader />
        <Box
          sx={{
            borderRadius: 50,
            backgroundColor: "#ed3634",
            width: 35,
            height: 35,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBackIcon
            sx={{ color: "#ffffff" }}
            fontSize="small"
            onClick={() => navigate(-1)}
          />
        </Box>
        <Box
          sx={{
            fontSize: 25,
            fontWeight: "bold",
            textTransform: "capitalize",

            paddingLeft: 10,
            backgroundColor: "#ed3634",
            color: "#ffffff",
            height: 65,

            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          Make it a bet builder?
        </Box>
        <Stack direction="row" position="relative">
          <Box
            sx={{
              width: "35%",
              backgroundColor: "#ed3634",
              color: "#ffffff",
              height: 65,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontWeight: "bold",
              }}
            >
              {moment(matchInfo.KickOffUtc).format(`MMM DD, YYYY`)}
            </Box>
            <Box>{moment(matchInfo.KickOffUtc).format(`kk:mm`)}</Box>
          </Box>
          <Box
            position="absolute"
            right="0"
            sx={{
              width: "70%",
              backgroundColor: "#000000",
              color: "#ffffff",
              clipPath: "polygon(5% 0, 100% 0%, 100% 100%, 0% 100%)",
              height: 65,

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {matchInfo.MatchName}
            </Box>
            <Box>{matchInfo.LeagueName}</Box>
          </Box>
        </Stack>
        <Stack direction="row">
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Box
              sx={{
                fontWeight: "bold",
              }}
              flex="1"
            >
              Selection:
            </Box>
            <Box flex="2">
              <FormControl fullWidth>
                {markets && (
                  <Select
                    id="select-market"
                    value={selectedMarket}
                    displayEmpty
                    onChange={(event) => setSelectedMarket(event.target.value)}
                    flex="4"
                  >
                    {markets.map((market) => (
                      <MenuItem value={market.MarketId}>
                        {market.MarketName}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Box
              sx={{
                fontWeight: "bold",
              }}
              flex="1"
            >
              Legs:
            </Box>
            <Box flex="2">
              <FormControl fullWidth>
                {selections && (
                  <Select
                    id="select-leg"
                    value={selectedLeg}
                    onChange={(event) => setSelectedLeg(event.target.value)}
                  >
                    {selections.map((selection) => (
                      <MenuItem value={selection.selectionId}>
                        {selection.selectionValue}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default MatchInfo;
