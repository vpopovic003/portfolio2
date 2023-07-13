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
        Ovde je neko objasnjenje o tome ko sam ja i sta radim i malo je poduze. Napravicemo to duze i nesto napisati.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;