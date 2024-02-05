// import styles from './Home.module.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import Container from '../../components/Container';
import Padding from '../../components/Padding';
import projectsData from '../Project/projects-data.json';

const projects = Object.values(projectsData);

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Portfolio | Jatin`;
  }, []);
  return (
    <>
      <Padding value={'3%'} />
      <SectionHeader title="Selected Projects" />
      <Padding value={'3%'} />
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Container
            onClick={() => navigate(`/projects/${project.title.toLowerCase()}`)}
            title={`[${project.title}]`}
            description={project.miniDescription}
            titleWidth={'25%'}
            descriptionWidth={'72%'}
            descriptionStyle={{ textAlign: 'left' }}
          />
          <Padding value={'2%'} />
        </React.Fragment>
      ))}
      {/* <Padding value={'4%'} />
   

      {/ * <SectionHeader title="Selected Projects" />
      <Padding value={'3%'} />
      {projects.map((project) => (
        <>
          <Container
            key={project.title}
            title={project.title}
            description={project.description}
            imageUri={project.imageUri}
          />
          <Padding value={'2%'} />
        </>
      ))} */}
    </>
  );
};

export default Home;
