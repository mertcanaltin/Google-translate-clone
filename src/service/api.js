import axios from 'axios';

const translateApi = process.env.REACT_APP_TRANSLATE_API;
const serviceBackendApi = process.env.REACT_APP_SERVICE_BACKEND_API;

const translatePostData = (inputText,resultText) => {
    return new Promise(() => {
        let postTranslateData = {
            source: inputText,
            target: resultText
        }
        axios.post(serviceBackendApi+'translate', postTranslateData)
    });
}


export async function translateText(inputText) {
    let data = {
        q: inputText,
        source: 'en',
        target: 'tr'
      }
  
      axios.post(translateApi, data)
        .then((response) => {
            let resultText = response.data.translatedText
        translatePostData(inputText,resultText)
        document.getElementById('resultTextId').value = resultText;
        })
      const result = await translatePostData();
      console.log(result);
}


export function getTranslate() {
    return fetch(serviceBackendApi+'getAllTranslate')
    .then(function (data) { return data.json(); });
}