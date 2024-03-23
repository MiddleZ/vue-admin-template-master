<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text"> {{ name }}</div> -->
    <!-- <role></role> -->
    <ping class="ping-class"></ping>
    <ping-2 class="ping2-class"></ping-2>
    <roll></roll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import role from '../sys/role.vue'
import ping from './ping.vue'
import Ping2 from './ping2.vue'
import roll from './roll.vue'
export default {
  components: { ping, Ping2,roll },
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.ping-class {
    position: absolute;
    top: 20px;
    right: 10px;
}
.ping2-class {
    position: absolute;
    top: 330px;
    right: 10px;
}

</style>
