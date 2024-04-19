import React from 'react';

const menu = (props) => {

    const{menuData} = props;

    return (
        <div className='col-sm-6 col-md-5 col-lg-4 item'>
            <img className="card-img-top col mt-2" src={menuData.image} alt={menuData.image} />
            <div className="card-body">
                <h5 className="card-title">{menuData.title}</h5>
                <p className="card-text">{menuData.description}</p>
                <p className='card-text'>{menuData.price}SEK</p>
            </div>
            <div className="card-text-left mb-2">
                <button className='btn btn-info btn-block' style={{ backgroundColor: 'black', color: 'white' }}>Add to Order</button>
            </div>
          </div> 
    )
};

export default menu;
