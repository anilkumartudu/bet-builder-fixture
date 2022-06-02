import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import MatchInfo from "./views/MatchInfo";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match-info" element={<MatchInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
