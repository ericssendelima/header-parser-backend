import express from "express";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();
const app = express();
// Configure para confiar nos cabeçalhos de proxy
app.set('trust proxy', true);

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res)=> {
  const ipaddress = req.ip;
  console.log(ipaddress);
  
  return res.json({ipaddress})
})

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3033, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
