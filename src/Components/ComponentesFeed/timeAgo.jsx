import { useEffect, useState } from "react";

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

  if (isNaN(seconds) || seconds < 0) return "Agora";
  if (seconds < 60) return "Agora";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `há ${minutes} min`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `há ${hours} h`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `há ${days} d`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `há ${weeks} sem`;

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `há ${months} ${months > 1 ? "meses" : "mês"}`;
  }

  const years = Math.floor(days / 365);
  return `há ${years} ${years > 1 ? "anos" : "ano"}`;
}

export function TimeAgo({ date, className }) {
  const [time, setTime] = useState(() => timeAgo(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeAgo(date));
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return <span className={`${className}`}>{time}</span>;
}
