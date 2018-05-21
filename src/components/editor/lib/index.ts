import { schema } from "prosemirror-schema-basic";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

export default function create(element: HTMLElement): EditorView {
  const state = EditorState.create({ schema });
  const view = new EditorView(element, { state });
  return view;
}
