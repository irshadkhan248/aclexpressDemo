export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    getOne(data, callback) {
        User.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        console.log("data--", data)
        const user = new User(data)
        user.save(callback)
    },
    updateData: (data, body, callback) => {
        User.updateOne(
            { _id: data.id },
            {
                $set: body
            }
        ).exec(callback)
    },
    deleteData: (data, callback) => {
        User.deleteOne({ _id: data.id }).exec(callback)
    },


}
