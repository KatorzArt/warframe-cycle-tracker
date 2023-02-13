import { useEffect, useState } from "react";

const API_ROUTE = "https://api.warframestat.us/pc";

function useCycleApi(
  path: string,
  cycleKey: string,
  cycles: [string, string]
): [string, number, Function] {
  const [cycle, setCycle] = useState("");
  const [nextCycleTime, setNextCycleTime] = useState(0);

  async function loadCycleData() {
    const response = await fetch(`${API_ROUTE}${path}`);
    const data = await response.json();
    setCycle(data[cycleKey] ? cycles[0] : cycles[1]);
    setNextCycleTime(Date.parse(data.expiry) - Date.now());
  }

  return [cycle, nextCycleTime, loadCycleData];
}

export default useCycleApi;
