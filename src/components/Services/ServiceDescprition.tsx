import { useEffect, useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import UseOptions from "../../hooks/useOptions";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./Description.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ServiceDescription: React.FC<{
  onChangeDescription: (description: string) => void;
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
      setDescLen(plainText.length);
    };

    getPlainText();
    if (contentRef.current && contentRef.current.value) {
      onChangeDescription(contentRef?.current?.value);
    }
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
      <span className="absolute left-3/4 -mt-6 -ml-14 text-fuchsia-200 text-sm">
        {descLen}/600
      </span>
    </div>
  );
};

export default ServiceDescription;
