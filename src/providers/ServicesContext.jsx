import { services } from '@/constants';

const { createContext, useState, useContext, useEffect } = require('react');

const ServicesContext = createContext(null);

export const ServicesProvider = ({ children }) => {
  const [dragNDropDisabled, setDragNDropDisabled] = useState(false);
  const [cart, setCart] = useState([]);
  const [openServices, setOpenServices] = useState(services);

  return (
    <ServicesContext.Provider
      value={{
        openServices,
        setOpenServices,
        cart,
        setCart,
        dragNDropDisabled,
        setDragNDropDisabled,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServiceContext = () => {
  return useContext(ServicesContext);
};
