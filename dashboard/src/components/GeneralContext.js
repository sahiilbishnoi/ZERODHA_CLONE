import React, { createContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setSelectedStockUID("");
    setIsBuyWindowOpen(false);
  };

  const openSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setSelectedStockUID("");
    setIsSellWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;