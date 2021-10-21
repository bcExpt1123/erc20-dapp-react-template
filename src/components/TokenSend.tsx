
import { useState } from 'react';
import { ethers } from 'ethers'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FC, ReactElement } from 'react-transition-group/node_modules/@types/react';
import { Alert, Form } from 'react-bootstrap';
import { tokenAddress } from '../constants';

export const TokenSend: FC<any> = (props: any): ReactElement => {

  const [userAccount, setUserAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [showAlert, setShowAlert] = useState('');
  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  };

  async function sendCoins() {
    if (!userAccount) {
      setShowAlert('User Account');
      return;
    }
    if (!amount) {
      setShowAlert('Amount');
      return;
    }
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, signer);
      const transation = await contract.transfer(userAccount, amount);
      await transation.wait();
    }
  }
  return (
    <Card style={{ background: "rgba(227, 104, 222, 0.71)" }}>
      <Card.Body>
        <Card.Subtitle>
          Send FCT to an Address
        </Card.Subtitle>
        <br></br>
        <div className="d-grid gap-2 text-left">
          <Form>
            <Form.Group className="mb-3" controlId="account">
              <Form.Label>User Account</Form.Label>
              <Form.Control type="text" placeholder="Payee 0x address" onChange={e => setUserAccount(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>FCT Amount(wei)</Form.Label>
              <Form.Control type="text" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
            </Form.Group>
          </Form>
          {
            showAlert ?
              <Alert variant='danger'>
                Please enter {showAlert}!
              </Alert>
              : <></>
          }
          <Button className='w-100' onClick={sendCoins} variant="success">
            Send
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
