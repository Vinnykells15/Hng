function updateTime() {
  const utcTime = new Date().toUTCString();
  const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
  currentTimeUTC.textContent = utcTime.split(' ')[4];

  const dayOfWeekAbbrev = utcTime.split(',')[0];
  const dayNames = {
    "Sun": "Sunday",
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday"
  };
  const dayOfWeekFull = dayNames[dayOfWeekAbbrev];
  const currentDay = document.querySelector('[data-testid="currentDay"]');
  currentDay.textContent = dayOfWeekFull;
}

document.addEventListener('DOMContentLoaded', (event) => {
  updateTime();
  setInterval(updateTime, 60000);
});