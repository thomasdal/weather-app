import { WeatherContextProvider } from "./contexts";
import { WeatherPage } from "./pages";

function App() {
  return (
    <div id="app">
      <WeatherContextProvider>
        <WeatherPage />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
