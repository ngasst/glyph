<template>
    <div>
        <div id="editor" style="margin-bottom: 0"></div>
        <div style="text-align: center">
            <label style="border-right: 1px solid silver">
                Markdown <input type=radio name=inputformat value=markdown checked>&nbsp;</label>
            <label>&nbsp;<input type=radio name=inputformat value=prosemirror> WYSIWYM</label>
        </div>

        <div style="display: none">
            <textarea id="content">
                This is a comment written in [Markdown](http://commonmark.org). 
                *You* may know the syntax for inserting a link, but does your whole audience?&#13;&#13;So you can give people the **choice** to use a more familiar, discoverable interface.
            </textarea>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import editor from "./lib";
export default Vue.extend({
    mounted() {
        const el = this.$el.querySelector("#editor");
        editor(el);
    }
});
</script>

