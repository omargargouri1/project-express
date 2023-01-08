const verifTime=(req,res,next)=>{
    const date=new Date()
    const day=date.getDay()
    const hour=date.getHours()
    if((day==0||day==6) || (hour<9 || hour>17)){
        res.send("we are closed")
        
    }else (next())

}
module.exports=verifTime