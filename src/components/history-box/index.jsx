import React, { useEffect, useState } from 'react'

import { getTranslate } from '../../service/api'

export default function HistoryBook() {
  const [translatesData, setTranslatesData] = useState([]);


  const fetch = async () => {
    setTimeout(() => {
      getTranslate().then(response => {
        setTranslatesData(response);
      });
    }, 3000);
    
  };

  useEffect(() => {
    fetch();
  });

  console.log(translatesData);
  return (
    <div>
      <div className='history-box_title'>
        History
      </div>


      {
        translatesData.map(element => {
          return (
            <>
              <div className='history-box'>
                <div className='history-box_area'>
                  <span>{element.source}</span>
                </div>

                <div className='history-box_area'>
                  <span>{element.target}</span>
                </div>
              </div>
            </>
          )
        })
      }

    </div>
  )
}
