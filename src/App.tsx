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
      <h1 className='text-center mb-4'>
        FCT(Faucet Token)
      </h1>
      <Container style={{maxWidth: 756}}>
        <Faucet tokenContract={Token} />
        <br />
        <br />
        <TokenSend tokenContract={Token} />
      </Container>
    </div>
  );
}

export default App;
