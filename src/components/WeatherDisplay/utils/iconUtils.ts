import { WeatherType } from "../types";
import CloudyIcon from "../../../assets/cloudy.svg";
import PartlyCloudyIcon from "../../../assets/partly-cloudy.svg";
import SnowyIcon from "../../../assets/snowy.svg";
import SunnyIcon from "../../../assets/sunny.svg";
import WindyIcon from "../../../assets/windy.svg";

export const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case WeatherType.Cloudy:
        return CloudyIcon;
      case WeatherType.PartlyCloudy:
        return PartlyCloudyIcon;
      case WeatherType.Windy:
        return WindyIcon;
      case WeatherType.Snow:
        return SnowyIcon;
      case WeatherType.Clear:
      case WeatherType.Sunny:
      default:
        return SunnyIcon;
    }
  };