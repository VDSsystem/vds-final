import Admin from "../models/admins.js";
export default class AdminRepo {
    getAdmin() {
        return Admin.find()
    }
    addAdmin(admin) {
        return Admin.create(admin)
    }

}

