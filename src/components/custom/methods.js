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
                    } /*else if (div) {
                        el = {
                            ...el,
                            tagName: 'p'
                        }
                    }*/
                    //console.log(el);
                    return el;
                }).filter(el => !matches('br', el))
            };

            const hstr = htmlify(conform);
            this.content = hstr;
            this.saveSelection();
        },
        updateEditor(hstr) {
            const el = this.$el;
            el.innerHTML = hstr;
            this.restoreSelection();
        },
        saveSelection() {
            const sel = window.getSelection();
            const r = sel.getRangeAt(0);
            const pre = r.cloneRange();
            pre.selectNodeContents(this.$el);
            pre.setEnd(r.startContainer, r.startOffset);
            const start = pre.toString().length;
            this.selinfo = {
                start: start,
                end: start + r.toString().length
            };
        },
        restoreSelection() {
            let charidx = 0;
            let range = document.createRange();
            range.setStart(this.$el, 0);
            range.collapse(true);
            let nodeStack = [this.$el];
            let node;
            let foundStart = false;
            let stop = false;

            while(!stop && (node = nodeStack.pop())) {
                if (node.nodeType == 3) {
                    let nextCharIdx = charidx + node.length;

                    if (!foundStart && this.selinfo.start >= charidx && this.selinfo.start <= nextCharIdx) {
                        range.setStart(node, this.selinfo.start - charidx);
                        foundStart = true;
                    }

                    if (foundStart && this.selinfo.end >= charidx && this.selinfo.end <= nextCharIdx) {
                        range.setEnd(node, this.selinfo.end - charidx);
                        stop = true;
                    }
                    charidx = nextCharIdx;
                } else {
                    let i = node.childNodes.length;

                    while(i--) {
                        nodeStack.push(node.childNodes[i]);
                    }
                }
            }

            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
