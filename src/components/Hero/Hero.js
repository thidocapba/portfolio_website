import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      A passionate, self-motivated, and hardworking graduated student looking for an entry-level/intern position as a web development.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.facebook.com/dunglodeptrai'}>More</Button>
    </LeftSection>
  </Section>
);

export default Hero;