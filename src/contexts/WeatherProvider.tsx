// Context.tsx
import { ReactNode, createContext, useContext } from "react";
import { useRequest } from "../hooks";
import { fetchWeatherStatus } from "../api/api";

interface WeatherContextType {
  dates: DateWeather[] | null;
  error: Error | null;
  isLoading: boolean;
  makeRequest: (startDate: Date, endDate: Date) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type WeatherContextProviderProps = {
  children: ReactNode;
};

export const WeatherContextProvider = ({
  children,
}: WeatherContextProviderProps) => {
  const { response, error, isLoading, makeRequest } =
    useRequest(fetchWeatherStatus);

  return (
    <WeatherContext.Provider
      value={{
        dates: response,
        error,
        isLoading,
        makeRequest,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error(
      "useWeatherContext must be used within a WeatherContextProvider"
    );
  }
  return context;
};
