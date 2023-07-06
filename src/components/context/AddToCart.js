import React, { useState } from 'react';
import LikedItemsContext from './AddToCartContext';

const LikedItemsProvider = ({ children }) => {
    const [likedItems, setLikedItems] = useState([]);

    const AddFromCart = (newitem) => {
        const itemExists = likedItems.some((item) => item.id === newitem.id);

        if (!itemExists) {
            setLikedItems((likedItems) => [...likedItems, newitem]);
        }
    };
    
    function removeFromCart(id) {
        setLikedItems((likedItems) => likedItems.filter((item) => item.id !== id));
      }

    return (
        <LikedItemsContext.Provider value={{ likedItems, AddFromCart, removeFromCart }}>
            {children}
        </LikedItemsContext.Provider>
    );
};

export default LikedItemsProvider;