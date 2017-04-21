export default {
    watch: {
        'nlcs'(val, old) {
            if (val !== old) {
                const selection = '';
                const content = this.getHtmlFromTree(val);
                this.content = content;
            }
        }
    }
}