import { useState, useEffect } from "react";
import "../App.css";
import { Form } from "react-bootstrap";
import { connect } from 'react-redux';
import CustomInput from "../components/inputs";

function MainPage(props) {
  const [originalUrl, setUrl] = useState(props.shortener.originalUrl);
  const [shortenedUrl, updateUrl] = useState(props.shortener.shortenedUrl);
  const [shortenerObject, updateObject] = useState(null);
  const thisUrl = window.location.href.substr(0, window.location.href.lastIndexOf("/")  + 1);
  let createShortUrl = async() => {
      if(originalUrl !== undefined && originalUrl.length > 0){
        await  fetch("http://localhost:61292/shorten", {
            method: "POST",
            body: JSON.stringify({
                "Key": null,
                "BaseAddress":thisUrl,
                "LongLink": originalUrl,
                "LastAccessed": null,
                "ClickCount": 0,
                "NewAddress": null
            }),
            credentials: 'omit',
            headers:{
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin":"*"
            },
            mode:"cors"
        }).then(res => res.json())
        .then(target => {
            updateObject(target);
        })
    }
  };
  useEffect(() => {
      if(shortenerObject !== null && shortenerObject !== undefined){
        updateUrl(shortenerObject.newAddress);
      }
  }, [shortenerObject]);  
  var setOriginalUrl = (ev) =>{
    setUrl(ev.target.value);
  }
  return (
    <div className="App">
      <div className="App-header">
        <Form  className='p-3 text-left mb-3'>
          <Form.Text className="text-black pb-4">
             <u>Click 'convert' to generate short-url</u>
          </Form.Text>
          <CustomInput label="Original URL" update={setOriginalUrl} response={createShortUrl} color='primary' value='' responseLabel='Shorten' />
          <CustomInput label="Short URL" update={null} response={null} value={shortenedUrl} color='danger' responseLabel='' />
        </Form>
      </div>

    </div>
  );
}
const mapStateToProps = state => {
  return { shortener: state.shortenerReducer, cart: state.cart };
};
export default connect(mapStateToProps, null)(MainPage)

