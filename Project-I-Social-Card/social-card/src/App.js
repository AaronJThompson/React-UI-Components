import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  const header = {
    imageSrc: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
    content: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
    postInfo: {
      title: 'Lambda School',
      userHandle: 'LambdaSchool',
      date: '26 jan',
    },
  }
  const card = {
    banner: {
      imageSrc: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png',
    },
    content: {
      title: 'Get started with React',
      body: "React makes it painless to create interactive Uls. Design simple views for each state in your application.",
      link: 'reactjs.org',
      url: "https://www.reactjs.org",
    },
  }
  return (

  );
};

export default App;
