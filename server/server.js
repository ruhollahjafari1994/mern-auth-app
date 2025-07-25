const  express  = require('express');

const app = express();

app.get('/api/signup',(req,res)=>{
   res.jsonp({
    data:'you hit signup endpoint'
   }); 
});

const port =process.env.port || 8000
app.listen(port,()=>{
console.log(`API is running on port ${port}`);
});


