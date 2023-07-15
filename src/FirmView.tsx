import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './FirmView.css'

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

const FirmRatingLabel = styled.label`
  font-size: 12px;
  text-transform: uppercase;
`

function convertRatingToStars(rating: number) {
  const nearestHundred = Math.round(rating/100) * 100;
  console.log(nearestHundred);
  return nearestHundred / 200;
}

const StarRating: React.FC<{stars: number}> = ({ stars }) => {
  console.log(stars);
  return <div className="star-rating">
    {[...Array(5)].map((star, idx) => {
      let className = "star";
      if (idx <= stars) {
        className += "-filled";
      } else if (idx === (stars + 0.5)) {
        className += "-half";
      }
      return (
        <span className={className}>&#9733;</span>
      );
    })}
  </div>;
}
const FirmRating: React.FC<{firmRegion: IFirmRegion}> = ({firmRegion}) => {
  return (
    <Row>
      <FirmRatingLabel> Expertise and reputation</FirmRatingLabel>
      <StarRating stars={convertRatingToStars(firmRegion.expertiseAndReputationRating)} /> 
      <FirmRatingLabel> Client Satisfaction</FirmRatingLabel>
      <StarRating stars={convertRatingToStars(firmRegion.clientSatisfactionRating)} /> 
    </Row>
  )
}

const FirmView: React.FC<{firm: IFirm, tier: string}> = ({tier, firm}) => {
  console.log(firm);

  return (
    <>
    <Row>
      <TierRanking> {tier} </TierRanking>
      <FirmName> {firm.name} </FirmName>
    </Row>
    <Row>
      <FirmRating firmRegion = {firm.firmRegions[0]}/>
    </Row>
    </>
  )
}

export default FirmView;