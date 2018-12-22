import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => (
  <Header icon textAlign="center">
    <Header.Content style={{ display: "flex", }}>
      <Icon name='gem' color="red" size="large" circular inverted />
      <Icon name='game' color="blue" size="massive" circular inverted />
      <Icon name='gem' color="red" size="large" circular inverted />
    </Header.Content>
    <br />
    Jeopardy
    <Header.Subheader>Game</Header.Subheader>
  </Header>
);

export default Home;