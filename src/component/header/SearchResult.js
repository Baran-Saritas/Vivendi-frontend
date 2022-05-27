import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SearchResult({ containerRef, isFocus, search, setIsFocus }) {
  const ref = useRef(null);
  const [bound, setBound] = useState(
    containerRef.current?.getBoundingClientRect()
  );
  useLayoutEffect(() => {
    setBound(containerRef.current?.getBoundingClientRect());
  }, [containerRef.current]);

  return (
    <motion.div
      ref={ref}
      initial="closed"
      custom={{ w: bound?.width }}
      animate={isFocus ? "open" : ""}
      className="search-result-container"
      style={{
        width: bound?.width,
        left:
          bound?.left -
          document.querySelector(".app").getBoundingClientRect().left,
        top: bound?.bottom + 20,
        backgroundColor: "white",
        boxShadow: "0 0 10px 2px rgba(150, 150, 150, .2)",
      }}
    >
      <h1 className="result">Results</h1>
      <div className="search-result">
        <div className="pin_container">
          <div>
            <div data-title="Baza" className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
            <div data-title="Baza" className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
          </div>
          <div>
            <div data-title="Baza" className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
            <div data-title="Baza" className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
          </div>
          <div>
            <div data-title="BazaBazaBaza" className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
            <div data-title="Baza" className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Suggestion({ text }) {
  return (
    <div
      style={{
        borderRadius: 5,
        backgroundColor: "#C4C4C4",
        padding: "3px 8px",
      }}
    >
      {text}
    </div>
  );
}

export default SearchResult;
