import { useEffect, useState } from "react";
import OpenWorldHeader from "../components/OpenWorldHeader";

const API_ROUTE = "https://api.warframestat.us/pc/cetusCycle";

function CetusPage() {
  const [cycle, setCycle] = useState("");
  const [timer, setTimer] = useState(0);

  function fetchAndSetData() {
    fetch(API_ROUTE)
      .then((res) => res.json())
      .then((data) => {
        setCycle(data.isDay ? "Day" : "Night");
        setTimer(Date.parse(data.expiry) - Date.now());
      });
  }

  useEffect(() => {
    fetchAndSetData();
    const timerInterval = setInterval(() => setTimer(v => v - 1000), 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <OpenWorldHeader zone="Cetus" cycle={cycle} time={timer} />
    </>
  );
}

export default CetusPage;
