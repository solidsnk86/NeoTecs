import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from '@uiw/react-monacoeditor';

const code = `import React, { PureComponent } from 'react';
import MonacoEditor from '@uiw/react-monacoeditor';

export default class App extends PureComponent {
  render() {
    return (
      <MonacoEditor
        language="html"
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          cursorStyle: 'line',
          automaticLayout: false,
          theme: 'vs-dark',
        }}
      />
    );
  }
}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    };
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor, monaco);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
      theme: 'vs-dark',
      scrollbar: {
        // Subtle shadows to the left & top. Defaults to true.
        useShadows: false,
        // Render vertical arrows. Defaults to false.
        verticalHasArrows: true,
        // Render horizontal arrows. Defaults to false.
        horizontalHasArrows: true,
        // Render vertical scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        vertical: 'visible',
        // Render horizontal scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        horizontal: 'visible',
        verticalScrollbarSize: 17,
        horizontalScrollbarSize: 17,
        arrowSize: 30,
      },
    };
    return (
      <MonacoEditor
        height="500px"
        language="javascript"
        editorDidMount={this.editorDidMount.bind(this)}
        onChange={this.onChange.bind(this)}
        value={code}
        options={options}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
