import { useWeatherContext } from "../../contexts";
import { WeatherCard } from "./components";
import "./styles/weatherDisplay.css";

const WeatherDisplay = () => {
  const { dates, isLoading } = useWeatherContext();

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <ul className="weather-list">
      {dates ? (
        dates.map(({ date, weather }) => (
          <li key={date}>
            <WeatherCard date={date} weather={weather} />
          </li>
        ))
      ) : (
        <li>
          <p>
            <i>Select a range to display weather information</i>
          </p>
        </li>
      )}
    </ul>
  );
};

export default WeatherDisplay;
