import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, FontColor, FontSize, FontFamily, Underline, Link, List, Heading } from 'ckeditor5';
import FieldLabel from "./FieldLabel"

function TextEditor(_props) {
     const { containerClass, label, value, updateValue, error, errorMessage, required } = _props
     const handleChange = (event, editor) => {
          const data = editor.getData();
          updateValue(data);
          console.log("Current editor data:", data);
     };
     return (

          <div className={containerClass ? containerClass : ""}>
               <FieldLabel label={label} required={required} />
               <CKEditor
                    editor={ClassicEditor} onChange={handleChange}
                    config={{
                         toolbar: {
                              items: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'underline', 'fontSize', 'fontFamily', 'fontColor', '|', 'link', "bulletedList", "numberedList"],
                         },
                         plugins: [
                              Bold, Essentials, Italic, Mention, Paragraph, Undo, FontColor, FontSize, FontFamily, Underline, Link, List, Heading
                         ],
                         licenseKey: 'OZx59APYdd6vcs6aFQgn74Z5UQ6a5RjFZLeypIe0EDOhfUHTia7ckDGODuNu',
                         initialData: value,
                    }}
               />
               {error && <div className="text-xs font-semibold text-red-500 mt-1">{errorMessage}</div>}
          </div>

     )
}

export default TextEditor
