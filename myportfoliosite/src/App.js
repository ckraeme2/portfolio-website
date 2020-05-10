import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Navigator" scroll>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                </Navigation>
            </Header>
            <Drawer title="Navigator">
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
