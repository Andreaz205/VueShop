<template>
  <div class="v-select">
    <p
        class="title"
        @click="areOptionsVisible=!areOptionsVisible"
    >
      {{selected}}
    </p>
    <div
        class="options"
        v-if="areOptionsVisible || ixExpanded"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    selected: {
      type: String,
      default: '',
    },
    isExpanded: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option)
      this.areOptionsVisible=false
    },
    hideSelect() {
      this.areOptionsVisible = false
    },
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
  .v-select {
    position:relative;
    width: 200px;
    cursor: pointer;
    text-align: left;
  }
  .title {
    border: solid 1px #aeaeae;
    padding: $padding;
  }
  .v-select p {
    margin: 0;
  }

  .options {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width:100%;
    padding: $padding;
  }
  .options p:hover {
    background: #e7e7e7;
  }

</style>