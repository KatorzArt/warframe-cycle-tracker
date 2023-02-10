import { useEffect, useState } from "react";
import OpenWorldHeader from "../components/OpenWorldHeader";
import useApi from "../hooks/useApi";

const API_ROUTE = "https://api.warframestat.us/pc/cetusCycle";

function CetusPage() {
  const { cycle, expireTime } = useApi(API_ROUTE, "isDay", ["Day", "Night"]);
  const [countdownTime, setCountdownTime] = useState(0);

  useEffect(() => {
    setCountdownTime(expireTime);
    const intervalId = setInterval(() => setCountdownTime(v => v - 1000), 1000);
    return () => clearTimeout(intervalId);
  }, [expireTime]);

  return (
    <>
      <OpenWorldHeader zone="Cetus" cycle={cycle} time={countdownTime} />
    </>
  );
}

export default CetusPage;
