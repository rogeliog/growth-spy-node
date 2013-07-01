exports.show = function(req, res) {
  res.render('repo', repoStats(req.params.author, req.params.repoName));
}

var repoStats = function(author, repoName) {
  var d = new Date();

  return {
    author: author,
    repoName: repoName,
    stats: {
      forks: [
        [d - 1, 78],
        [d - 2, 80],
        [d - 3, 50],
        [d - 4, 60],
        [d - 6, 40],
        [d - 10, 20]
      ]
    }
  }
}
