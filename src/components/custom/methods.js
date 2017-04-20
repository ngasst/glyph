import rehype from 'rehype';
import english from 'retext-english';
import r2r from 'rehype-retext';
//import parse from 'rehype-parse';
//import unified from 'unified';

export default {
    methods: {
        handleInput(ev) {
            const html = this.$el.innerHTML;
            const cleaned = html
                .replace('<b>', '<strong>')
                .replace('</b>', '</strong>')
                .replace('<i>', '<em>')
                .replace('</i>', '</em>');
            
            rehype()
                .data('settings', {fragment: true})
                .process(cleaned, (err, file) => {
                    if (err) console.log(err)
                    r2r()                    .use(english)
                    .process(file, (err) => {
                        if (err) console.log(err)
                    })
                });
            
            
            console.log(ev.target);
        }   
    }
}