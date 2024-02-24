import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ImgMediaCard from './Cards';
import './Cards.css';

const Homes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="home-container">
            {data.map((product, index) => (
                <div className="Display" key={index}>
                    {/* Link to the product details page with the product ID */}
                    <Link to={`/productDetails/${product.id}`} className="card-link">
                        <ImgMediaCard
                            key={index}
                            images={product.image}
                            title={product.title}
                            description={product.description}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Homes;
