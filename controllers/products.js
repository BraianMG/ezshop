const axios = require('axios');

const getProducts = async (req, res) => {
    let usdRate = 1;
    let allProducts = [];
    let page = 1;
    let updateProducts = [];

    const [ usd, prods1 ] = await Promise.all([
        axios.get(`${process.env.URL_USD_EXCHANGE_RATE}`),
        axios.get(`${process.env.URL_PRODUCTS}?page=${page}`)
    ]);

    usdRate = usd.data.rate;
    allProducts = allProducts.concat(prods1.data.products);

    let requests = [];
    for (let i = 2; i <= prods1.data.page_count; i++) {
        requests.push( axios.get(`${process.env.URL_PRODUCTS}?page=${i}`) )
    }

    const responses = await Promise.all(requests);

    responses.forEach(res => {

        allProducts = allProducts.concat(res.data.products);
    });

    allProducts.forEach(prod => {
        if ( updateAgo(prod.updatedAt) <= 30) {
            prod.price_usd = parseFloat((prod.price / usdRate).toFixed(2));
            prod.originalPrice_usd = parseFloat((prod.originalPrice / usdRate).toFixed(2));
            updateProducts.push(prod);
        }
    });
    
    res.status(200).json({
        products: updateProducts,
        products_count: updateProducts.length
    });
    

    function updateAgo(updatedAt) {
        const start = new Date(updatedAt).getTime();
        const end = new Date().getTime();
        
        const diff = (end - start) / (1000*60*60*24);
        
        return diff;
    }
}

module.exports = {
    getProducts
}