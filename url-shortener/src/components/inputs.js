import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import '../App.css';
export default function CustomInput(props){

    let updateValue = function(ev){
        if(props.update !== null){
            props.update(ev);
        }
    }

    return (
        <Form.Group style={{fontSize:'16px'}} className="mt-3 text-muted" controlId="formBasicEmail">
        <Form.Label className="pb-1 mb-1 m-0">{props.label}</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                onChange={updateValue}
                placeholder="Input area"
                defaultValue={props.value}
              />
              <Button className={props.color} variant={props.color} onClick={props.response}
                      style={{width: '100px'}}>
                  {props.responseLabel}
              </Button>
          </InputGroup>
        </Form.Group>
    )
}