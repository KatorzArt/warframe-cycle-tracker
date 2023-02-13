import { useEffect, useState } from "react";
import OpenWorldHeader from "../components/OpenWorldHeader";
import useCycleApi from "../hooks/useCycleApi";

function CetusPage() {
  const [cycle, nextCycleTime, loadCycleData] = useCycleApi(
    "/cetusCycle",
    "isDay",
    ["Day", "Night"]
  );

  const [nextCycleTimeCountDown, setNextCycleTimeCountDown] = useState(0);

  useEffect(() => {
    loadCycleData();
  }, []);

  useEffect(() => {
    setNextCycleTimeCountDown(nextCycleTime);
    const countdownId = setInterval(
      () => setNextCycleTimeCountDown((v) => v - 1000),
      1000
    );
    const reloadId = setTimeout(loadCycleData, nextCycleTime);

    return () => {
      clearInterval(countdownId);
      clearTimeout(reloadId);
    };
  }, [nextCycleTime]);

  return (
    <>
      <OpenWorldHeader
        zone="Cetus"
        cycle={cycle}
        time={nextCycleTimeCountDown}
      />
    </>
  );
}

export default CetusPage;
