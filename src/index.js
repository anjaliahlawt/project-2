const express =  require('express');
const {PORT} = require('./config');
const apiRoutes = require('./routes');
const app = express();
//console.log(process.env);zz
app.use('/api', apiRoutes);
app.listen(PORT,() => 
{
    console.log(`sucesfully started the server on PORT :${PORT}`);
});