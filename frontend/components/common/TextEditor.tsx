import { EditorState } from "draft-js";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface Props {
  editorState: EditorState;
  onEditorStateChange: (newEditorState: EditorState) => void;
}

const TextEditor: React.FC<Props> = ({ editorState, onEditorStateChange }) => {
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        options: ["inline", "blockType", "list", "history"],
        inline: {
          options: ["bold", "italic", "underline"],
        },
      }}
      toolbarStyle={{ borderRadius: "0.375rem" }}
      editorStyle={{ minHeight: "200px" }}
    />
  );
};

export default TextEditor;
