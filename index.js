const express = require('express');
const {initializeDBConnection} = require('./db/db.connect')
const cors = require('cors')

const videos = require('./routes/videos.route')
const history = require("./routes/history.route")
const likedVideos = require("./routes/likedVideos.route")
const user = require("./routes/user.route")
const playlist = require("./routes/playlist.route")

const app = express();

initializeDBConnection()


app.use(express.json())
app.use(cors())

app.use("/api/videos", videos)
app.use("/api/history", history)
app.use("/api/liked", likedVideos)
app.use("/api/user", user)
app.use("/api/playlist", playlist)


app.get('/', (req, res) => {

  res.json({message: "Hello World"});
  
});



app.listen(5000, () => {
  console.log('server started');
});