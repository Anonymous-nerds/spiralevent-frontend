import React from "react";
import LeaderboardCom from "../../components/LeaderboardCom";
import { Helmet } from "react-helmet";

const Leaderboard = () => {
  return (
    <div>
      <Helmet>
        <title>Leaderboard of Champions ~ Spiral Event</title>
      </Helmet>
      <LeaderboardCom />
    </div>
  );
};

export default Leaderboard;
