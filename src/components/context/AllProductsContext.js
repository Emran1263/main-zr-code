import React, { createContext, useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list({
            limit: 200,
        });
        setData(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };