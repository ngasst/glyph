export default {
    mounted () {
        this.$on('key-enter', ev => {
            const range = document.getSelection().getRangeAt(0);
            let br = document.createElement('br');
            const sel = document.getSelection();
            range.insertNode(br);
            range.setStartAfter(br);
            range.setEndAfter(br);
            sel.removeAllRanges();
            sel.addRange(range);
            console.log(this.content);
        });
    }
}