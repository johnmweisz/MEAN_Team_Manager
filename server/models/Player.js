var mongoose = require("mongoose");
var validate = require("mongoose-validator");

var titleValidator = [
    validate({
        validator: "isLength",
        arguments: [4, 50],
        message: "Product name should be betwee {ARGS[0]} and {ARGS[1]} characters"
    }),
    validate({
        validator: "isAlphanumeric",
        message: "Name should contain alpha-numeric characters only"
    }),
]

var statusValidator = [
    validate({
        validator: v => {
            return ((v == 'Playing') || (v == 'Not Playing') || (v == 'Undecided'))
        },
        message: "Not a valid price"
    })
]

const PlayerSchema = new mongoose.Schema({
    name: {
        required: [true, "name is required"],
        type: String,
        validate: titleValidator,
    },
    position: {
        type: String,
        default: ""
    },
    status1: {
        type: String,
        default: "Undecided",
        validate: statusValidator
    },
    status2: {
        type: String,
        default: "Undecided",
        validate: statusValidator
    },
    status3: {
        type: String,
        default: "Undecided",
        validate: statusValidator
    }
}, { timestamps: true});
    
mongoose.model("Player", PlayerSchema);