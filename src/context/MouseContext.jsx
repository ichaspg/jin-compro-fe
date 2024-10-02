import { createContext, useState, useContext } from "react";

const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [mouseHidden, setMouseHidden] = useState(false);

  const hideMouseTracker = () => setMouseHidden(true);
  const showMouseTracker = () => setMouseHidden(false);

  return (
    <MouseContext.Provider
      value={{ mouseHidden, hideMouseTracker, showMouseTracker }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export const useMouseContext = () => useContext(MouseContext);
