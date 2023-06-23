const express =  require('express');
const{ ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();
//console.log(process.env);zz
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT, () => 
{
    console.log(`sucesfully started the server on PORT : ${ServerConfig.PORT}`);
    //Logger.info("succcesfully started the server","root",{});
});