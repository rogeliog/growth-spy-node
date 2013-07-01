define(['components/flight/lib/component'],
    function(defineComponent) {
      return defineComponent(graph);

      function graph() {
        this.defaultAttrs({
          graphSelector: "#chino"
        });

        this.renderGraph = function() {
          alert("Click");
        };

        this.after('initialize', function() {
          this.on(document, "click", {
            'graphSelector': this.renderGraph
          });

        });
      }
    }
);
