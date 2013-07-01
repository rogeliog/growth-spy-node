define( ['ui/graph', 'data/graph'], function(GraphUI, GraphData) {

  function initialize() {
    GraphData.attachTo("#chino");
    GraphUI.attachTo("#chino", {
      data: JSON.parse(preloadedGraphData.forks),
      title: 'Forks',
      type: 'spline',
    });
  }

  return initialize;
});
