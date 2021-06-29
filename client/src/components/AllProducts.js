// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { Link } from '@reach/router';

// const AllProducts = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/products`)
//             .then(res => setProducts(res.data.data))
//             .catch(err => console.log(err));
//     })

//     return (
//         <div>
//             <h2>What we got</h2>

//             {
//                 products.map((product, i) =>
//                     <div key={i}>
//                         <Link to={ `/${product.id}` }>{ product.title }</Link>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default AllProducts
