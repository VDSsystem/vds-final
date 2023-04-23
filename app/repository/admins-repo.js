import Admin from "../models/admins";
export default class AdminRepo {
    async getAdmin() {
        return await Admin.find()
    }
    async addAccount(admin) {
        return await Admin.create(admin)
    }

}

