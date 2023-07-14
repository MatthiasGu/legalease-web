import React, { useEffect, useState } from 'react'

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

const FirmView: React.FC<IFirm> = ({...firm}) => {
  console.log(firm);

  return <div></div>
}

export default FirmView;