const https = require('https');
const fs = require('fs');

const url = "https://www.numbeo.com/cost-of-living/rankings_current.jsp";

https.get(url, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    let cities = [];
    const regex = /<td.+>(.+?)<\//g;
    let match = regex.exec(data);

    while (match !== null) {
      let city = [];

      for (let i = 0; i < 7; ++i) {
        city.push(match[1]);
        match = regex.exec(data);
      }
      cities.push(city);
    }

    console.log(cities);

    const stream = fs.createWriteStream("src/data/cities.json");
    stream.once('open', function(fd) {
      stream.write(JSON.stringify(cities.sort()));
      stream.end();
    });
  });
});
