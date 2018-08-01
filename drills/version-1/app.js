const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

// process is like the window in the browser, and it is an object. It has the property
// enviroment and PORT is an eviroment variable
const PORT = process.env.PORT ? process.env.PORT : 3000;
const lines = fs.readFileSync('./cohorts.csv', 'utf8').split('\n');

const columns = lines.shift().split(',');
const rows = lines.map(line => line.split(','));

const items = [];
for (let i = 0; i < rows.length; i += 1) {
  const item = {};
  item[columns[0]] = Number(rows[i][0]);
  for (let j = 0; j < columns.length; j += 1) {
    item[columns[j]] = rows[i][j];
  }
  items.push(item);
}


app.get('/', (req, res) => {
  res.send({
    data: items,
  });
});

app.get('/:id', (req, res) => {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].ID === req.params.id) {
      res.send(items[i]);
      return;
    }
  }

  res.send({
    error: {
      message: 'No record found!',
    },
  });
});

app.use(cors());

// process.stdout.write is a form of console.log in the rigth place,
// that means that is more flexible like this I have msg to debug
app.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));
