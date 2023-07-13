import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <div>
      <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          My name is Vladimir Popovic. <br />
          I am a web developer. Some time ago I decided to pursue the path of development and switch my career. I worked on numerous projects, some of which included developing software and tools for client needs. At the moment I work on a startup called Gitarologia, which is being created using Next.js. I mainly focus on front end development, but I also possess very solid knowledge of Python and C programming languages. I finished courses such as Hardvard's "CS50 - Introduction to Computer Science", MIT's "Introduction to Computer Science using Python" and "C Programming" by Tim Buchalka's academy. My goal is to expand my knowledge, to Back End development as well, and learn anything else from the field of Computer Science that will compliment me to become a solid engineer.
        </SectionText>

      </Section>
    </div>
  );
};

export default Timeline;
