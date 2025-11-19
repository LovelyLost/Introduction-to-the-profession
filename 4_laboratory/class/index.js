const axios = require("axios");
const ExcelJS = require("exceljs");

async function fetchWeatherForecast() {
  const city = "Москва";
  const lat = 55.75;
  const lon = 37.62;

  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: lat,
        longitude: lon,
        daily: "temperature_2m_max,temperature_2m_min,windspeed_10m_max",
        forecast_days: 7,
      },
    });

    const daily = response.data.daily;
    const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet("Прогноз на неделю");

worksheet.columns = [
  { header: "Дата", key: "date", width: 12 },
  { header: "Город", key: "city", width: 15 },
  { header: "Макс. темп. (°C)", key: "maxTemp", width: 18 },
  { header: "Мин. темп. (°C)", key: "minTemp", width: 18 },
  { header: "Макс. ветер (км/ч)", key: "wind", width: 20 },
];

for (let i = 0; i < daily.time.length; i++) {
  worksheet.addRow({
    date: daily.time[i],
    city: city,
    maxTemp: daily.temperature_2m_max[i],
    minTemp: daily.temperature_2m_min[i],
    wind: daily.windspeed_10m_max[i],
  });
}

const filename = `прогноз_погоды_${Date.now()}.xlsx`;
await workbook.xlsx.writeFile(filename);
console.log(
  `✅ Прогноз успешно сохранён в ${`прогноз_погоды_${Date.now()}.xlsx`}`
);

  } catch (e) {
    console.log("Произошла ошибка: ", e);
  }
}

fetchWeatherForecast();
