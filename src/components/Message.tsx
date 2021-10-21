import Alert from 'react-bootstrap/Alert'

const Message = (props: any) => {
    return (
      <div>
      <Alert variant="info"> Balance(wei) : {props.balance}</Alert>
      </div>
  )
}

export default Message