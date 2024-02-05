import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import Padding from '../Padding';
import Contact from '../Contact';

const links = [
  { title: 'Home', description: '/home', pathName: '/' },
  { title: 'Links', description: '/links', pathName: '/links' },
  { title: 'Resume', description: '/resume', pathName: '/resume' },
  {
    title: 'Miscellaneous',
    description: '/miscellaneous',
    pathName: '/miscellaneous',
  },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Padding value={'10%'} />
      <Contact>{`LET'S BUILD SOMETHING TOGETHER`}</Contact>
      <Padding value={'10%'} />
      <SectionHeader title="Other Pages" />
      <Padding value={'3%'} />
      {links.map(
        (link, index) =>
          link.pathName !== location.pathname && (
            <React.Fragment key={index}>
              <Container
                onClick={() => {
                  navigate(link.pathName);
                }}
                title={link.title}
                description={link.description}
                titleWidth={'50%'}
                descriptionWidth={'50%'}
                descriptionStyle={{
                  textAlign: 'right',
                  textTransform: 'lowercase',
                }}
              />
              <Padding value={'1%'} />
            </React.Fragment>
          )
      )}
    </>
  );
};

export default Footer;
