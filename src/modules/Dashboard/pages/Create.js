import React, { useState } from 'react'
import ReactQuill from 'react-quill' // ES6

const Create = () => {
  const [text, handleChange] = useState('')

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image'
  ]

  return (
    <div>
      <p>Create Page</p>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleChange}
      />
    </div>
  )
}

export default Create
