const fetch = require('node-fetch');
const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
  const feed = await parser.parseURL('https://www.example.com/feed.xml');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });
})();
