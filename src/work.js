import { useEffect, useState, useRef } from "react";
import React from "react";
import "./work.css";
import { useNavigate } from "react-router-dom";

const WORK = ({ data }) => {
  const navigate = useNavigate();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const bgImage = data?.images?.find((img) => img.name === "background4")?.src;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: window.innerWidth < 800 ? 0.1 : 0.5 } // Lower threshold for small screens
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (setCount, endValue) => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.ceil(duration / endValue);
      const counter = setInterval(() => {
        start += 1;
        if (start > endValue) {
          setCount(endValue);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, stepTime);
    };

    animateCount(setCount1, 32);
    animateCount(setCount2, 670);
    animateCount(setCount3, 98);
  }, [isVisible]);

  return (
    <div className="container" id="work">
      <h1>OUR WORK</h1>
      <p>
        With our deep expertise and modern equipment, we create advertisements
        that inspire and achieve the desired impact.
      </p>
      <div className="cards">
        <div className="image-container" onClick={() => navigate("/photo")}>
          <img
            src="/_CDA8655.jpg"
            alt="PHOTO"
          />
          <div className="image-text">PHOTO</div>
        </div>
        <div className="image-container" onClick={() => navigate("/videos")}>
          <img
            src="/_CDA8020.jpg"
            alt="VIDEO"
          />
          <div className="image-text">VIDEO</div>
        </div>
        <div
          className="image-container"
          onClick={() => navigate("/motiongraphic")}
        >
          <img
            src="/1AB1555A-4DFC-4065-A849-162784EEB8FE.jpeg"
            alt="MOTION GRAPHIC"
          />
          <div className="image-text">MOTION GRAPHIC</div>
        </div>
      </div>

      <div class="circle-background1"></div>

      <div className="stats" ref={ref}>
        <div className="space">
          <p>More Than</p>
          <strong className="num">{count1}</strong>
          <p>Partners and clients</p>
        </div>
        <div className="space">
          <p>More Than</p>
          <strong className="num">{count2}</strong>
          <p>Projects Delivered</p>
        </div>
        <div className="space">
          <p>More Than</p>
          <strong className="num">{count3}%</strong>
          <p>Clients Satisfied</p>
        </div>
      </div>
    </div>
  );
};

export default WORK;
