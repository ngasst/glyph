export default {
    methods: {
        handleKeyPressEvents(ev) {
            if (ev.keyCode === 13) 
                this.$emit('key-enter', ev) && ev.preventDefault();
            else if (ev.keyCode === 32)
                this.$emit('key-space', ev) && ev.preventDefault();
            else if (ev.keyCode === 8)
                this.$emit('keyp-backspace', ev) && ev.preventDefault();
            else if (ev.keyCode === 46)
                this.$emit('key-delete', ev) && ev.preventDefault();
            else this.$emit('key-char', ev) && ev.preventDefault();
        }
    }
}