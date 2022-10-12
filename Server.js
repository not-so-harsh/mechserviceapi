const http = require('http');
const port = process.env.PORT || 3001;
const app = require('./App');
const server =http.createServer(app);
const cors = require('cors');


app.use(cors());

    


server.listen(port,()=>(console.log('app is running :'+port)));