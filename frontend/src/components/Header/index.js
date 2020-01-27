import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="InstaRocket" />
        </Link>

        <Link to="/new">
          <img src={camera} alt="Enviar publicação" />
        </Link>
      </Content>
    </Container>
  );
}
