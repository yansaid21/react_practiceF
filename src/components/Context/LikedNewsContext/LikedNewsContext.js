import React, { createContext, useContext, useState } from "react";

const LikedNewsContext = createContext();

export const useLikedNews = () => {
  return useContext(LikedNewsContext);
};

export const useCartNews = () => {
    return useContext (LikedNewsContext);
}

export const LikedNewsProvider = ({ children }) => {
  const [likedNews, setLikedNews] = useState([]);
  const [cartNews, setCartNews] = useState([]);

  return (
    <LikedNewsContext.Provider value={{ likedNews, setLikedNews, cartNews,setCartNews }}>
      {children}
    </LikedNewsContext.Provider>
  );
};
