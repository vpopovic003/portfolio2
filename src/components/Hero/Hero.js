import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello and welcome. This website contains my personal portfolio of projects I worked on. Check out the projects bellow or download my CV. Enjoy!
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1J_fzOAlMRHM9V9dRdnjBYSPvoO3uqRJO/view?usp=sharing'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;