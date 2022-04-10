import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const paneVar = {
  closed: ({ w }) => ({
    width: w,
    opacity: 0,
  }),
  open: {
    visibility: "visible",
    opacity: 1,
  },
};

function SearchResult({ containerRef, isFocus, search, setIsFocus }) {
  const ref = useRef(null);
  const [bound, setBound] = useState(
    containerRef.current?.getBoundingClientRect()
  );
  useLayoutEffect(() => {
    setBound(containerRef.current?.getBoundingClientRect());
  }, [containerRef.current]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsFocus(false);
      /*
      if (ref.current) {
        ref.current.style.left =
          containerRef.current?.getBoundingClientRect().left;
        ref.current.style.top =
          containerRef.current?.getBoundingClientRect().top;
      }
      */
    });
    let fnc = (e) => {
      let res = document.querySelector(".res-con").contains(e.target);
      if (!res) setIsFocus(false);
    };
    document.addEventListener("click", fnc);
    return () => document.removeEventListener("click", fnc);
  }, []);
  return (
    <motion.div
      ref={ref}
      ariants={paneVar}
      initial="closed"
      custom={{ w: bound?.width }}
      animate={isFocus ? "open" : ""}
      className="search-result-container"
      style={{
        width: bound?.width,
        left: bound?.left,
        top: bound?.bottom + 20,
        backgroundColor: "white",
        boxShadow: "0 0 10px 2px rgba(150, 150, 150, .2)",
      }}
    >
      <div className="search-suggestion">
        <div>
          <Suggestion text="ali" />
          <Suggestion text="mehmet" />
          <Suggestion text="kamil" />
          <Suggestion text="ebubekir siddik" />
          <Suggestion text="baran" />
          <Suggestion text="mirac" />
          <Suggestion text="ali" />
          <Suggestion text="mehmet" />
          <Suggestion text="kamil" />
          <Suggestion text="ebubekir siddik" />
          <Suggestion text="baran" />
          <Suggestion text="mirac" />
        </div>
        <div>Suggestion</div>
      </div>
      <div className="search-result">
        <div className="pin_container">
          <div>
            <div className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
            <div className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
            <div className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
          </div>
          <div>
            <div className="search-card">
              <img src="/image/aston-yatak-odasi.jpg" alt="" />
            </div>
            <div className="search-card">
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
