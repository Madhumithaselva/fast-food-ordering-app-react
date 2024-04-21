import React from 'react';
import Menu from './Menu';

const MenuList = (props) => {
    const{menuList,addToOrder}=props;
    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center' }}>Fast Food Menu</h2>

            <div className='row'>
                {menuList.map((menuItem)=>(
                    <Menu 
                    key={menuItem.title}
                    menuData={menuItem} 
                    addToOrder={addToOrder}
                    />
                ))}
            </div> 
        </div>
    );
};

export default MenuList;