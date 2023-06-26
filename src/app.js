import express from "express";
import cors from "cors";

const app = express()
app.use(cors())
app.use(express.json())

let tweets = [];

let user = []

app.post('/sign-up', (req, res) => {
	const { username, avatar } = req.body
	if (!req.body || !username || !avatar) {
		res.sendStatus(400)
		return
	}
	if (typeof (username) !== 'string' || typeof (avatar) !== 'string') {
		res.status(400).send('Todos os campos são obrigatórios!');
		return
	}

	const new_user = { username, avatar }

	user.push(new_user)
	res.status(201).send('ok');
})

app.post('/tweets', (req, res) => {
	const { username, tweet } = req.body;

	if (user.length === 0) {
		res.sendStatus(401);
		return
	}
	if (!req.body || !username || !tweet) {
		res.sendStatus(400)
		return
	}
	if (typeof (username) !== 'string' || typeof (tweet) !== 'string') {
		res.status(400).send('Todos os campos são obrigatórios!');
		return
	}


	const new_tweet = {
		username,
		tweet
	};

	tweets.push(new_tweet);
	res.status(201).send('ok');


})

app.get('/tweets', (req, res) => {
	const { username,page } = req.query;

	console.log(username)
	if (username) {
		const tweet = tweets.filter(
			(i) => i.username===username
		)
		console.log(tweet)
		tweet.forEach((j) => {
			j.avatar = user.avatar
		})
		return res.send(tweet)
	}

	if (!page){
		return res.sendStatus(400)
	}

	tweets.forEach((tweet) => {
		const avatar = user.find((i) => i.username === tweet.username)
		tweet.avatar = avatar.avatar;
	})

	while (tweets.length > 10) {
		tweets.shift()
	}

	res.send(tweets)
})



app.listen(5000, () => console.log('Ta rodando na porta 5000'))