//web services [routes]
//Reading
import express from 'express'
import adminsService from './service/adminsService'
const router = express.Router()

router.route('/admins')
    .get(adminsService.getAdmins)
    .post(adminsService.addAdmin)
export default router
