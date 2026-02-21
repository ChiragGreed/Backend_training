require('dotenv').config();
const app = require('./src/config/app.js');
const ConnectToDb = require('./src/config/database.js');


ConnectToDb();

app.listen(5001,()=>{
    console.log('Server running at Port 3900')
})

