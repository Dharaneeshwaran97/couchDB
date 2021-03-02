// const axios = require('axios');

class ProductService {
    // to get all products
    static async getAllProducts() {
        return axios.request({
            url: '/products/_all_docs?include_docs=true',
            method: 'get',
            baseURL: DB_URL,
            auth: {
                username: 'apikey-v2-1zry8ajgypo2q14hzjvdwuemmaiixcz9dhmtedvr14ck',
                password: '53fcbf5faa893817605b85afaf7af46f',
            },
            data: null,
        })
    }
    // searchproducts based on brandName
    static async searchProducts(brandNames) {
        let requestedData = {
            selector: { brand_name: { $in: brandNames } },
            sort: [{ "price": "desc" }],
            // "limit": 5,
            skip: 5
        }
        return axios.request({
            url: '/products/_find',
            method: 'post',
            baseURL: DB_URL,
            auth: {
                username: 'apikey-v2-1zry8ajgypo2q14hzjvdwuemmaiixcz9dhmtedvr14ck',
                password: '53fcbf5faa893817605b85afaf7af46f',
            },
            data: requestedData
        })

    }
    // filter the product based on price limit
    static async priceFilter(min, max) {
        let requestedData = {
            selector: { price: { $gte: min, $lte: max } }
        }
        return axios.request({
            url: '/products/_find',
            method: 'post',
            baseURL: DB_URL,
            auth: {
                username: 'apikey-v2-1zry8ajgypo2q14hzjvdwuemmaiixcz9dhmtedvr14ck',
                password: '53fcbf5faa893817605b85afaf7af46f',
            },
            data: requestedData
        })
    }
    // to get particular product
    static async getProduct(productId) {
        try {
            let response = await axios.request({
                url: '/products/' + productId,
                method: 'get',
                baseURL: DB_URL,
                auth: {
                    username: 'apikey-v2-1zry8ajgypo2q14hzjvdwuemmaiixcz9dhmtedvr14ck',
                    password: '53fcbf5faa893817605b85afaf7af46f',
                },
                data: null,
            });
            return response.data;
        } catch (err) {
            console.log(err);
            throw err;
            // throw new Error('Please Enter Valid Product Id');
        }
    }
}