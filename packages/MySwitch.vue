<template>
  <div :class="[
    'd-switch',
    value ? 'is-checked' : '',
    disabled ? 'is-disabled' : '',
   
  ]" :aria-checked="value" @click="handleClick">
    <span class="d-switch__core" ref="core" :style="{
      'border-color': value ? activeColor : inactiveColor,
      'background-color': value ? activeColor : inactiveColor
    }"></span>
    <!-- 用来接收name -->
    <input type="checkbox" class="d-switch__input" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'DSwitch',
  data() {
    return {}
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('input', !this.value)
        this.$emit('change', !this.value)
      }
    }
  },
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#dcdfe6'
    },
    inactiveColor: {
      default: '#dcdfe6'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mimicry: {
      type: Boolean,
      default: false
    }
  },
  created() { },
  mounted() { },
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss">
.d-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .d-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  .d-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
  }

  .d-switch__core:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }

  &.is-checked .d-switch__core::after {
    left: 100%;
    margin-left: -17px;
  }

  &.is-disabled .d-switch__core {
    cursor: not-allowed;
  }

  
}
</style>
