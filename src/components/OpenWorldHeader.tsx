function formatTime(milliseconds: number): string {
  const str: (x: number) => string = (x) =>
    x.toLocaleString("en-US", { minimumIntegerDigits: 2 });

  const totalSecs = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor(totalSecs / 60) % 60;
  const seconds = totalSecs % 60;
  return `${str(hours)}:${str(minutes)}:${str(seconds)}`;
}

function OpenWorldHeader({
  zone,
  cycle,
  time,
}: {
  zone: string;
  cycle: string;
  time: number;
}) {
  return (
    <header>
      <div>
        <h1>{zone}</h1>
        <div>
          <p>Cycle</p>
          <p>{cycle}</p>
        </div>
        <div>
          <p>Ends in</p>
          <p>{formatTime(time)}</p>
        </div>
      </div>
    </header>
  );
}

export default OpenWorldHeader;
