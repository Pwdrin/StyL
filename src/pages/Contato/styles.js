import styled from "styled-components";
export const contact = styled.div`
  background: #222327;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const section = styled.div`
  p {
    margin-top: 15px;
    color: #d8d8d8;
  }
  .topic {
    font-weight: bold;
    color: #3ec20a;
  }
  .container2 {
    width: 80%;
    margin-left: 10%;
    margin-top: -2px;
    border-radius: 5px;
    padding: 20px 20px 30px 40px;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2),
      0px 5px 10px rgba(0, 0, 0, 0.2);
    //* box-shadow: 0px -6px 11px rgba(3, 250, 24, 0.589), *//
    //*   0px 6px 11px rgba(3, 250, 24, 0.589); *//
  }
  .container2 .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container2 .content .left-side {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
  }
  //*.content .left-side::before {
  //* content: ""; *//
  //*  position: absolute;*//
  //* height: 70%;*//
  //* width: 2px;*//
  //* right: 150px;*//
  //* top: 50%; *//
  //* transform: translateY(-50%); *//
  //* background: #3ec20a; *//
  //* } *//
  .content .left-side .details {
    margin: 14px;
    text-align: center;
  }
  .content .left-side .details i {
    font-size: 30px;
    color: #3ec20a;
    margin-bottom: 10px;
  }
  .content .left-side .details i:hover {
    font-size: 35px;
    color: #48ff00;
    margin-bottom: 10px;
  }
  .content .left-side .details .topic {
    font-size: 18px;
    font-weight: 500;
  }
  .content .left-side .details .text-one,
  .content .left-side .details .text-two {
    margin-top: 5px;
    font-size: 14px;
    color: #d8d8d8;
    font-weight: bold;
  }

  .container .content .right-side {
    width: 75%;
    margin-left: 75px;
  }
  .content .right-side .topic-text {
    font-size: 23px;
    font-weight: bold;
    font-weight: 600;
    color: #3ec20a;
  }
  .right-side .input-box {
    height: 50px;
    width: 100%;
    margin: 12px 0;
  }
  .right-side .input-box input,
  .right-side .input-box textarea {
    color: #fff;
    font-weight: bold;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #3e3e3f;
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
  }
  .right-side .message-box {
    min-height: 110px;
  }
  .right-side .input-box textarea {
    padding-top: 6px;
  }
  .right-side .button {
    display: inline-block;
    margin-top: 12px;
  }
  .right-side .button input[type="submit"] {
    color: #fff;
    width: 100px;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    background: #3ec20a;
    box-shadow: 0px 0px 3px #45b11a;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .button input[type="submit"]:hover {
    background: #48ff00;
  }
  @media (max-width: 950px) {
    .container2 {
      width: 90%;
      padding: 30px 40px 40px 35px;
    }
    .container2 .content .right-side {
      width: 75%;
      margin-left: 55px;
    }
  }
  @media (max-width: 820px) {
    .container2 {
      margin: 40px 0;
      height: 100%;
    }
    .container2 .content {
      flex-direction: column-reverse;
    }
    .container2 .content .left-side {
      width: 100%;
      flex-direction: row;
      margin-top: 40px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .container2 .content .left-side::before {
      right: 150px;
      display: none;
    }
    .container2 .content .right-side {
      width: 100%;
      margin-left: 0;
    }
  }
`;
