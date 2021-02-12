import React from 'react';
import Navigation from './Navigation';
import SoundCloudAudio from './SoundCloudAudio';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, fluid} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <>
    <Container fluid>
      <Row className="justify-content-md-center">
        <Navigation />
      </Row>
    </Container>
    <Container>
    <SoundCloudAudio />
    </Container>
    <Button>Play Now</Button>
    </>
  )
}

export default App;
