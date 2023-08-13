const path=require('path')

const publicPath=path.join(__dirname,'../public')
const express=require('express')
const port=processs.env.PORT ||3000;
let app =express();

app.use(express.static(publicPath));
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})