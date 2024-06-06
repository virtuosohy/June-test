
import HzyButton from './MyButton.vue'
import HzyDialog from './MyDialog.vue'
import HzyInput from './MyInput.vue'
import HzySwitch from './MySwitch.vue'
import HzyRadio from './Myradio.vue'
import HzyRadioGp from './MyrGroup.vue'
import Hzycheckbox from './MyCheckbox.vue'
import HzycheckboxGp from './MycGroup.vue'



var components = [
  HzyButton,
  HzyDialog,
  HzyInput,
  HzySwitch,
  HzyRadio,
  HzyRadioGp,
  Hzycheckbox,
  HzycheckboxGp
]


const install = function (Vue, options) {
  if (options && options.components) {
    components = options.components
  }
  components.forEach(item => {
    // 往全局注册组件
    Vue.component(item.name, item)
  })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default { install }
// Vue.component(HzyButton.name, HzyButton)
// Vue.component(HzyDialog.name, HzyDialog)
// Vue.component(HzyInput.name, HzyInput)
// Vue.component(HzySwitch.name, HzySwitch)
// Vue.component(HzyRadio.name, HzyRadio)
// Vue.component(HzyRadioGp.name, HzyRadioGp)
// Vue.component(Hzycheckbox.name, Hzycheckbox)
// Vue.component(HzycheckboxGp.name, HzycheckboxGp)



