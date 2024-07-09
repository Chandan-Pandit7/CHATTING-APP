const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000;
const mongoose  = require('mongoose');
const cors = require('cors')
const http = require('http');
const { Server } = require('socket.io');
require("dotenv").config();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3001",
		methods:[ "GET", "POST" ]
	},
})


// app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(
	session({
		secret: "asdnakscne aiscnencanscascec",
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({
			// mongoUrl:process.env.MONGO_URL,
			        mongoUrl:'mongodb+srv://Chandan:Chandan@cluster0.w4lcnrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
		}),
	})
);

const passport = require('./src/authentication/passport');

app.use(passport.initialize());
app.use(passport.session());

const loginRouter = require('./src/routes/login');

app.use('/', loginRouter);

app.get('/login', (req, res) => {
	res.status(250).json({ msg: "Login Failed!" });
})

app.get("/dashboard", (req, res) => {
	res.json({ message: "Welcome to the dashboard!" });
});

const signupRouter = require("./src/routes/signup");

app.use("/signup" ,signupRouter);

io.on("connection", (socket) => {
	console.log("Connected to ", socket.id)
	// console.log(user);
	
	socket.on("send_message", (data) => {
		console.log(data);
		console.log("Message received from : ", data.name);
		io.emit('msg-received', {msg:data.msg, id:socket.id, name: data.name});
	});
})

mongoose
	.connect('mongodb+srv://Chandan:Chandan@cluster0.w4lcnrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => {
		server.listen(PORT, () => console.log(`Listening on port :` + PORT));
	})
	.catch((error) => {
		console.log(error);
	});