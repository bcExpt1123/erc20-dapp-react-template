import React from 'react';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Faucet from './components/Faucet'
function App() {
  const Token = FCTToken;
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div>our faucet</div>
            <Faucet tokenContract={Token} />
          </Col>
          <Col>
            <div> our send area</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
