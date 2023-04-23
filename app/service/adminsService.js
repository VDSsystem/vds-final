import AdminRepo from "../repository/admins-repo"
const repo = new AdminRepo()

class AdminService {
    async getAdmin(req, res) {
        try {
            const admins = await repo.getAdmin(req.query.type)
            res.status(200).json(admins)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async addAdmin(req, res) {
        try {
            const newAdmin = await repo.addAdmin(req.body)
            res.status(201).json(newAdmin)
        } catch (e) {
            res.status(500).json(e)
        }

    }

}

export default new AccountService()
