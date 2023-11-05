import React from 'react'
import { Navbar } from '../../MenuComponents/Navbar/Navbar'
import { LateralMenu } from '../../MenuComponents/LateralMenu/LateralMenu'
import { Cube } from '../../Cube/Cube'
import { Section2, Section3,Section1 } from '../../Sections/index'
import { TraslucentMenu } from '../../TraslucentMenu/TraslucentMenu'
import NewsList from '../../Lists/NewsList'
import { LikedNewsProvider } from '../../Context/LikedNewsContext/LikedNewsContext';

export const HomePage = () => {
  return (
    <div>
    <Navbar />
    <LateralMenu/>
    <Cube/>
    <NewsList/>
    <Section3
    title="Section 3"
    id="section3"
    />
</div>
  )
}
