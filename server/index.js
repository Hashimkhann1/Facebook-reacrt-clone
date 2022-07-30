import expree from "express";
import bodyParser from "body-parser";
import cors from "cors"

const app = expree()

app.use(cors())

app.use(bodyParser.json({limit : "30mb" , extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}))


const PORT = 3000;
app.get("/" , (req , res) => {
    res.send("ok")
})

app.listen(PORT , () => {
    console.log("server is running on port " + PORT)
})