class OrderService {
    //add new order
    static async placeOrder(orderDetails) {
        try {
            let result = await axios.request({
                url: "/orders",
                method: "post",
                baseURL: DB_URL,
                auth: {
                    username: 'apikey-v2-1zry8ajgypo2q14hzjvdwuemmaiixcz9dhmtedvr14ck',
                    password: '53fcbf5faa893817605b85afaf7af46f',
                },
                data: orderDetails
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    // get one order
    static async getOrder(userId) {

    }
}