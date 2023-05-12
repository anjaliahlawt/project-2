const info = (function(req,res){
    return res.json({
        sucess :true,
        message : 'api is live',
        error:{},
        data:{}
    })
})
module.exports = {
info
}