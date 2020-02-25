const router = Router()
const acl = require("../lib")

router.use(function(req, res, next) {
    console.log(req.headers.role)
    var role = req.headers.role
    if (role) {
        global.role = req.headers.role
        next()
    } else {
        res.send("The Role is not defined")
    }
})
// let options = {
//     filename: "nacl.json"
// }
acl.config()
router.use(acl.authorize)
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        console.log("in getone")
        UserModel.getOne(req.params, res.callback)
    }
)
router.post("/", (req, res) => {
    console.log("in save")
    UserModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    console.log("in update", req.params)
    UserModel.updateData(req.params, req.body, res.callback)
})
router.delete("/:id", (req, res) => {
    console.log("in delete")
    UserModel.deleteData(req.params, res.callback)
})
export default router
