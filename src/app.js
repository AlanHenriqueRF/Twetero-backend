import  express  from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

let tweets = [];

app.get('/tweets',(req,res)=>{
    res.send([
	{
		username: "bobesponja",
		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		tweet: "Eu amo hambúrguer de siri!"
	}
])
})

app.post('/sign-up',(req,res)=>{
	console.log(req.body)
	res.send('Deu bom')
})

app.listen(5000,()=>console.log('Ta rodando na porta 5000'))