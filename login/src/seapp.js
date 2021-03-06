import Vue from 'vue'
import Seapp from './Seapp.vue'

import 'muse-ui/dist/muse-ui.css'
import MuseUI from 'muse-ui'
import Toast from 'muse-ui-toast'
import {theme} from 'muse-ui'

import Message from 'muse-ui-message'
import Loading from 'muse-ui-loading'
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css


Vue.use(MuseUI)
Vue.use(Toast)
Vue.use(Message)
Vue.use(Loading)

new Vue({
  el: '#seapp',
  data() {
    return {}
  },
  render: h => h(Seapp)
})
