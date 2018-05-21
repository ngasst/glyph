<template>
    <div id="root">
        This is the editor's root
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import editor from "./lib";
export default Vue.extend({
    mounted() {
        const el = this.$el.querySelector("#root");
        editor(el);
    }
});
</script>

