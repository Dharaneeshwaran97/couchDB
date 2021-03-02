class UserService {
    // to get particular product Id
    static async getUser(userId) {
        try {

            let response = await axios.request({
                url: '/users/' + userId,
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
            console.log("error", err);
            throw err;
            // throw new Error('Please Enter Valid  User Id');
        }
    }

}