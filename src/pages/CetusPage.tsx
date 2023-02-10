import { useEffect, useState } from "react";
import OpenWorldHeader from "../components/OpenWorldHeader";

const API_ROUTE = "https://api.warframestat.us/pc/cetusCycle";

function formatDuration(durationInMillis: number): string {
  const str: (x: number) => string = (x) =>
    x.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const durationInSecs = Math.floor(durationInMillis / 1000);
  const hours = Math.floor(durationInSecs / 3600);
  const minutes = Math.floor(durationInSecs / 60) % 60;
  const seconds = durationInSecs % 60;
  return `${str(hours)}:${str(minutes)}:${str(seconds)}`;
}

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
