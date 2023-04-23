import Admin from "../models/admins";
export default class AdminRepo {
    getAdmin() {
        return Admin.find()
    }
    addAdmin(admin) {
        return Admin.create(admin)
    }

}

