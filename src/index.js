import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../src/styles/component/header.css";
import "../src/styles/component/main.css";
import "../src/styles/component/categoryCarousel.css";
import "../src/styles/component/card.css";
import "../src/styles/component/detailCarousel.css";
import "../src/styles/product-detail.css";
import "../src/styles/component/headerShoppingCart.css";
import "../src/styles/component/productCart.css";
import "../src/styles/component/hCard.css"
import "../src/styles/component/products.css"
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Grommet } from "grommet";
import { Provider } from "react-redux";
import store  from "./store";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, 
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider  store={store}>
        <Grommet>
          <ThemeProvider theme={theme}>
              <App/>
          </ThemeProvider>
        </Grommet>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
