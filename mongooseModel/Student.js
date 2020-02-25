var schema = new Schema({
    email: {
        type: String
    },
    mobileNo: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    }
})

export default mongoose.model("Student", schema)
