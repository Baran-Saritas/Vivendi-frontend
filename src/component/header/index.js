import { useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CustomCarousel from "../carousel";
import { motion } from "framer-motion";
import SearchResult from "./SearchResult";
import Sign from "../../pages/user/index";

const CustomHeader = () => {
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const [isSelect, setIsSelect] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="header">
      <Sign open={open} setOpen={setOpen} />
      <div className="header-top">
        <div className="header-logo">
          <img src="logo_dark.png" alt="icon" />
        </div>
        <div className="header-search" tabIndex="0">
          <div className="res-con" ref={ref}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={() => setIsFocus(true)}
            />
            <div className="btn-con">
              <button>Search</button>
            </div>
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
          <p onClick={() => setOpen(true)}>Sign In</p>
          <p>Sepet</p>
          <p>Lang</p>
        </div>
      </div>
      <div className="header-mid" onMouseLeave={() => setIsSelect(0)}>
        <nav>
          <div onMouseEnter={() => setIsSelect(1)}>New In</div>
          <div onMouseEnter={() => setIsSelect(2)}>Sofas</div>
          <div onMouseEnter={() => setIsSelect(3)}>Chairs</div>
          <div onMouseEnter={() => setIsSelect(4)}>Tables</div>
          <div onMouseEnter={() => setIsSelect(5)}>Storage Beds</div>
          <div onMouseEnter={() => setIsSelect(6)}>Lighting</div>
          <div onMouseEnter={() => setIsSelect(7)}>Textiles</div>
          <div onMouseEnter={() => setIsSelect(8)}>Decor</div>
          <div onMouseEnter={() => setIsSelect(9)}>Garden</div>
          <div onMouseEnter={() => setIsSelect(10)}>Kitchen</div>
          <div onMouseEnter={() => setIsSelect(11)}>Lifestyle</div>
          <div onMouseEnter={() => setIsSelect(12)}>Shop by Room</div>
          <div onMouseEnter={() => setIsSelect(13)}>Clearance</div>
        </nav>
        {!!isSelect && (
          <div className="nav-pane">
            <div className="nav-pane-left">
              <div data-pane-item-title="test" className="nav-pane-item">
                <img src="/image/okyo.jpg" alt="okyo" />
              </div>
              <div data-pane-item-title="test" className="nav-pane-item">
                <img src="/image/okyo.jpg" alt="okyo" />
              </div>
              <div data-pane-item-title="testAAaaAA" className="nav-pane-item">
                <img src="/image/okyo.jpg" alt="okyo" />
              </div>
              <div data-pane-item-title="test" className="nav-pane-item">
                <img src="/image/okyo.jpg" alt="okyo" />
              </div>

            </div>
            <div className="nav-pane-right">
              <div>
                <CustomCarousel speed={2500} autoplaySpeed={6000} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-bottom"></div>
    </motion.div>
  );
};

export default CustomHeader;
