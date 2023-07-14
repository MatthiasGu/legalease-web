import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export type IBadge = {
  id: string;
  name: string;
  slug: string;
}

export type IFirmRegion = {
  booking: boolean;
  clientSatisfactionRating: number;
  crossBorderCapability: string;
  expertiseAndReputationRating: number;
  id: string;
}

export type IFirm = {
  awards: string[];
  badges: IBadge[];
  firmRegions: IFirmRegion[];
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  websiteUrl: string;
}

const FirmRow = styled.div`
  display: flex;
  flex-direction: row;
`

const TierRanking = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 81px;
  background-color: #333333;

  line-height: 24px;
  color: white;
  font-family: 'Inter';
  font-size: 17px;
  weight: 700;
`


const FirmView: React.FC<{firm: IFirm, tier: string}> = ({tier, firm}) => {
  console.log(firm);

  return (
    <FirmRow>
      <TierRanking> {tier} </TierRanking>
    </FirmRow>
  )
}

export default FirmView;