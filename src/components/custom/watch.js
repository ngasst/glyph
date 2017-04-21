export default {
    watch: {
        'content'(val, old) {
            if (val !== old) {
                this.updateEditor(val);
            }
        }
    }
}