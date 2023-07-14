import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {apiBaseUrl} from './index'
import FirmView, { IFirm } from './FirmView';

type IFirmData = {
  diversity: boolean;
  firm: IFirm;
  id: string;
  position: number;
  tier: string;
  trend: string;  
}

const FirmList: React.FC = () => {
  const [firmsData, setFirmsData] = useState<IFirmData[]>([]);

  const getFirms = (): void => {
    axios.get(`${apiBaseUrl}/firms/170`).then((response) => {
        let data: IFirmData[] = response.data.default;
        data.sort((a, b) => b.tier > a.tier ? -1 : a.tier > b.tier ? 1 : 0);
        setFirmsData(data);
      }
    );
  }

  function* sliceFirms(firms: IFirmData[]) {
    for (let i = 0; i < firms.length; i++) {
      let left = i;
      while (i < firms.length - 1 && firms[i].tier === firms[i + 1].tier) {
        i++;
      }
      yield firms.slice(left, i);
    }
  }

  useEffect(() => {
    getFirms();
  }, [])

  let slicedData = [...sliceFirms(firmsData)];
  console.log(slicedData);

  return (
    <div> 
      {slicedData.map((firmsData) => (
        <div>
          {firmsData.map((firmData) => (
            <FirmView {...firmData.firm}></FirmView>
          ))}      
        </div>      
      ))} 
    </div>
  )
}

export default FirmList