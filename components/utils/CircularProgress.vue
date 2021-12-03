<template>

    <component
      :is="component"
      :progress="level"
      :determinate="determinate"
      v-bind="options"
      :loading="loading"
      :no-data="noData"
    >
    </component>
</template>

<script>
// import Interval from "@/utils/interval";
// import randomNumberInRange from "@/utils/randomNumberInRange";
// import props from "@/components/Examples/examplesProps";
import Interval from '~/plugins/mixins/utils/interval'

let props= {
  loading: {
    type: Boolean,
  },
  noData: {
    type: Boolean,
  },
  determinate: {
    type: Boolean,
  },
  test: {
    type: Boolean,
  },
  level:{
      type:Number,
      required: true

  }
};
export default {
    props,

  data: () => ({
    // progress: props.level,
    options: {
      color: "#7579ff",
      "empty-color": "#324c7e",
      size: 120,
      thickness: 5,
      "empty-thickness": 3,
      "line-mode": "out 5",
      animation: "rs 700 1000",
      "font-size": "1.5rem",
      "font-color": "white",
    },
  }),
  computed: {
    component() {
      return this.test ? "vue-ellipse-progress-test" : "vue-ellipse-progress";
    },
  },
  methods: {
    randomizeOptions() {
      this.progress =this.$randomNumberInRange(0,100);
    },
  },
  mounted() {
    Interval.addTask(this.randomizeOptions);
  },
};
</script>

<style scoped></style>