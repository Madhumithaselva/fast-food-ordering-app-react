import React from 'react';

const Header = () => {
    const headerElement=
    <header className='container-fluid text-dark pt-3 pb-5'>
        <div style={{textAlign: 'center',fontFamily: 'verdana',fontWeight: 'bolder'}}>
            <h2>Fast Food Menu</h2>
        </div>
    </header>
    return (
        <>
         {headerElement}
        </>
        
        
    );
};

export default Header;