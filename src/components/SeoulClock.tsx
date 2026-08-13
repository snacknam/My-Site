import { useEffect, useState } from "react";

function getSeoulTime() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(date);
}

export function SeoulClock() {
  const [time, setTime] = useState(getSeoulTime);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getSeoulTime()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const isDaytime = time.getHours() >= 6 && time.getHours() < 18;
  const icon = isDaytime ? "sun" : "moon";

  return (
    <div className="seoul-clock" aria-label={`Seoul time ${formatTime(time)}`}>
      <img src={`/image/main/${icon}.svg`} className={icon} width="18" height="18" alt="" />
      <time>{formatTime(time)}</time>
      <span>Seoul</span>
    </div>
  );
}
