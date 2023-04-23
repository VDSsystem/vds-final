//web services [routes]
//Reading

import express from 'express'
import adminsService from './service/adminsService.js'
const router = express.Router()

router.route('/admins')
    .get(adminsService.getAdmin)
    .post(adminsService.addAdmin)

export default router
