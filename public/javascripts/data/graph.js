define(
  [
    'components/flight/lib/component',
  ],
  function(defineComponent) {
    return defineComponent(graph);

    function graph() {
      this.newGraph = function(ev, data) {
        this.trigger('graphReady', {
          chart: { type: data.type },
          title: { text: data.title },
          xAxis: { type: 'datetime' },
          series: [{ data: data.graphData }]
        });
      };

      this.after('initialize', function() {
        this.on('uiRenderGraph', this.newGraph);
      });
    }
  }
);
