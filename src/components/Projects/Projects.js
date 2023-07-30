import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projectsWeb } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    {/* <HeaderThree title>Web Development</HeaderThree> */}
    <GridContainer>
      {projectsWeb.map(({ id, image, title, description, tags, source, visit, download}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit
            ? <ExternalLinks href={visit}>View Live</ExternalLinks>
            : null
            }
            {download
            ? <ExternalLinks href={download}>Download</ExternalLinks>
            : null
            }
            {source
            ? <ExternalLinks href={source}>GitHub</ExternalLinks>
            : null
            }
            {video
            ? <ExternalLinks href={source}>Video Demo</ExternalLinks>
            : null
            }     
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;