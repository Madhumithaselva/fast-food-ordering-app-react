import React from 'react'
import MenuList from './MenuList';

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
        }
    ];
    
    return (
        <div className='App'>
            <MenuList menuList={menuItemData}/>
        </div>
      );   
    
}

export default App;