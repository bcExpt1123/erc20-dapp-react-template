import Alert from 'react-bootstrap/Alert'

const Message = (props: any) => {
    return (
      <div>
      <Alert variant="info"> balance : {props.balance}</Alert>
      </div>
  )
}

export default Message