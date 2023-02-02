import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { help,change } from "../redux/mark/markSlice";
import { marked } from 'marked'


export default function Header() {
  const yardim =  `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Furkan Doğan](https://github.com/doganfurkan)*`;
  const dispatch = useDispatch();
  const old = useSelector(state => state.mark.old);
  const helping = useSelector(state => state.mark.helping);
  return (
    <div id="header">
      <h2>React Markdown Previewer</h2>
      <button onClick={() => {
        dispatch(help(yardim));
        helping ? dispatch(change(marked.parse(old))) : dispatch(change(marked.parse(yardim)))
      }}>?</button>
    </div>
  );
}
