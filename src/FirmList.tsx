import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {apiBaseUrl} from './index'
import FirmView, { IFirm } from './FirmView';
import styled from 'styled-components';

type IFirmData = {
  diversity: boolean;
  firm: IFirm;
  id: string;
  position: number;
  tier: string;
  trend: string;  
}

const FirmsTier = styled.div`
  margin-bottom: 24px;
`;

const Divider = styled.div`
  height: 2px;
`;

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

  useEffect(() => {
    getFirms();
  }, [])

  let firmsDataByTier = [...groupFirmsByTier(firmsData)];
  console.log(firmsDataByTier);

  return (
    <div> 
      {firmsDataByTier.map((firmsData) => (
        <FirmsTier>
          {firmsData.map((firmData) => (
            <>
              <FirmView tier={parseTier(firmData.tier)} firm = {firmData.firm}></FirmView>
              <Divider/>
            </>
          ))}      
        </FirmsTier>      
      ))} 
    </div>
  )
}

function* groupFirmsByTier(firms: IFirmData[]) {
  for (let i = 0; i < firms.length; i++) {
    let left = i;
    while (i < firms.length - 1 && firms[i].tier === firms[i + 1].tier) {
      i++;
    }
    yield firms.slice(left, i);
  }
}

function parseTier(tierString: string) {
  return tierString.split("_")[1];
}

export default FirmList