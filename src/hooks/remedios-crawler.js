// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (context) {
    return new Promise((resolve, reject) => {
      const { data } = context;
      if (!data.linkNota) {
        reject(new Error('Link da nota fiscal está vazio'));
      }
      var Crawler = require("simplecrawler");
      const cheerio = require('cheerio')
      
      var crawler = new Crawler(data.linkNota);
      crawler.interval = 5000;
      crawler.maxConcurrency = 3;
      crawler.maxDepth = 0;
      var crawler = Crawler(data.linkNota)
        .on("fetchcomplete", function () {
          crawler.discoverResources = function (buffer, queueItem) {
            var $ = cheerio.load(buffer.toString("utf8"));

            context.data.linkNota = JSON.stringify($("span[class='txtTit']").map(function(i, el) {
              return $(this).text();
            }).get());

            resolve(context);
          };
        });
      crawler.start();
    });
  };
