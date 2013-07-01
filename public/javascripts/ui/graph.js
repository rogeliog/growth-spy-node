define(
  [
    'components/flight/lib/component',
    'components/highcharts/highcharts'
  ],

  function(defineComponent) {
    return defineComponent(graph);

    function graph() {
      this.defaultAttrs({
        data: [],
        graphSelector: "#chino"
      });

      this.setupGraph = function() {
        this.trigger('uiRenderGraph', {
          type: this.attr.type,
          title: this.attr.title,
          graphData: this.attr.data
        });
      };

      this.renderGraph = function(ev, data) {
        $(this.attr.graphSelector).highcharts(data);
      };

      this.after('initialize', function() {
        this.on('graphReady', this.renderGraph);
        this.setupGraph();
      });
    }
  }
);
