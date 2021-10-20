import React from 'react';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Faucet from './components/Faucet'
import { TokenSend } from './components/TokenSend';

declare global {
  interface Window {
    ethereum: any
  }
}

function App() {
  const Token = FCTToken;
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6} md={6} sm={12} className='my-3'>
            <Faucet tokenContract={Token} />
          </Col>
          <Col lg={6} md={6} sm={12} className='my-3'>
            <TokenSend tokenContract={Token} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
