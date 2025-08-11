const mongoose = require('mongoose');

// Test MongoDB Atlas connection
async function testConnection() {
  try {
    console.log('🔌 Testing MongoDB Atlas connection...');
    
    // Your actual MongoDB Atlas connection string
    const uri = 'mongodb+srv://wedlanzaa_user:Deep.123@cluster3.oeunufo.mongodb.net/wedlanzaa?retryWrites=true&w=majority&appName=Cluster3';
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('🌐 Database:', mongoose.connection.name);
    console.log('🔗 Host:', mongoose.connection.host);
    
    // Test creating a collection
    const testSchema = new mongoose.Schema({ name: String });
    const Test = mongoose.model('Test', testSchema);
    
    // Test document
    const testDoc = new Test({ name: 'Connection Test' });
    await testDoc.save();
    console.log('✅ Successfully created test document!');
    
    // Clean up
    await Test.deleteOne({ name: 'Connection Test' });
    console.log('🧹 Test document cleaned up!');
    
    await mongoose.connection.close();
    console.log('🔌 Connection closed successfully!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('💡 Check your connection string and credentials');
  }
}

// Run the test
testConnection(); 