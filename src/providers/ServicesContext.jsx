const { createContext, useState, useContext, useEffect } = require('react');

const ServicesContext = createContext(null);

export const ServicesProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [openServices, setOpenServices] = useState([
    {
      id: 1,
      title: 'Website Design',
      description: 'Designs for your website',
    },
    {
      id: 2,
      title: 'Android App Development',
      description: 'Want an android app as well for my solution',
    },
    {
      id: 3,
      title: 'IOS App Development',
      description: 'Want an IOS app as well for my solution',
    },
  ]);

  return (
    <ServicesContext.Provider
      value={{
        openServices,
        setOpenServices,
        cart,
        setCart,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServiceContext = () => {
  return useContext(ServicesContext);
};
