<template>
  <div id='custom-ed' contenteditable="true" @input="handleInput"
  @keypress="handleKeyPressEvents">
    
  </div>
</template>

<script>
import compumix from './custom/computed';
import methomix from './custom/methods';
import datamix from './custom/data';
import hookmix from './custom/hooks';
import animix from './custom/animations';
import watchmix from './custom/watch';
import eventmix from './custom/events';
import keymix from './custom/keys';
export default {
  name: 'custom-ed',
  mixins: [compumix, methomix, datamix, hookmix, animix, watchmix, eventmix, keymix]

}
</script>

<style lang="scss">
  #custom-ed {
    height: 100%;
    width: 100%;

    h1, h2, h3, h4, h5, h6 {
      color: rgba(#333, .7);
      margin: 0;
    }
  }
</style>
