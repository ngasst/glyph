<template>
    <Gliph />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gliph from "@/components/editor/index.vue"; // @ is an alias to /src

@Component({
    components: {
        Gliph
    }
})
export default class EditorVue extends Vue {}
</script>

<style lang="stylus" scoped>
</style>
