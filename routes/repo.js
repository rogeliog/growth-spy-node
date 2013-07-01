exports.show = function(req, res) {
  res.render('repo', repoStats(req.params.author, req.params.repoName));
}

var repoStats = function(author, repoName) {
  var d = new Date();

  return {
    chino: {chino: 1, edda: 2},
    author: author,
    repoName: repoName,
    stats: {
      forks: [
        [new Date().setDate(d.getDate() - 10), 20],
        [new Date().setDate(d.getDate() - 9), 50],
        [new Date().setDate(d.getDate() - 8), 100],
        [new Date().setDate(d.getDate() - 6), 200],
        [new Date().setDate(d.getDate() - 5), 300],
        [new Date().setDate(d.getDate() - 4), 600],
        [new Date().setDate(d.getDate() - 1), 490]
      ]
    }
  }
}
