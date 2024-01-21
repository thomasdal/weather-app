export const datesData: DateWeather[] = [
  { date: "2023-01-03", weather: "sunny" },
  { date: "2023-01-12", weather: "cloudy" },
  { date: "2023-02-05", weather: "snow" },
  { date: "2023-02-18", weather: "clear" },
  { date: "2023-03-08", weather: "partly cloudy" },
  { date: "2023-03-25", weather: "windy" },
  { date: "2023-04-14", weather: "sunny" },
  { date: "2023-05-01", weather: "cloudy" },
  { date: "2023-05-19", weather: "snow" },
  { date: "2023-06-02", weather: "clear" },
  { date: "2023-06-20", weather: "partly cloudy" },
  { date: "2023-07-07", weather: "windy" },
  { date: "2023-08-10", weather: "sunny" },
  { date: "2023-08-28", weather: "cloudy" },
  { date: "2023-09-15", weather: "snow" },
  { date: "2023-10-03", weather: "clear" },
  { date: "2023-10-19", weather: "partly cloudy" },
  { date: "2023-11-06", weather: "windy" },
  { date: "2023-12-01", weather: "sunny" },
  { date: "2023-12-18", weather: "cloudy" },
  { date: "2024-01-04", weather: "snow" },
  { date: "2024-01-21", weather: "clear" },
  { date: "2024-02-07", weather: "partly cloudy" },
  { date: "2024-02-24", weather: "windy" },
  { date: "2024-03-12", weather: "sunny" },
  { date: "2024-03-29", weather: "cloudy" },
  { date: "2024-04-15", weather: "snow" },
  { date: "2024-05-02", weather: "clear" },
  { date: "2024-05-19", weather: "partly cloudy" },
  { date: "2024-06-04", weather: "windy" },
  { date: "2024-07-08", weather: "sunny" },
  { date: "2024-07-25", weather: "cloudy" },
  { date: "2024-08-10", weather: "snow" },
  { date: "2024-08-27", weather: "clear" },
  { date: "2024-09-13", weather: "partly cloudy" },
  { date: "2024-10-01", weather: "windy" },
  { date: "2024-10-18", weather: "sunny" },
  { date: "2024-11-03", weather: "cloudy" },
  { date: "2024-11-20", weather: "snow" },
  { date: "2024-12-06", weather: "clear" },
  { date: "2024-12-23", weather: "partly cloudy" },
  { date: "2025-01-08", weather: "windy" },
];

const fillWeatherDates = (datesWeather: DateWeather[]): DateWeather[] => {
  if (datesWeather.length === 0) {
    return [];
  }

  // Sort the datesWeather array by date
  const sortedDates = datesWeather.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Initialize the array to store the filled dates
  const filledDates: DateWeather[] = [];

  // Set the initial last known weather
  let lastKnownWeather = sortedDates[0].weather;

  for (
    let date = new Date(sortedDates[0].date);
    date <= new Date(sortedDates[sortedDates.length - 1].date);
    date.setDate(date.getDate() + 1)
  ) {
    const dateString = date.toISOString().split("T")[0];

    // Find the weather for the current date
    const weatherEntry = sortedDates.find((entry) => entry.date === dateString);

    // Update the last known weather if found
    if (weatherEntry) {
      lastKnownWeather = weatherEntry.weather;
    }

    // Push the current date and last known weather to the array
    filledDates.push({ date: dateString, weather: lastKnownWeather });
  }

  return filledDates;
};

export const datesWeather = fillWeatherDates(datesData);
