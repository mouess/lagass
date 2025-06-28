import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ title, img, text, link}) => {
  const btn = () => {
    window.open("https://wa.me/+212660079068", "_blank");
  };
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle5">
              <img src={img} alt={title} className="svg" />
            </span>
          </div><br/><br/>
          <div className="glass" />
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{text}</span>
          </div>

          <div className="bottom">
            <button className="button" onClick={btn}>
                more informations...
            </button>
          </div>

        
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 300px;
    height: 320px;
    perspective: 1200px;
  }

  .card {
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(
      135deg,
      #4e03733b 0%,
      rgb(147, 112, 219) 100%
    );
    transition: all 0.6s ease-in-out;
    transform-style: preserve-3d;
    box-shadow:
      rgba(30, 30, 60, 0) 40px 50px 25px -40px,
      rgba(30, 30, 60, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 10px;
    border-radius: 45px;
    border-top-left-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.7) 100%
    );
    transform: translate3d(0px, 0px, 30px);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 0.6s ease-in-out;
  }

  .content {
    padding: 90px 50px 0px 25px;
    transform: translate3d(0, 0, 31px);
    text-align: center;
  }

  .content .title {
    display: block;
    color:rgb(255, 255, 255);
    font-weight: 900;
    font-size: 22px;
  }

  .content .text {
    display: block;
    color:rgba(255, 255, 255, 0.81);
    font-size: 18px;
    margin-top: 15px;
  }

  .bottom {
    padding: 12px 15px;
    transform-style: preserve-3d;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    transform: translate3d(0, 0, 31px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 15px);
  }

  .button {
    padding: 10px;
    justify-content: center;
    background:rgba(78, 3, 115, 0.6);
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    font-size: 14px;
    box-shadow: 0 0 20px #fff;
  }

  .logo {
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    left: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 10px 10px 20px 0px;
    background: rgba(212, 212, 212, 0.1);
    transition: all 0.6s ease-in-out;
  }

  .logo .circle1 {
    width: 160px;
    transform: translate3d(0, 0, 25px);
    top: 10px;
    left: 10px;
  }

  .logo .circle2 {
    width: 130px;
    transform: translate3d(0, 0, 45px);
    top: 12px;
    left: 12px;
    transition-delay: 0.3s;
  }

  
  .logo .circle4 {
    width: 70px;
    transform: translate3d(0, 0, 85px);
    top: 20px;
    left: 20px;
    transition-delay: 0.9s;
  }

  .logo .circle5 {
    width: 100px;
    transform: translate3d(0, 0, 65px);
    top: 15px;
    left: 15px;
    transition-delay: 0.6s;
    display: grid;
    place-content: center;
  }

  .logo .circle5 .svg {
    width: 48px;
    fill: #ffffff;
  }

  .parent:hover .card {
    transform: rotate3d(1, -1, 0, 25deg);
    box-shadow:
      rgba(30, 30, 60, 0.3) 30px 50px 25px -40px,
      rgba(30, 30, 60, 0.15) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 60px);
    box-shadow: rgba(30, 30, 60, 0.25) 5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 65px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 85px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 105px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 125px);
  }`;

export default Card;
