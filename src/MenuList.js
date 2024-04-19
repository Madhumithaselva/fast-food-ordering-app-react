import React from 'react';
import Menu from './Menu';

const MenuList = (props) => {
    return (
            <div className='row m-3'>
                {props.menuList.map((menuItem)=>(
                    <Menu 
                    key={menuItem.title}
                    menuData={menuItem} />
                ))}
            </div> 
    );
};

export default MenuList;