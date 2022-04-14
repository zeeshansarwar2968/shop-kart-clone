import React,{ useState } from 'react';

//Each item to be displayed in the body Section of the page

export default function ItemCard({name,price,salePrice,rating,onSale, getCount}) {

    const [isDisabled, setDisabled] = useState(false);  // state to disable the add to cart button

    function incrementCount () {
        // setCount(count + 1);
        setDisabled(true);
        sendData(1);
      };
    
    function decrementCount() {
    //   setCount(count - 1);
      setDisabled(false);
      sendData(-1);
    }

      const sendData = (val) => {
        getCount(val);
      }
  return (
    
    <div className="col mb-5">
    <div className="card h-100">
        {
            onSale ? <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div> : null
            
        }
        
       
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
            <div className="text-center">
              
                <h5 className="fw-bolder">{name}</h5>
                
                
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        
                    {
                        [...Array(rating).keys()].map((i) => (<div className="bi-star-fill"></div>))
                    }
                    </div>
                
                <span className="text-muted text-decoration-line-through">{salePrice}</span>
                {price}
            </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={incrementCount} disabled={isDisabled}>Add to cart</button></div>
            
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={decrementCount} disabled={!isDisabled}>Remove from cart</button></div>
            
        </div>
    </div>
    </div>
    
  )
}
