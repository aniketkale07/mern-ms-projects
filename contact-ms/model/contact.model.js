import mongoose from "mongoose";
import { type } from "os";


const contactSchema = new mongoose.Schema({
    firstName :{ type : String, required : true, lowercase : true},
    LastName :{type : String , required :true , lowercase:true},
    email :{type : String , required : true},
    phone: {
    type: String, required: true,
    validate: {
      validator: function(v) {
        // v must be exactly 10 digits
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    }
  }
});


const Contact = mongoose.model("Contact", contactSchema);

export default Contact;