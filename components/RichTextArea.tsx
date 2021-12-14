import { FC, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ResizeModule from "@botom/quill-resize-module";
Quill.register("modules/resize", ResizeModule);

const RichTextArea: FC<any> = ({}) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ direction: "rtl" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    resize: {
      showSize: true,
      toolbar: {
        // alingTools: false,
      },
      locale: {},
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  document
    .getElementsByClassName("ql-editor")
    .item(
      0
    ).innerHTML = `<p>hola bbs</p> <br>  <iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/xyz?showinfo=0" width="677" height="392" style="float: right;"></iframe>`;

  return (
    <>
      <div>
        <div>
          <ReactQuill
            modules={modules}
            theme="snow"
            readOnly={false}
            // onChange={setText}
            // value={value}
          />
        </div>
      </div>
    </>
  );
};

export default RichTextArea;
