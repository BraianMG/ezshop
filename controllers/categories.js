const axios = require('axios');

const getCategories = async (req, res) => {

    const allCategories_tree = {};
    let allCategories = [];

    await axios.get('https://challenge-api.aerolab.co/categories')
        .then( result => {
            allCategories = allCategories.concat(result.data.categories);
        }).catch( err => {
            console.log(err);
        });

    

    function buildCategoryTree(categories) {
        allCategories_tree
    }

    res.status(200).json({
        allCategories
    });
}

module.exports = {
    getCategories
}