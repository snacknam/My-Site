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
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(getSeoulTime());
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const isDaytime = time ? time.getHours() >= 6 && time.getHours() < 18 : true;
  const icon = isDaytime ? "sun" : "moon";
  const displayTime = time ? formatTime(time) : "--:--:-- --";

  return (
    <div className="seoul-clock" aria-label={`Seoul time ${displayTime}`}>
      <img src={`/image/main/${icon}.svg`} className={icon} width="18" height="18" alt="" />
      <time>{displayTime}</time>
      <span>Seoul</span>
    </div>
  );
}
