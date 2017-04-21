import rehype from 'rehype';
import english from 'retext-english';
import r2r from 'rehype-retext';
//import rstringify from 'retext-stringify';
import toNLCST from 'hast-util-to-nlcst';
import hparse from 'rehype-parse';
import unified from 'unified';
import vfile from 'vfile';
import English from 'parse-english';
import inspect from 'unist-util-inspect';

export default {
    methods: {
        handleInput(ev) {
            const html = this.$el.innerHTML;
            const cleaned = html
                .replace(/<b>/gi, '<strong>')
                .replace(/<\/b>/gi, '</strong>')
                .replace(/<i>/gi, '<em>')
                .replace(/<\/i>/gi, '</em>')
                .replace(/<div>/gi, '<p>')
                .replace(/<\/div>/gi, '</p>');
            

            const file = vfile(cleaned);
            const htree = rehype().parse(file);
            const stree = toNLCST(htree, file, English);

            console.log(stree)
            
            
            /*rehype()
                .data('settings', {fragment: true})
                .process(cleaned)
                .then(file => {
                    const tree = rehype().parse(cleaned);
                   console.log(file)
                   const nlcst = toNLCST(tree, file, english);
                   console.log(nlcst);
                    this.nlcst = tree;
                })
                .catch(err => {
                    console.log(err);
                });*/
        },
        getHtmlFromTree(tree) {

        }   
    }
}