const months = [
  "Jan",
  "Frb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Friday"];

function padTime(time) {
  return time < 10 ? "0" + time : time;
}

function formatTime(time) {
  const hours = padTime(time.getHours() % 12);
  const minutes = padTime(time.getMinutes());
  const seconds = padTime(time.getSeconds());

  return { hours, minutes, seconds };
}

export function getDate() {
  const time = new Date();
  const formatted = formatTime(time);

  const timestamp =
    days[time.getDay()] +
    " " +
    months[time.getMonth()] +
    " " +
    time.getDate() +
    " " +
    time.getFullYear() +
    " " +
    formatted.hours +
    ":" +
    formatted.minutes +
    ":" +
    formatted.seconds +
    ":" +
    time.getMilliseconds() +
    " " +
    (time.getHours() <= 11 ? "AM" : "PM");
  return timestamp;
}
