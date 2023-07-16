import React from 'react'
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
  gap: 8px;
`

const TierRanking = styled.div<{ disabled?: boolean;}>`
  width: 24px;
  height: 24px;
  border-radius: 81px;
  background-color: ${props => props.disabled? '#BDBDBD' : '#333333'};

  line-height: 24px;
  color: white;
  font-size: 17px;
  font-weight: 700;
`

const FirmName = styled.h3<{ disabled?: boolean;}>`
  line-height: 25px;
  font-size: 20px;
  font-weight: ${props => props.disabled ? 400 : 700};
  color: ${props => props.disabled && '#4F4F4F'};
  margin: 0;
  margin-left: 12px;
`

const FirmRatingLabel = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
`

const FirmViewWrapper = styled.div<{ disabled?: boolean;}>`
  padding: 16px;
  background-color: ${props => props.disabled ?  '#F2F2F2' : '#DBECF2'};
`

const FirmView: React.FC<{firm: IFirm, tier: string}> = ({tier, firm}) => {
  const bookingFirm = firm.firmRegions[0].booking;
  return (
    <FirmViewWrapper disabled={!bookingFirm}>
      <Row>
        <TierRanking disabled={!bookingFirm}> {tier} </TierRanking>
        <FirmName disabled={!bookingFirm}> {firm.name} </FirmName>
      </Row>
      { bookingFirm && (
      <Row>
        <FirmRating firmRegion = {firm.firmRegions[0]}/>
      </Row>
      )}
    </FirmViewWrapper>
  )
}

const FirmRating: React.FC<{firmRegion: IFirmRegion}> = ({firmRegion}) => {
  return (
    <Row style={{marginLeft: "44px"}}>
      <FirmRatingLabel> Expertise and reputation</FirmRatingLabel>
      <StarRating stars={convertRatingToStars(firmRegion.expertiseAndReputationRating)} /> 
      <FirmRatingLabel> Client Satisfaction</FirmRatingLabel>
      <StarRating stars={convertRatingToStars(firmRegion.clientSatisfactionRating)} /> 
    </Row>
  )
}

const StarRating: React.FC<{stars: number}> = ({ stars }) => {
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

function convertRatingToStars(rating: number) {
  const nearestHundred = Math.round(rating/100) * 100;
  return nearestHundred / 200;
}

export default FirmView;