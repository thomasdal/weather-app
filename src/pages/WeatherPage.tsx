import { MyCalendar, WeatherDisplay } from "../components";
import SunnyBackground from "../assets/sunny-bg.jpg";
import { useWeatherContext } from "../contexts";
import { Range } from "react-date-range";

const WeatherPage = () => {
  const { makeRequest } = useWeatherContext();

  const onChangeSelection = ({ startDate, endDate }: Range) => {
    if (!startDate || !endDate) {
      return;
    }
    makeRequest(startDate, endDate);
  };

  return (
    <div
      className="page-container"
      style={{
        backgroundImage: `url(${SunnyBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
      }}
    >
      <div className="content-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <MyCalendar onChange={onChangeSelection} />
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
