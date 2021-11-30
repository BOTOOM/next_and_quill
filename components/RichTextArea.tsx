import { FC, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
// import ReactQuill from '../../ReactQuill/ReactQuill'
// import Quill from 'quill';
import ReactQuill, { Quill } from 'react-quill'
// import dynamic from 'next/dynamic'
// import { ImageResize } from 'quill-image-resize-module-ts'
import ResizeModule from "@ssumo/quill-resize-module";

// Quill.register('modules/imageResize', ImageResize)
Quill.register("modules/resize", ResizeModule);

const RichTextArea: FC<any> = ({
	// value,
	// onChange,
}) => {
	const [showRichText, setShowRichText] = useState(true)
	const modules = {
		toolbar: [
			[{ header: '1' }, { header: '2' }, { font: [] }],
			[{ size: ['small', false, 'large', 'huge'] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ 'align': [] }],
			[{ direction: 'rtl' }],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image','video'],
			['clean'],
		],
		// imageResize: {},
		// ImageResize : {},
		// imageResize: {
		// 	parchment: Quill.import('parchment'),
		// 	modules: ['Resize', 'DisplaySize', 'Toolbar'],
		// },
		// imageResize: {
		// 	displaySize: true,
		// 	modules: ['Resize', 'DisplaySize',],
		// },
		resize: {
			Size: true,
			locale: {
			  altTip: "Hold down the alt key to zoom",
			  floatLeft: "Left",
			  floatRight: "Right",
			  center: "Center",
			  restore: "Restore"
			}
		  },
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	}

	const formats = [
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'video',
		'align'
	]

	const [showSnackbar, setShowSnackbar] = useState(false)

	const setText = (value: any, delta: any, source: any, editor: any) => {
		let content = null
		if (editor.getLength() > 1 && editor.getLength() <= 20001) {
			content = value
			// onChange(content)
		} else if (editor.getLength() == 1) {
			// onChange('')
		} else if (editor.getLength() > 20001) {
			
		}
	}

	return (
		<>
			<div >
				<div >
					{showRichText && (
						<ReactQuill
							modules={modules}
							formats={formats}
							theme="snow"
							readOnly={false}
							// onChange={setText}
							// value={value}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default RichTextArea
