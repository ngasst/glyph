import rehype from 'rehype';
import isheading from 'hast-util-heading';
import findreplace from 'hast-util-find-and-replace';
import h from 'hastscript';
import {matches} from 'hast-util-select';
import stringify from 'hast-util-to-string';
import htmlify from 'hast-util-to-html';

export default {
    methods: {
        handleInput(ev) {
            const html = this.$el.innerHTML;
           /* const cleaned = html
                .replace(/<b>/gi, '<strong>')
                .replace(/<\/b>/gi, '</strong>')
                .replace(/<i>/gi, '<em>')
                .replace(/<\/i>/gi, '</em>')
                .replace(/<div>/gi, '<p>')
                .replace(/<\/div>/gi, '</p>');*/
            
            const tree = rehype()
                .data('settings', {fragment: true})
                .parse(html);

            const conform = {
                ...tree,
                children: tree.children.map((el, i) => {
                    const b = matches('b', el);
                    const it = matches('i', el);
                    const div = matches('div', el);
                    if (i === 0) {
                        const head = isheading(el);
                        console.log(head);
                        if (head) {
                            return el;
                        } else {
                            return h('h1', [el])
                        }
                    }
                    if (b) {
                        el = {
                            ...el,
                            tagName: 'strong'
                        }
                    } else if (it) {
                        el = {
                            ...el,
                            tagName: 'em'
                        }
                    } else if (div) {
                        el = {
                            ...el,
                            tagName: 'p'
                        }
                    }
                    //console.log(el);
                    return el;
                }).filter(el => !matches('br', el))
            };

            const hstr = htmlify(conform);
            const s = document.getSelection();
            console.log(s);
            const r = document.getSelection().getRangeAt(0);
            this.range = r;
            this.caret = r.endOffset;
            this.caretel = r.endContainer;
            this.content = hstr;
            console.log(this.range);
        },
        updateEditor(hstr) {
            const el = this.$el;
            el.innerHTML = hstr;
            const selection = document.getSelection();
            selection.removeAllRanges();
            const range = document.createRange();
            console.log(this.caretel)
            range.setEnd(document.querySelector(this.caretel), this.caret);
            console.log(range);
            selection.addRange(range);
        }
    }
}