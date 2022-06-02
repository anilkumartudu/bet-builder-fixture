import { useState, useEffect } from "react";
import moment from "moment";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { getFixtures } from "../../services/FootballService";
import CustomHeader from "../../component/CustomHeader";
import CustomToggleButton from "../../component/CustomToggleButton";
import CustomTable from "../../component/CustomTable";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format(`L`));
  const [fixtures, setFixtures] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetFixtures();
  }, []);

  const handleGetFixtures = async () => {
    try {
      setIsLoading(true);
      const result = await getFixtures();
      const sortedFixtures = {};

      if (result !== null) {
        result.forEach((element) => {
          if (Object.keys(sortedFixtures).includes(element.LeagueName)) {
            sortedFixtures[element.LeagueName].push(element);
          } else {
            sortedFixtures[element.LeagueName] = [];
            sortedFixtures[element.LeagueName].push(element);
          }
        });
      }
      setFixtures(sortedFixtures);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectedDate = (event, newSelectedDate) => {
    if (newSelectedDate !== null) setSelectedDate(newSelectedDate);
  };

  return (
    <>
      <Stack direction="column" alignItems="center" spacing={1}>
        <CustomHeader />
        <Box>
          <ToggleButtonGroup
            value={selectedDate}
            exclusive
            onChange={handleSelectedDate}
            aria-label="text alignment"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((x) => {
              const date = moment().add(x, "days").format(`L`);

              return <CustomToggleButton date={date} key={`${date}`} />;
            })}
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            fontWeight: "bold",
            textAlign: "left",

            color: "#000000",
            width: "45%",
          }}
        >
          Football
        </Box>
        <Box>
          {isLoading && <span>Loading.....</span>}
          {!isLoading && errorMessage && <span>{errorMessage}</span>}
          {fixtures &&
            Object.entries(fixtures).map((fixture) => {
              const [leagueName, leagueMatches] = fixture;
              return (
                <CustomTable
                  leagueName={leagueName}
                  leagueMatches={leagueMatches}
                  key={`${leagueName}`}
                />
              );
            })}
        </Box>
      </Stack>
    </>
  );
};

export default Home;
