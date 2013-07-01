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
        graphSelector: ""
      });

      this.setupGraph = function() {
        this.trigger('uiNeedsGraph', {
          type: this.attr.type,
          title: this.attr.title,
          graphData: this.attr.data
        });
      };

      this.renderGraph = function(ev, data) {
        $(this.attr.graphSelector).highcharts(data);
      };

      this.after('initialize', function() {
        this.on('dataGraphReady', this.renderGraph);
        this.setupGraph();
      });
    }
  }
);
