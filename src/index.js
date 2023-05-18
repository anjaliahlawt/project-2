const express =  require('express');
const {serverconfig,Logger} = require('./config');
const apiRoutes = require('./routes');
const app = express();
//console.log(process.env);zz
app.use('/api', apiRoutes);
app.listen(serverconfig.PORT,() => 
{
    console.log(`sucesfully started the server on PORT :${serverconfig.PORT}`);
    Logger.info("succcesfully started the server","root",{});
});