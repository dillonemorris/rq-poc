import React from "react";

export const RootStoreContext = React.createContext();

export const useStore = () => {
  const context = React.useContext(RootStoreContext);

  if (!context) {
    throw new Error("You need to use this within the RootStore context");
  }

  return context;
};
