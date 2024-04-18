import React from 'react';

const Menu = () => {
    return (
        <div>
            <div className='card mb-4 col-md-4'>
          <img className="card-img-top"src="burger.jpeg" alt="Burger" style={{width:'20%'}}/>
          <div className="card-body">
            <h5 className="card-title">Burger</h5>
            <p className="card-text">A delicious burger with all the fixings.</p>
            <p className='card-text'>SEK 79.99</p>  
          </div>
         <div className="card-footer text-center">
           <button className='btn btn-info btn-block'>Add to Order
           </button>
        </div>
        </div>
            
        </div>
    );
};

export default Menu;