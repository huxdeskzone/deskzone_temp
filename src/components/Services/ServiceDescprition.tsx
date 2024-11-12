import { useEffect, useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import UseOptions from "../../hooks/useOptions";
import draftToHtml from "draftjs-to-html";
import "./Description.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ServiceDescription: React.FC<{
  onChangeDescription: (description: string, plainDescription: string) => void;
}> = ({ onChangeDescription }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [descLen, setDescLen] = useState(0);
  const { toolbar, hashtag, mention } = UseOptions();

  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const getPlainText = () => {
      const contentState = editorState.getCurrentContent();
      const plainText = contentState.getPlainText(); // Get pure text
      setDescLen(plainText.trim().length);

      if (contentRef.current && contentRef.current.value) {
        onChangeDescription(contentRef?.current?.value, plainText.trim());
      }
    };

    getPlainText();
  }, [editorState]);

  return (
    <div>
      <textarea
        className="hidden"
        disabled
        ref={contentRef}
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={toolbar}
        mention={mention}
        hashtag={hashtag}
      />

      <div className="flex justify-end -mt-5 mr-2">
        <span className=" text-fuchsia-200 text-sm">{descLen}/600</span>
      </div>
    </div>
  );
};

export default ServiceDescription;
