// src/loadComponents.js
import Home from "./Home";

export const loadHome = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Home);
    }, 5000); // Simulate a 5-second loading time
  });
};
