// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div style={{ alignItems: 'center', textAlign: 'center', marginTop: '20%' }}  > <CircularProgress size={90} /></ div>;
    }

    return (
        <div>
            <div><img src={product.image} className='' style={{ width: '33%', height: '200px !important' }} alt={product.title} /></div>
            <div className="w-50" style={{ marginLeft: '45%', marginTop: '-40%', alignItems: 'center' }}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductDetails;
