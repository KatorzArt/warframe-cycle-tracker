import { useEffect, useState } from "react";

function useApi(apiPath: string, cycleKey: string, cycles: [string, string]) {
  const [cycle, setCycle] = useState("");
  const [expireTime, setExpireTime] = useState(0);

  let reloadId: number;
  function fetchData() {
    fetch(apiPath)
      .then((res) => res.json())
      .then((data) => {
        setCycle(data[cycleKey] ? cycles[0] : cycles[1]);
        setExpireTime(Date.parse(data.expiry));
        reloadId = setTimeout(fetchData, expireTime);
      });
  }
  useEffect(() => {
    fetchData();
    return () => clearTimeout(reloadId);
  }, []);

  return { cycle, expireTime };
}

export default useApi;
