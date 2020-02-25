/**
 * Define Global Variables Here
 * global._ = require("lodash")
 */

//aws cognito setup
global.AmazonCognitoIdentity = require("amazon-cognito-identity-js")
global.AWS = require("aws-sdk")
global.request = require("request")
global.path = require("path")
global.fetch = require("node-fetch")
global.bodyParser = require("body-parser")
global.limit = 10
global.speakeasy = require("speakeasy")

global.ClientId = "6m5cq099kbvnmgeads3jbtnbm"
global.redirect_uri = "http://localhost:3000/User/CreateToken"
global.signUpUrl =
    "https://environment.auth.ap-south-1.amazoncognito.com/signup"
global.loginUrl = "https://environment.auth.ap-south-1.amazoncognito.com/login"
global.getTokenUrl =
    "https://environment.auth.ap-south-1.amazoncognito.com/oauth2/token"
global.userInfoUrl =
    "https://environment.auth.ap-south-1.amazoncognito.com/oauth2/userInfo"
global.logoutUrl =
    "https://environment.auth.ap-south-1.amazoncognito.com/logout"
global.role = ""
