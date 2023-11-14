import mongoose from 'mongoose';

const { Schema } = mongoose;

const refreshTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User', 
  },
  token: {
    type: String,
    required: true,
  },
});

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);

export default RefreshToken;