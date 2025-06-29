import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const graphics = [
  {
    name: "graphic (1)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(1).png",
  },
  {
    name: "graphic (2)-x",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(2).png",
  },
  {
    name: "graphic (3)-x",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(3).png",
  },
  {
    name: "graphic (4)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(4).png",
  },
  {
    name: "graphic (5)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(5).png",
  },
  {
    name: "graphic (6)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(6).png",
  },
  {
    name: "graphic (7)-x",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(7).png",
  },
  {
    name: "graphic (8)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(8).png",
  },
  {
    name: "graphic (9)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(9).png",
  },
  {
    name: "graphic (10)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(10).png",
  },
  {
    name: "graphic (11)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(11).png",
  },
  {
    name: "graphic (12)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(12).png",
  },
  {
    name: "graphic (13)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(13).png",
  },
  {
    name: "graphic (14)",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(14).png",
  },
  {
    name: "graphic (15)-x",
    src: "https://rgsvnzujfenavgjorwdi.supabase.co/storage/v1/object/public/lagass/data/graphic/graphic%20(15).png",
  },
];

const Explorergraphic = () => {
  const [columns, setColumns] = useState(getColumnCount());

  function getColumnCount() {
    const width = window.innerWidth;
    return width <= 768 ? 2 : 3; // ≤768px → 2 columns, otherwise 3
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
      <h1 style={{
          textAlign: "center",
          color: "magenta",
          textTransform: "uppercase",
          fontSize: "2rem",
          marginTop: "40px",
        }}>Explorer Graphics</h1>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "15px",
          width: "100%",
          padding: "10px 20px",
          boxSizing: "border-box",
        }}
      >
        {graphics.map((graphic, index) => {
          const isFullWidth = ["graphic (1)", "graphic (2)-x", "graphic (15)-x"].includes(graphic.name);
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
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
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
