// import UserModel from "../models/UserModel"

// /**
//  * Define Middle Ware Here
//  * import bodyParser from 'body-parser'
//  */

// /**
//  * Use Middleware in Express Apps
//  * app.use(bodyParser.json())
//  */
// const authenticateUser = (req, res, next) => {
//     console.log(req.path)
//     var nonSecurePaths = [
//         "/User/awsUrl",
//         "/User/createToken",
//         "/User/getUserInfo",
//         "/Student/*",
//         "/Student/"
//     ]
//     if (_.includes(nonSecurePaths, req.path)) {
//         next()
//     } else {
//         let accessToken
//         if (req && req.headers && req.headers.accesstoken) {
//             accessToken = req.headers.accesstoken
//         } else {
//             accessToken = req.body.accessToken
//         }

//         User.findOne({ accessToken: accessToken }).exec(function(err, user) {
//             if (err) {
//                 req.isAuthenticated = false
//                 res.status(401).send(err)
//             } else if (!_.isEmpty(user)) {
//                 req.isAuthenticated = true
//                 req.user = user
//                 next()
//             } else {
//                 req.isAuthenticated = false
//                 res.status(401).send("Not Authorized")
//             }
//         })
//     }
// }

// export default authenticateUser

// app.use((req, res, next) => {
//     // res.setHeader("Access-Control-Allow-Credentials", true)
//     // res.setHeader("Access-Control-Allow-Origin", "*")
//     // res.setHeader("access-control-allow-headers", "Content-Type")
//     next()
// })

// //Use Middleware in Express Apps
// app.use(authenticateUser)
