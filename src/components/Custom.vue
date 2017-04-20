<template>
  <div id='custom-ed' contenteditable="true" v-html="content" @input="handleInput">
    
  </div>
</template>

<script>
import compumix from './custom/computed';
import methomix from './custom/methods';
import datamix from './custom/data';
import hookmix from './custom/hooks';
import animix from './custom/animations';
export default {
  name: 'custom-ed',
  mixins: [compumix, methomix, datamix, hookmix, animix]

}
</script>

<style scoped lang="scss">
  #custom-ed {
    height: 100%;
    width: 100%;
  }
</style>
