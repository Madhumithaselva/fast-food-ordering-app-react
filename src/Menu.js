import React from 'react';

const menu = (props) => {

    const{menuData,addToOrder} = props;

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3' style={{ marginTop: '20px' }}>
            <div className='card'>
            <img className="card-img-top" src={menuData.image} alt={menuData.image} />
             <div className="card-body">
                <h5 className="card-title">{menuData.title}</h5>
                <p className="card-text">{menuData.description}</p>
                <p className='card-text'>{menuData.price}SEK</p>
                <button className='btn btn-info btn-block' style={{ backgroundColor: 'black', color: 'white' }}
                onClick={()=>addToOrder(menuData)}>Add to Order</button>
             </div>
            </div>
          </div> 
    )
};

export default menu;
