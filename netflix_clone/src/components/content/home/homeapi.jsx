import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homeapi = ({ startIndex, endIndex, setTotalItemsCount, onAgentClick }) => {
  const [songs, setsongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa")
      .then((res) => res.json())
      .then((json) => {
        setAgents(json.data);
        setIsLoading(false);
        setTotalItemsCount(json.data.length);
      })
      .catch((error) => console.log(error));
  }, [setTotalItemsCount]);

  const handleAgentClick = (songs) => {
    onAgentClick(songs);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="spotify_container">
      </ul>
    </div>
  );
};

export default Homeapi;