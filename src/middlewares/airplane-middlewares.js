const {StatusCodes}= require('http-status-codes');

function validateCreateRequest(req,res,next)
 {
    if(!req.body.modelNumber)
    {
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json({
        success:false,
        message:"something went wrong while creating aiplane",
        data:{},
     error:{explanation:"model number is not found coming request"}
    });
   
}
 return next();
}
module.exports={
    validateCreateRequest
}
    