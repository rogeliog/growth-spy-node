exports.show = function(req, res) {
  var request = require('request');
  var rawStats;
  request("http://git.rogelio.mx/" + req.params.author + "/" + req.params.repoName + ".json", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      rawStats = JSON.parse(body);
      res.render('repo', repoStats(rawStats));
    }
  });

};

var repoStats = function(rawStats) {
  var d = new Date();
  console.log(rawStats.watchers);

  return {
    author: rawStats.author,
    repoName: rawStats.repoName,
    stats: {
      forks: statAsArray(rawStats.forks),
      watchers: statAsArray(rawStats.watchers),
    }
  };
};

var statAsArray = function(stats) {
  var result = [];
  stats.forEach(function(stat) {
    result.push([stat.timestamp, stat.count]);
  });

  return result;
}
