import React, { useRef , useState } from "react";
import "./services.css";
import { motion, useInView } from 'framer-motion';
import Card from "./Card";

const Services = ({ data }) => {
  const bgImage = data?.images?.find((img) => img.name === "background1")?.src;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const info = {
    card: [
      { 
        title: 'Content Creation', 
        img: 'https://res.cloudinary.com/dyfqal83h/image/upload/v1751773141/iconpen_guvv9h.png', 
        text: 'Creative design and oversight of your projects.' ,
        link: '<a href="https://wa.me/+212660079068" target="_blank">more informations...</a></p>'
      },
      { 
        title: 'Media Promotion', 
        img: 'https://res.cloudinary.com/dyfqal83h/image/upload/v1751773141/iconcamera_w2tye1.png', 
        text: 'Planning, strategies to promote your brand online.',
        link: ''
      },
      { 
        title: 'Website Creation', 
        img: 'https://img.icons8.com/ios-filled/100/FFFFFF/source-code.png', 
        text: 'Designing and building your online presence.',
        link: '</p>'
      }
    ]
  };

  const [infoServices, setInfoServices] = useState(info);

  return (
    <>
      <motion.h1 id="services"
        initial={{ opacity: 1, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
        OUR SERVICES
      </motion.h1>

      <div class="circle-background"></div>

      <p>
        Our goal is to strengthen your brand and help it reach new levels of success and creativity.
        Boost your brand and take it to exciting new heights of success.
      </p>

      <div className="icones">
        {infoServices.card.map((service, index) => (
          <Card 
            key={index}
            title={service.title}
            img={service.img}
            text={service.text}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
