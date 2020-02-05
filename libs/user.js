const Store = require('./redis');
const crypto = require('crypto');

class User {
    constructor(token) {
        this.token = token;
        this.store = new Store();
    }

    async getUser() {
        return await this.store.get(this.token);
    }

    async setUser(user) {
        this.token = createHash('md5').update(JSON.stringify(user.username) + "(*^__^*)").digest("hex");;
        await this.store.set(this.token, user, 1000 * 60 * 60 *24);
        return this.token;
    }

    async destroy() {
        await this.store.destroy(this.token);
    }
}

module.exports = User;
