const unless = require("express-unless")

const {
    readConfigFile,
    mapPolicyToGroup,
    findRoleFromRequest,
    findPermissionForRoute,
    checkIfHasAccess,
    deny
} = require("./common")

let options = {
    path: ".",
    filename: "nacl.json",
    policies: new Map(),
    defaultRole: global.role
}
// console.log("===========options==========", new Map())
function config(config, response) {
    options = Object.assign({}, options, config, { response })

    if (config && config.rules) {
        // console.log("options.policies-###-", options.policies)

        options.policies = mapPolicyToGroup(config.rules)
    } else {
        let filePath =
            options.filename && options.path
                ? `${options.path}/${options.filename}`
                : options.filename

        options.policies = mapPolicyToGroup(readConfigFile(filePath))
        console.log("options.policies--", options.policies)
    }

    if (!options.policies.size) {
        return "\u001b[33mWARNING: You have not set any policies, All traffic will be denied\u001b[39m"
    }
    return options.policies
}

/**
 * [authorize Express middleware]
 * @param  {[type]}   req  [Th request object]
 * @param  {[type]}   res  [The response object]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

function authorize(req, res, next) {
    console.log("role###",global.role)
    const role = findRoleFromRequest(
        req,
        options.roleSearchPath,
        global.role,
        options.decodedObjectName
    )

    if (req.originalUrl === "/") {
        return next()
    }
    const policy = options.policies.get(role)
    if (!policy) {
        console.log("in policy-------")
        return res.status(403).json({
            status: "Access denied",
            success: false,
            message: `REQUIRED: Policy for role ${role} is not defined`
        })
    }

    const permission = findPermissionForRoute(
        req.originalUrl,
        req.method,
        options.baseUrl,
        policy
    )
    console.log("permission-============-", permission)
    console.log("!permission---", !permission)
    if (!permission) {
        console.log("under permision", permission)
        if (typeof options.denyCallback === "function") {
            console.log("in if---")
            return options.denyCallback(res)
        }
        return res
            .status(403)
            .json(deny(options.customMessage, options.response))
    }

    return checkIfHasAccess(
        req.method,
        res,
        next,
        permission,
        options.customMessage,
        options.response,
        options.denyCallback
    )
}

authorize.unless = unless

module.exports = {
    config,
    authorize
}
