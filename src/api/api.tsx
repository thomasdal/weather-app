import { datesWeather } from "../data/dates";

export const fetchWeatherStatus = (
  startDate: Date,
  endDate: Date
): Promise<DateWeather[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result: DateWeather[] = [];
      let lastKnownWeather: DateWeather | null = null;

      for (
        let date = new Date(startDate);
        date <= endDate;
        date = new Date(date.setDate(date.getDate() + 1))
      ) {
        // Adjust for timezone offset
        const localDate = new Date(
          date.getTime() - date.getTimezoneOffset() * 60000
        );
        const dateString = localDate.toISOString().split("T")[0];
        const weatherForDate = datesWeather.find(
          ({ date }) => date === dateString
        );

        if (weatherForDate) {
          lastKnownWeather = weatherForDate;
        }

        if (lastKnownWeather) {
          result.push({ ...lastKnownWeather, date: dateString });
        }
      }

      resolve(result);
    }, 1000);
  });
};
