import React, {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import Toaster, { ToasterProps } from "../components/Toaster";

const ToasterContext = createContext(null);

const Provider: FunctionComponent = ({ children }) => {
  const [message, setMessage] = useState<ToasterProps["message"]>();
  const [type, setType] = useState<ToasterProps["type"]>();
  const [time, setTime] = useState<ToasterProps["time"]>();

  useEffect(() => {
    if (time) {
      setTimeout(() => setTime(time - 1), 1000);
    }
  }, [time]);

  return (
    <ToasterContext.Provider value={{ setMessage, setType, setTime }}>
      {children}
      <Toaster message={message} type={type} time={time} />
    </ToasterContext.Provider>
  );
};

const useToaster = () => {
  const { setMessage, setTime, setType } = useContext(ToasterContext);

  const showToaster = (message: string, time: number, type?: string) => {
    setMessage(message);
    setTime(time);
    setType(type);
  };

  return { showToaster };
};

export default Provider;
export { useToaster };
