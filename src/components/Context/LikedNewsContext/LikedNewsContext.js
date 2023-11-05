import React, { createContext, useContext, useState } from "react";

const LikedNewsContext = createContext();

export const useLikedNews = () => {
  return useContext(LikedNewsContext);
};

export const LikedNewsProvider = ({ children }) => {
  const [likedNews, setLikedNews] = useState([]);

  return (
    <LikedNewsContext.Provider value={{ likedNews, setLikedNews }}>
      {children}
    </LikedNewsContext.Provider>
  );
};
