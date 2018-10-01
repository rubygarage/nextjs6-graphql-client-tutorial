import React from 'react';
import { Home } from 'components';
import HeaderContainer from 'containers/HeaderContainer';
import ViewerRepoList from 'containers/ViewerRepoList';

const Index = () => (
  <Home
    header={<HeaderContainer title="Home" />}
    content={<ViewerRepoList />}
  />
);

export default Index;
