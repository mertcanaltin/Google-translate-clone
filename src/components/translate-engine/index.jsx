import React, { useState, useEffect } from 'react';
import VoiceIcon from '../../assets/svgs/voice-icon';
import { translateText } from '../../service/api';
import './index.scss'

export default function TranslateEngine() {
  let [inputText, setInputText] = useState('');
  let [output, setOutput] = useState([]);


  
  useEffect(() => {
    setOutput(document.getElementById("result"));
  
    const delayDebounceFn = setTimeout(() => {
      translateText(inputText);
    }, 700)
    return () => clearTimeout(delayDebounceFn)
  })

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const startRecognition = () => {
    if (SpeechRecognition !== undefined) {
      let recognition = new SpeechRecognition();

      recognition.onstart = () => {
        output.setAttribute('placeholder', `Starting listening, speak in the microphone please 🦻`);
        output.classList.add("hide");

      };

      recognition.onspeechend = () => {
        output.setAttribute('placeholder', `I stopped listening`);
        recognition.stop();
      };

      recognition.onresult = (result) => {
        output.classList.remove("hide");
        output.value = `${result.results[0][0].transcript}`;

        inputText = result.results[0][0].transcript
        setInputText(inputText);

      };

      recognition.start();
    } else {
      output.setAttribute('placeholder', 'sorry not supported 😭');
    }
  };





  return (
    <>
      <div className='top-sub-area'>
        <div className='voice-icon'>
          <img src="https://i.ibb.co/jhCcCHw/Screen-Shot-2022-09-12-at-21-35-10.png" alt="" />
          <div onClick={() => {
            console.log('tıkladı');
            startRecognition();
          }}>
            <VoiceIcon />
          </div>



        </div>
      </div>


      <div className='translate-engine translate-engine_container'>

        <div className="wrapper translate-engine_wrapper">

          <div className="one">
            <textarea id="result" className='textArea_one' onChange={(e) => {
              setInputText(e.target.value)
            }}></textarea>

          </div>
          <div className="two">
            <textarea id='resultTextId' className='textArea_two' value='' placeholder='Translate' readonly></textarea>
          </div>
        </div>
      </div>
    </>
  )
}
