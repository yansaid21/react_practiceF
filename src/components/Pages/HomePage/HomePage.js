import React from 'react'
import { Navbar } from '../../MenuComponents/Navbar/Navbar'
import { LateralMenu } from '../../MenuComponents/LateralMenu/LateralMenu'
import { Cube } from '../../Cube/Cube'
import { Section2, Section3,Section1 } from '../../Sections/index'
import { TraslucentMenu } from '../../TraslucentMenu/TraslucentMenu'

export const HomePage = () => {
  return (
    <div>
    <Navbar />
    <LateralMenu/>
    <Cube/>
    <Section1
    title="Section 1"
    id= "section1"/>

    <Section2
    title="Section 2"
    id="section2"/>
    <Section3
    title="Section 3"
    id="section3"
    />
</div>
  )
}
