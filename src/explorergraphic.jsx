import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const graphics = Array.from({ length: 15 }, (_, i) => ({
  name: `graphic (${i + 1})${[1, 2, 3, 7, 15].includes(i + 1) ? "-x" : ""}`,
  src: `/data/graphic/graphic (${i + 1}).png`,
}));

const Explorergraphic = () => {
  const [columns, setColumns] = useState(getColumnCount());

  function getColumnCount() {
    const width = window.innerWidth;
    return width <= 768 ? 2 : 3; // ≤768px → 2 colonnes, sinon 3
  }

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumnCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h1>explorer - graphics</h1><br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "15px",
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {graphics.map((graphic, index) => {
          const isFullWidth = ["graphic (1)-x", "graphic (2)-x", "graphic (15)-x"].includes(graphic.name);
          return (
            <div
              key={index}
              style={{
                gridColumn: isFullWidth ? `span ${columns}` : "span 1",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.img
                src={graphic.src}
                alt={graphic.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.15,
                  zIndex: 10,
                  rotate: 1.5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: isFullWidth ? "70%" : "75%",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgb(0, 0, 0)",
                  cursor: "pointer",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Explorergraphic;
