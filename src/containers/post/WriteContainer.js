import React, {Component} from 'react';
import WriteWrapper from 'components/Post/WriteWrapper';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import * as api from 'lib/api';

class WriteContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          text: '',
          boardId: this.props.boardId
       } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(value) {
        this.setState({ text: value })
      }

      SetPost(boardId, category, title, contents, tags)
      {
        console.log("boardId : " + boardId);
        console.log("category : " + category);
        console.log("title : " + title);
        console.log("contents : " + contents);
        console.log("tags : " + tags);
        api.setPost(boardId, category, title, contents, tags);
        
      }

      GetCategoryList()
      {
        return api.getCategoryList();
      }

    
      render() {
        return (
          <WriteWrapper SetPost={this.SetPost} CategoryList={this.GetCategoryList()} BoardId={this.state.boardId}>
            <ReactQuill theme="snow"
                      value={this.state.text}
                      modules={WriteContainer.modules}
                      formats={WriteContainer.formats}
                      onChange={this.handleChange} />
          </WriteWrapper>
        )
      }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
WriteContainer.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
    {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
WriteContainer.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default WriteContainer;