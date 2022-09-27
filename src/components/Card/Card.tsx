import React from "react";

interface CardType {
  children: React.ReactNode;
}

const Card: React.FC<CardType> = ({ children }) => {
  return (
    <>
      <article className="container h-cardHeight shadow flex flex-col bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 ">
        {children}
      </article>
    </>
  );
};

export { Card };
