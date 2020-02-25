/**
 * Define Index Routes Here
 */
const acl = require('express-acl');
const router = Router()
router.get("/", (req, res) => {
    res.render("home", {
        name: "Wohlig Framework"
    })
})
export default router
