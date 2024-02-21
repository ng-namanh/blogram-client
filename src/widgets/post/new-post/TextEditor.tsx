import '@mdxeditor/editor/style.css';

import {
  MDXEditor,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  linkPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  CodeToggle,
  CreateLink,
  BlockTypeSelect,
  InsertImage,
  ListsToggle,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const allPlugins = (diffMarkdown: string) => [
  toolbarPlugin({
    toolbarContents: () => (
      <div className="flex hover:cursor-pointer">
        <DiffSourceToggleWrapper options={['rich-text', 'source']}>
          <BoldItalicUnderlineToggles />
          <ListsToggle />
          <BlockTypeSelect />
          <CodeToggle />
          <CreateLink />
          <InsertImage />
        </DiffSourceToggleWrapper>
      </div>
    ),
  }),
  headingsPlugin(),
  listsPlugin(),
  linkPlugin(),
  quotePlugin(),
  markdownShortcutPlugin(),
  diffSourcePlugin({ viewMode: 'source', diffMarkdown }),
];

function TextEditor({ onChange, value }: Props) {
  return (
    <MDXEditor
      className="p-3"
      onChange={(markdown) => {
        onChange(markdown);
      }}
      markdown={value}
      plugins={allPlugins(value)}
    />
  );
}

export default TextEditor;

// type Props = {
//   onChange: (value: string) => void;
//   value: string;
// };

// function TextEditor({ onChange, value }: Props) {
//   return (
//     <>
//       <MDEditor
//         className="editor-height"
//         value={value}
//         onChange={(val) => {
//           onChange(val!);
//         }}
//         commands={[
//           commands.bold,
//           commands.italic,
//           commands.link,
//           commands.orderedListCommand,
//           commands.unorderedListCommand,
//           commands.quote,
//           commands.code,
//           commands.image,
//           commands.checkedListCommand,
//           commands.title,
//         ]}
//         extraCommands={[codeEdit, codePreview]}
//       />
//     </>
//   );
// }
// export default TextEditor;
