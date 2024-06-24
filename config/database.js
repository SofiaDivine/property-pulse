import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, 
      socketTimeoutMS: 45000 
    });
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};


export default connectDB;