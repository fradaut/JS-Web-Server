// src/views/dataAnalysis/index.js
import { ref, onMounted } from 'vue';
import Plotly from 'plotly.js-dist-min';
import Header from './components/header.vue';

export default {
  components: {
    Header
  },
  setup() {
    const tester = ref(null);

    onMounted(() => {
      Plotly.newPlot(tester.value, [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 2, 4, 8, 16],
        },
      ]);
    });

    return {
      tester
    };
  }
};
