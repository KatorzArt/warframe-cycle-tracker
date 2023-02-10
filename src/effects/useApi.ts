import { useEffect, useState } from "react";

function useApi(apiPath: string, cycleKey: string, cycles: [string, string]) {
  const [cycle, setCycle] = useState("");
  const [expireTime, setExpireTime] = useState(0);

  let reloadId: number;
  function fetchData() {
    fetch(apiPath)
      .then((res) => res.json())
      .then((data) => {
        const newExpireTime = Date.parse(data.expiry) - Date.now();
        setCycle(data[cycleKey] ? cycles[0] : cycles[1]);
        setExpireTime(newExpireTime);
        reloadId = setTimeout(fetchData, newExpireTime);
      });
  }
  useEffect(() => {
    fetchData();
    return () => clearTimeout(reloadId);
  }, []);

  return { cycle, expireTime };
}

export default useApi;
