import React, { useState, useEffect } from 'react'
import axios from 'axios';



const OneProduct = props => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] =useState(false);

    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
                console.log(res.data.product);
        })
            .catch(err => console.log(err));
    }, [])


    
    return (
        <div>
            {loaded&&
            <>
                <h2>{ product.title }</h2>
                <h4>{ product.price }</h4>
                <h4>{ product.desc }</h4>
            </>
            }
        </div>
    )
}

export default OneProduct


