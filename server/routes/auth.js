const express = require('express')
const router = express.Router();
router.get('/api/signup',(req,res)=>{
   res.jsonp({
    data:'you hit signup endpoint'
   }); 
});

module.exports = router;