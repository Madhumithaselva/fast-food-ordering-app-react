import React from 'react'
import {useState} from 'react';
import { useEffect } from 'react';
import MenuList from './MenuList';
import OrderSummary from './OrderSummary';

function App(){
    const menuItemData = [
        {
            title: "Burger",
            description: "A delicious burger with all the fixings.",
            image: "burger.jpeg",
            price:79.99,
        },
        {
            title: "Pizza",
            description: "Classic pizza with your favorite toppings.",
            image: "pizza.jpeg",
            price: 99.99
        },
        {
            title: "Fries",
            description: "Crispy golden fries served hot and fresh.",
            image: "fries.jpeg",
            price:59.99,
        }, 
    ];

    const [orderItems,setOrderItems] = useState([]);
    const [darkMode,setDarkMode] = useState(false);

    const toggleModeHandler = () =>{
        setDarkMode(!darkMode);
    }

    const addToOrder=(menuItem) =>{
        const existingItem =orderItems.find(
            (item)=>item.title === menuItem.title
        );
        if(existingItem){
            const updatedOrder = orderItems.map((item) => item.title===menuItem.title?{...item,quantity:item.quantity+1}:item);
            setOrderItems(updatedOrder);
        }else{
            setOrderItems([...orderItems,{...menuItem,quantity:1}]);
        }
    };
    const incrementQuantity = (menuItem)=>{
        const updatedOrder = orderItems.map((item)=>item.title === menuItem.title ? {...item,quantity:item.quantity+1}:item);
        setOrderItems(updatedOrder);
    };

    const decrementQuantity = (menuItem)=>{
        const updatedOrder = orderItems.map((item)=>item.title === menuItem.title ? {...item,quantity:item.quantity-1}:item);
        setOrderItems(updatedOrder);
    };

    useEffect(()=>{
        const colorMode=darkMode?"dark":"light";
        document.body.setAttribute("data-bs-theme",colorMode);
    },[darkMode]);
    
    return (
    <div className='app-wrapper' style={{ margin: "40px 100px 400px 100px" }} >
      <div className={`App ${darkMode ? 'darkMode' : ''}`}>
            <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}  
                    </a>
                </div>
            </nav>
            <button type='button' className={`btn ${darkMode ? 'btn-light' : "btn-dark"}`} onClick={toggleModeHandler}>Toggle Mode
            </button>

                    <MenuList 
                        menuList={menuItemData}
                        addToOrder={addToOrder} 
                        />
                    <OrderSummary
                        orderItems={orderItems}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        id="order-summary"
                     />
       </div>
    </div>             
      );   
    
}

export default App;