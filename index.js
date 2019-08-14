const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const fs         = require('fs');

// The middleware below is used to parse the post data
const urlEncodedParser = bodyParser.urlencoded({extended: false});


// Post Handler--Note: urlEncodedParser will be kicked off everytime
// we get a post request to the route /sensorData. It will parse data.
app.post('/sensorData', urlEncodedParser, (req, res) => {
  console.log(req.body);
  fs.appendFile('SensorData.txt', 'Temperature: ' + req.body.temp + ' F, ' 
                + 'Humidity: ' + req.body.humidity + ' %RH\n', 'utf8',
    // Callback function
    function(err){
      if(err) throw err;
    }
   );
  res.send('[Server]: Data stored!');
});

app.use(express.static('public'));
app.listen(3000, () => console.log('Server running on port 3000'));
