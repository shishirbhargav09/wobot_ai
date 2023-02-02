import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Form() {
  const [showpassword, setShowpassword] = useState(true );
  return (
    <Container>
      <div className="form">
        <div className="small_logo">
          <div className="logo1"></div>
          <div className="logo2"></div>
          <div className="logo3"></div>
        </div>
        <h3>Sign in to your account</h3>
        <label htmlFor="email">Email/username</label>
        <input type="text" id="email" placeholder="e.g. john@example.com" />
        <label htmlFor="password">Password</label>
        <div className="password">
          <input
            type={showpassword ? "text" : "password"}
            id="password"
            placeholder="e.g. **********"
          />
          {showpassword ? (
            <AiFillEyeInvisible
              onClick={() => {
                setShowpassword(!showpassword);
              }}
            />
          ) : (
            <AiFillEye
              onClick={() => {
                setShowpassword(!showpassword);
              }}
            />
          )}
        </div>

        <button>Log In</button>
      </div>
      
    </Container>
  );
}

export default Form;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: #545454; */
  display: flex;
  justify-content: center;
  align-items: center;
 

  .form {
    position: absolute;
    z-index: 10;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 80px;
    gap: 10px;

    width: 400px;
    /* height: 350px; */
    /* left: 456px; */

    /* Primary/Product White */

    background: #ffffff;
    /* Shadow light */

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    .small_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo1 {
        height: 27.84px;
        width: 11.04px;

        border-radius: 100px;
        margin: 3px;
        /* Primary/Product Primary */

        background: #3766e8;
        border-radius: 100px;
        transform: matrix(0.85, -0.52, 0.51, 0.86, 0, 0);
      }
      .logo2 {
        margin: 3px;

        height: 42.36px;
        width: 11.047px;

        border-radius: 100px;

        background: #3766e8;
        border-radius: 100px;
        transform: matrix(0.85, -0.52, 0.51, 0.86, 0, 0);
      }
      .logo3 {
        margin: 3px;

        height: 21.54px;
        width: 11.04px;

        border-radius: 100px;

        background: #3766e8;
        border-radius: 100px;
        transform: matrix(0.85, -0.52, 0.51, 0.86, 0, 0);
      }
    }
    .password {
      display: flex;
      align-items: center;
      justify-content: center;
      /* width: 388px; */
      position: relative;

      svg {
        position: absolute;
        right: 10px;
        bottom: 15px;
        font-size: 25px;
        color: #a0a0a0;
      }
    }
    button {
      width: 398px;
      height: 38px;
      border-radius: 4px;
      padding: 10px, 40px, 10px, 40px;
      background-color: #3766e8;
      color: white;
      border: none;
      cursor: pointer;
    }
    input {
      width: 388px;
      height: 37px;
      border-radius: 6px;
      padding-left: 10px;
      margin-bottom: 0.5rem;
      border: 1px solid #a0a0a0;
      outline: none;
    }
    label {
      /* Field Label */

      /* position: absolute; */
      align-self: flex-start;
      width: 108px;
      height: 18px;

      /* Web/Label */

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height, or 129% */

      display: flex;
      align-items: center;

      /* Text/Type Body */

      color: #545454;
    }

    h3 {
      text-align: center;
      margin: 1rem;
      width: 286px;
      height: 31px;

      /* Web/Heading 3 */

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 31px;
      text-align: center;

      /* Text/Type Heading Secondary */

      color: #343434;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
`;
