import React from 'react';
import plasticBumper from "../../../../assets/products/plasticBumper.jpg"
import dieCast from "../../../../assets/products/dieCast.png"
import storageBox from "../../../../assets/products/storageBox.jpg"
import Product from './Product';

const Products = () => {
    const products = [
        {
            _id: 1,
            name: 'Plastic bumper',
            about: 'PMMA(Acrylic), ABS, PS, PP, PE PVC, PET, PETG, and HIPS ETC. The Max products size can be 3000*2000*800mm,  12mm thickness. Transparent or Colored is available',
            image: plasticBumper,
            price: 16,
            available: 300,
            minOrder: 80
        },
        {
            _id: 2,
            name: 'Customized Die Cast',
            about: 'Material is aluminum alloy,zin alloy,stainless steel,carbon steel ,titanium ,etc. Surface Treatment is heat treatment,polishing, shot blasting, sand blasting,plating,machining,etc.',
            image: dieCast,
            price: 19,
            available: 500,
            minOrder: 150
        },
        {
            _id: 3,
            name: 'Storage box',
            about: 'This Car Armrest Box is made of ABS + leather material. There are three colors to choose from: black, beige and gray. The leather has a fine and smooth surface, full color and smooth feel. ',
            image: storageBox,
            price: 22,
            available: 450,
            minOrder: 100
        },
    ]
    return (
        <div className='pt-40 mb-8 p-8 bg-base-100'>
            <h4 className='text-lg text-center text-secondary'>TOP SALE IN THE WEEK</h4>
            <h1 className='text-5xl text-neutral font-bold text-center divider'>Feature Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-8 mt-12 gap-8'>
                {products.map(product => <Product
                 key={product._id}
                 product={product}
                ></Product>)}
            </div>
        </div>
    );
};

export default Products;