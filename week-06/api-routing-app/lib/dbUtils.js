import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

mongoose.models = {};
export const studentModel = mongoose.model('students', studentSchema);

export async function mongooseConnect() {
    if (mongoose.connections[0].readyState) {
      return true;
    }
  
    try {
      await mongoose.connect("...");
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
