import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "8a040b8c984d0bfceac31942353ef8e4",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  const [weather, lat, lon] = queryKey;
  // console.log(weather, lat, lon);

  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

// *axios
// =>npm i axios
// =>프론트에서 필요한 데이터를 서버에 요청하는데
// url에 필요한 변수값 등을 설정함
