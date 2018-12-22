import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => (
  <Header icon textAlign="center">
    <Header.Content style={{ display: "flex", }}>
      <Icon name='gem' color="red" size="large" circular inverted />
      <Icon name='game' color="blue" size="massive" circular inverted />
      <Icon name='gem' color="red" size="large" circular inverted />
    </Header.Content>
    <br />
    <Header.Subheader>404 Page Not Found {' '}<Link to="/">Home</Link>.</Header.Subheader>
  </Header>
);

export default Home;