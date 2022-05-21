import React from 'react'
import { CodeBlock, dracula  } from "react-code-blocks";

const Codeblock = (data) => {
    const { code, language, showLineNumbers, startingLineNumber } = data
    return (

        <CodeBlock
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          startingLineNumber={startingLineNumber}
          theme={dracula}
          wrapLines
        />
      );
}

export default Codeblock