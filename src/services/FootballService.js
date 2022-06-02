export async function getFixtures() {
  try {
    const response = await fetch(
      "http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1"
    );
    return await response.json();
  } catch (error) {
    return error.message;
  }
}

export async function getSelections(data) {
  try {
    const response = await fetch(
      "http://cms.bettorlogic.com/api/BetBuilder/GetSelections?sports=1"
    );
    return await response.json();
  } catch (error) {
    return error.message;
  }
}

export async function getMarkets(data) {
  try {
    const response = await fetch(
      "http://cms.bettorlogic.com/api/BetBuilder/GetMarkets?sports=1"
    );
    return await response.json();
  } catch (error) {
    return error.message;
  }
}
