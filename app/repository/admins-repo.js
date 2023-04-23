import Admin from "../models/admins";
export default class AdminRepo {
    getAdmin() {
        return Admin.find()
    }
    addAccount(admin) {
        return Admin.create(admin)
    }

}

