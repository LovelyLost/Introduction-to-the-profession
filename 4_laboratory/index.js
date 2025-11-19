const axios = require("axios");
const ExcelJS = require("exceljs");

async function fetchWordData() {
  const words = ["heya", "kid", "cat"];

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Словарь");

  worksheet.columns = [
    { header: "Слово", key: "word", width: 20 },
    { header: "Часть речи", key: "partOfSpeech", width: 15 },
    { header: "Определение", key: "definition", width: 50 }
  ];

  for (const word of words) {
    try {
  
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data[0];

      for (const meaning of data.meanings) {
        for (const definitionObj of meaning.definitions) {
          worksheet.addRow({
            word: word,
            phonetic: data.phonetic || "",
            partOfSpeech: meaning.partOfSpeech,
            definition: definitionObj.definition
          });
        }
      }
    } catch (error) {
    
      console.log("Ошибка для слова ${word}:", error.message);
    }
  }

  const filename = "словарь_${Date.now()}.xlsx";
  await workbook.xlsx.writeFile(filename);
  console.log("✅ Словарь сохранён:", filename);
}

fetchWordData();
