import  express  from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

let tweets = [];

let user = []

app.post('/sign-up',(req,res)=>{
	const new_user = {username:req.body.username,avatar:req.body.avatar}
	
	user.push(new_user)
	res.send(new_user)//'ok')
})

app.post('/tweets',(req,res)=>{
	if (user.length === 0){
		res.send('UNAUTHORIZED');
	}else{
		const new_tweet = {
			username: req.body.username,
		  tweet: req.body.tweet
		};

		tweets.push(new_tweet);
		res.send(new_tweet);//'ok');
	}

})

app.get('/tweets',(req,res)=>{
	tweets.forEach((tweet)=>{
		const avatar = user.find((i)=>i.username===tweet.username)
		console.log(tweet)
		tweet.avatar = avatar.avatar;
		console.log(tweet)
		})
	
	while (tweets.length>10){
		tweets.shift()
	}

	//console.log(tweets)
    res.send(tweets)
})

app.listen(5000,()=>console.log('Ta rodando na porta 5000'))