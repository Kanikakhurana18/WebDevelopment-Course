import jwt from "jsonwebtoken"

export const checkAuth=(req,res,next)=>{
    try {
        let token=req.cookies.token
        if(!token){
            return res.status(401).json({message: "user is not authenticated"})
        }
        let decode=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=decode.id
        next()

    } catch (error) {
        console.error("checkAuth ERROR:", error);
  return res.status(401).json({
    message: "Invalid or expired token"
  });
    }
}