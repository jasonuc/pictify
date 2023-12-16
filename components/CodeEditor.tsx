'use client'
import { Resizable, Size } from 're-resizable'
import AceEditor from 'react-ace'

// languages
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"

// themes
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-twilight"

const defaultSize: Size = {
    height: 550,
    width: 510
}

export default function CodeEditor() {
  return (
    <Resizable 
    minHeight={550}
    minWidth={510}
    maxWidth={1000}
    defaultSize={defaultSize}
    className='border'>
        <div className=''>
            <AceEditor
            value="// function () { return 'HelloWorld' }"
            name='code-editor'
            fontSize={16}
            wrapEnabled={true}
            showPrintMargin={false}
            highlightActiveLine={false}
            showGutter={false}
            editorProps={{ $blockScrolling: true }}
            theme={'monokai'}
            mode={"javascript"}
            className='!w-full'
            />
        </div>
    </Resizable>
  )
}