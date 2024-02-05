import React from 'react';
import Padding from '../../components/Padding';
import SectionHeader from '../../components/SectionHeader';
import Description from '../../components/Description';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import styles from './Resume.module.css';
import { motion } from 'framer-motion';
import { skills, timeline } from './data';

const Resume = () => {
  return (
    <>
      <Padding value={'3%'} />
      <SectionHeader title="About Me" />
      <Padding value={'3%'} />
      <Description style={{ textAlign: 'left', textTransform: 'none' }}>
        With a profound love for crafting exceptional digital experiences,
        I&#39;ve dedicated my journey as a software engineer to building
        innovative solutions that transcend boundaries. My work is characterized
        by a commitment to seamless functionality, elegant design, and a
        relentless drive to overcome challenges.
      </Description>
      <Padding value={'4%'} />
      <SectionHeader title="Timeline" />
      <Padding value={'3%'} />
      {timeline.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Container
              title={item.span}
              titleWidth={'25%'}
              customDescription={<CustomDescription item={item} />}
              descriptionWidth={'72%'}
              descriptionStyle={{
                textAlign: 'left',
              }}
              hoverEffect={false}
            />
            <Padding value={'3%'} />
          </React.Fragment>
        );
      })}
      <Padding value={'4%'} />
      <SectionHeader title="Skills" />
      <Padding value={'3%'} />
      {skills.map((skill, i) => {
        if (i % 2 === 0) {
          return (
            <React.Fragment key={i}>
              <Container
                title={skill}
                customDescription={<SectionTitle>{skills[i + 1]}</SectionTitle>}
                titleWidth={'50%'}
                descriptionWidth={'50%'}
                descriptionStyle={{
                  textAlign: 'left',
                }}
                hoverEffect={false}
              />
              <Padding value={'1%'} />
            </React.Fragment>
          );
        }
        return null;
      })}
    </>
  );
};

const CustomDescription = ({ item }) => {
  return (
    <>
      <motion.div
        className={styles.designationContainer}
        onClick={() => window.open(item.companySite)}
      >
        <motion.span
          whileHover={{
            color: '#FFFFFF',
            backgroundColor: '#242728',
            transition: { duration: 0.5 },
          }}
          className={styles.designation}
        >
          <SectionTitle>{item.title}</SectionTitle>&nbsp;
          <Description
            style={{
              textTransform: 'lowercase',
              marginLeft: '-2%',
              marginRight: '-2%',
            }}
          >
            at
          </Description>
          &nbsp;
          <SectionTitle>{item.company}</SectionTitle>&nbsp;
          <svg
            height={20}
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginLeft: '-2%' }}
          >
            <path
              d="M8 21h12.4a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6V16M3.5 20.5L12 12m0 0v4m0-4H8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </motion.span>
      </motion.div>
      <Padding value={'2%'} />
      <Description style={{ textAlign: 'left' }}>
        {item.description}
      </Description>
    </>
  );
};

export default Resume;
