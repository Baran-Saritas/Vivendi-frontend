import React, { useEffect, useRef, useState } from "react";
import SearchResult from "./SearchResult";

const CustomHeader = () => {
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-logo">
          <img src="icon.png" alt="icon" />
        </div>
        <div className="header-search" tabIndex="0">
          <div className="res-con" ref={ref}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setIsFocus(true)}
            />
            <button>Search</button>
            {(search || isFocus) && (
              <SearchResult
                containerRef={ref}
                setIsFocus={setIsFocus}
                isFocus={isFocus}
              />
            )}
          </div>
        </div>
        <div className="header-util">
          <p>Sign In</p>
          <p>Sepet</p>
          <p>Lang</p>
        </div>
      </div>
      <div className="header-mid"></div>
      <div className="header-bottom"></div>
    </div>
  );
};

export default CustomHeader;
