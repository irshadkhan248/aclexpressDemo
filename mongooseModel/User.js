var schema = new Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
 
})

export default mongoose.model("User", schema)
