import { Card } from "../..";
import { getWeatherIcon } from "../utils";

type WeatherCardProps = DateWeather;

const WeatherCard = ({ date, weather }: WeatherCardProps) => {
  const dateString = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Card>
      <Card.Icon
        icon={<img src={getWeatherIcon(weather)} />}
        label={<b>{weather}</b>}
      />
      <Card.Title>{dateString}</Card.Title>
    </Card>
  );
};

export default WeatherCard;
