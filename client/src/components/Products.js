import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import EndMessage from './EndMessage';
import ProductCard from './ProductCard'
import Spinner from './Spinner';
import axios from "axios";

const Products = ({cart, setCart, productsCount, setProductsCount, totalPrice, setTotalPrice}) => {

    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getProducts = () => {
            axios.get(`https://challenge-api.aerolab.co/products?page=1`)
                .then( res => {
                    setProducts(res.data.products);
                    setTotalPages(res.data.page_count);

                }).catch( err => {
                    console.log(err);
                });
        }

        getProducts();
    }, []);

    const fetchProducts = () => {
        axios.get(`https://challenge-api.aerolab.co/products?page=${page}`)
            .then( res => {
                setProducts([...products, ...res.data.products]);

            }).catch( err => {
                console.log(err);
            });
    };

    const fetchData = () => {
        fetchProducts();

        if (page === totalPages) {
            setHasMore(false);
        }
        setPage(page + 1);
    };

    return (
        <main>
            <div className="container">
                <h2 className="title">Almacén</h2>
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<Spinner />}
                    endMessage={<EndMessage />}
                >
                        <div className="container__cards">
                            {products.map((product) => {
                                return <ProductCard 
                                            key={product.id}
                                            product={product}
                                            cart={cart}
                                            setCart={setCart}
                                            productsCount={productsCount}
                                            setProductsCount={setProductsCount}
                                            totalPrice={totalPrice}
                                            setTotalPrice={setTotalPrice}
                                        />;
                            })}
                        </div>

                        {/* <div className="primary__button">
                            Cargar más productos
                        </div> */}
                </InfiniteScroll>
            </div>
        </main>
    )
}

export default Products
