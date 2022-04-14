import React from 'react';
import ItemCard from './ItemCard';

//Body of the page containing the product catalog data

export default function Section({getCount}) {

    const sectionValues = [
        { 
            name: 'Fancy Product',
            onSale: false,
            price: '$40.00 - $80.00',
            salePrice: null,
            rating: null,
        },
        { 
            name: 'Special Item',
            onSale: true,
            price: '$18.00',
            salePrice: '$20.00',
            rating: 5,
        },
        { 
            name: 'Sale Item',
            onSale: true,
            price: '$25.00',
            salePrice: '$50.00',
            rating: null,
        },
        { 
            name: 'Popular Item',
            onSale: false,
            price: '$40.00',
            salePrice: null,
            rating: null,
        },
        { 
            name: 'Sale Item',
            onSale: true,
            price: '$25.00',
            salePrice: '$50.00',
            rating: null,
        },
        { 
            name: 'Fancy Product',
            onSale: false,
            price: '$120.00 - $280.00',
            salePrice: null,
            rating: null,
        },
        { 
            name: 'Special Item',
            onSale: true,
            price: '$18.00',
            salePrice: '$20.00',
            rating: 5,
        },
        { 
            name: 'Popular Item',
            onSale: false,
            price: '$40.00',
            salePrice: null,
            rating: 5,
        }
    ];
  return (
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   
                    {
                        sectionValues.map( (value,index) => {
                            return <ItemCard key={index} getCount={getCount} name={value.name} price={value.price} salePrice={value.salePrice} rating={value.rating} onSale={value.onSale}/>
                          })
                    }
                    
                    
                </div>
            </div>
        </section>
  )
}
