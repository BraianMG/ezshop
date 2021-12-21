import React, { useEffect } from 'react'

const ProductCard = ({product, cart, setCart, productsCount, setProductsCount, totalPrice, setTotalPrice}) => {

    const { id, name, price, photo, originalPrice, updatedAt } = product;

    const exist = cart.find( prod => {
        if (prod) {
            return prod.id === id;
        }
        return prod;
    });

    if (exist) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    useEffect(() => {
        let totProds = 0;
        let totPrice = 0;
        cart.forEach( prod => {
            totProds += prod.quantity;
            totPrice += prod.quantity*prod.price;
        });

        setProductsCount(totProds);
        setTotalPrice(new Intl.NumberFormat("de-DE").format(totPrice));
    })

    const addProduct = product => {
        const { id, name, price, photo, originalPrice, updatedAt } = product;
        
        const newProduct = {
            id,
            name,
            price,
            photo,
            originalPrice,
            updatedAt,
            quantity: 1
        }

        let productExisted = false;
        const newCart = cart.map( prod => {
            if (prod.id === id ) {
                prod = newProduct;
                productExisted = true;
            }
            return prod;
        });

        if (newCart.length===0) {
            setCart( [newProduct] );
        } else {
            if (productExisted) {
                setCart( newCart );
            } else {
                setCart( [ ...newCart, newProduct ] );
            }
        }
    }

    const increase = product => {
        
        const newCart = cart.map( prod => {
            if( prod.id === product.id ){
                prod.quantity++;
                return prod;
            }else{
                return prod;
            }
        });

        setCart(newCart);
    }

    const decrease = product => {
        const newCart = cart.map( prod => {
            if( prod.id === product.id ){
                prod.quantity--;

                if (prod.quantity<0) {
                    prod.quantity=0;
                }
            }
            return prod;
        });

        setCart(newCart);
    }

    const edit = (e, product) => {
        let quantity = 0;
        if (e.target.value!=='') {
            quantity = parseInt(e.target.value);
        }

        const newCart = cart.map( prod => {
            if( prod.id === product.id ){
                prod.quantity = quantity;
            }
            return prod;
        });

        setCart(newCart);
    }

    return (
        <div className="card" key={id}>
            <img src={photo} alt={name} className="card_img"/>

            <div className="card__info">
                <p className="card__desc">
                    {name}
                </p>
                <p className="card__price">
                    { price !== originalPrice ? <span>$50</span> : '' }${price}
                </p>
            </div>

            {
                exist && exist.quantity!==0 ?
                <div className="quantity__product">
                    <button onClick={ () => decrease(exist) } className="quantity__product-minus">-</button>
                    <input onChange={ (e) => edit(e, exist) } type="number" id="quantity" className="quantity__product-current" value={exist.quantity}/>
                    <button onClick={ () => increase(exist) } className="quantity__product-plus">+</button>
                </div>
                :
                <button onClick={ () => addProduct(product) } className="secondary__button">
                    Agregar al carrito
                </button>
            }
        </div>
    )
}

export default ProductCard
