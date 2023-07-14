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

const Row = styled.div`
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
  font-size: 17px;
  font-weight: 700;
`

const FirmName = styled.h3`
  line-height: 25px;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`

const FirmView: React.FC<{firm: IFirm, tier: string}> = ({tier, firm}) => {
  console.log(firm);

  return (
    <Row>
      <TierRanking> {tier} </TierRanking>
      <FirmName> {firm.name} </FirmName>
      <Row>
        
      </Row>
    </Row>
  )
}

export default FirmView;