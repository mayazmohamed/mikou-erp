import { MDXEditor } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

function MarkDownEditor(): JSX.Element {
  return (
    <div
      onChange={console.log}
      // contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5   caret-yellow-500"
    />
  )
}

export default MarkDownEditor
