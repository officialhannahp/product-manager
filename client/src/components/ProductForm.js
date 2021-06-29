import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';



const initialErrors = {
    title: '',
    price: '',
    desc: ''
}

const ProductForm = props => {
    const { initialProduct, product, setProduct } = props;
    const [errors, setErrors] = useState(initialErrors)
    const [products, setProducts] = useState([]);

    useEffect(() => {
                axios.get(`http://localhost:8000/api/products`)
                    .then(res => setProducts(res.data.data))
                    .catch(err => console.log(err));
            })

    const submitHandler = e => {
        e.preventDefault();
        console.log(product)
        console.log("product has bben created")
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                const { data } = res.data;
                if(res.data.message === "success") {
                    setProduct(initialProduct);
                } else {
                    let incomingErrors = {};
                    for (const key in res.data.error.errors) {
                        if(product.hasOwnProperty(key)){
                            incomingErrors[key] = res.data.error.errors[key].message;
                        }
                    }
                    setErrors({...initialErrors, ...incomingErrors});
                }
            })
            .catch(err => console.log(err))
    }

    const changeHandler = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }


    return (
        <>
        <h2>Add a product</h2>
            <form onSubmit={ submitHandler }>
                <div>
                    { errors.title ? <p>{errors.title}</p> : ''}
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={changeHandler}/>
                </div>
                <div>
                { errors.price ? <p>{errors.price}</p> : ''}
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" onChange={changeHandler}/>
                </div>
                <div>
                { errors.desc ? <p>{errors.desc}</p> : ''}
                    <label htmlFor="desc">Description: </label>
                    <input type="text" name="desc" onChange={changeHandler}/>
                </div>
                <input type="submit" value="Create" />
            </form>

            <hr/>

            <h2>What we got</h2>

            {
                products.map((product, i) =>
                    <div key={i}>
                        <Link to={`/${product._id}`}>{ product.title }</Link>
                    </div>
                )
            }

        </>
    )
}

export default ProductForm
