define( ['ui/graph', 'data/graph'], function(GraphUI, GraphData) {

  function initialize() {
    GraphData.attachTo("#forks");
    GraphUI.attachTo("#forks", {
      graphSelector: "#forks",
      data: JSON.parse(preloadedGraphData.forks),
      title: 'Forks',
      type: 'spline',
    });
    GraphData.attachTo("#watchers");
    GraphUI.attachTo("#watchers", {
      graphSelector: "#watchers",
      data: JSON.parse(preloadedGraphData.watchers),
      title: 'Watchers',
      type: 'spline',
    });
  }

  return initialize;
});
