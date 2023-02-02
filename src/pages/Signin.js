import React from "react";
import styled from "styled-components";
import logo from "../asset/logo.svg";
import Form from "../components/Form";

function Signin() {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Form />
      <div className="form_bottom">
        <h4>
          New here? <a href="/">Create an account</a>
        </h4>
        <p>Terms of use | Privacy policy</p>
      </div>
      <div className="rect380">
        <div className="rect381"></div>
        <div className="rect382"></div>
      </div>
    </Container>
  );
}

export default Signin;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #f5f5f5;

  overflow: hidden;

  .form_bottom {
    position: absolute;
    width: 100%;
    height: 20vh;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* background-color: gray; */
    z-index: 88888;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      //styleName: Web/Label;
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color:  #545454;
;
    }
    a:link {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color:  #545454;

    }
    p {
      //styleName: Web/Default;
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      margin: 1rem;
      color:  #545454;

    }
  }

  .rect380 {
    position: absolute;
    width: 1752.96px;
    height: 392.25px;
    left: -117.75px;
    top: 200px;
    z-index: 4;

    /* Whites/Gray Shade */

    background: #f0f0f0;
    /* background-color: gray; */
    opacity: 0.45;
    transform: rotate(-30deg);
    .rect381 {
      /* Rectangle 381 */

      position: absolute;
      width: 769.01px;
      height: 13.44px;
      top: -13px;
      /* left: -124.11px;
      top: 696.09px; */

      /* Whites/Primary High Shade

Used for navbar highlight
*/
      background: #e0e8fc;
      /* transform: rotate(-30deg); */
    }
    .rect382 {
      position: absolute;
      width: 769.01px;
      height: 13.44px;
      z-index: 5;
      bottom: -13px;
      right: 0px;
      /* left: 792px;
      top: 636.51px; */

      /* Primary/Product Primary */

      background: #3766e8;
      opacity: 0.2;
      /* transform: rotate(-30deg); */
    }
  }

  .logo {
    width: 160px;
    height: 35.42px;
    position: absolute;
    top: 60px;
    left: 100px;
    img {
      height: 100%;
    }
  }
`;
