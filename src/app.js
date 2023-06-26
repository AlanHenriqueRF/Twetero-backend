import  express  from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

let tweets = [];

let user = []

app.get('/tweets',(req,res)=>{

    res.send(tweets)
		//[
	//{
		//username: "bobesponja",
//avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
		//tweet: "Eu amo hambúrguer de siri!"
	//}
//])
})

app.post('/sign-up',(req,res)=>{
	const new_user = [{username:req.body.username,avatar:req.body.avatar}]
	user.push(new_user)
	res.send('ok')
})

app.post('/tweets',(req,res)=>{
	if (user.length === 0){
		res.send('UNAUTHORIZED')
	}else{
		const new_tweet = [{
			username: req.body.username,
		  tweet: req.body.tweet
		}]
	}

})

app.listen(5000,()=>console.log('Ta rodando na porta 5000'))