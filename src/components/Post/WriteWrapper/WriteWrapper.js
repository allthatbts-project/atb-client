import React, { Component } from "react";
import styles from "./WriteWrapper.scss";
import classNames from "classnames/bind";
import { Button, Form, Col } from 'react-bootstrap';

const cx = classNames.bind(styles);

class WriteWrapper extends Component {
  constructor(props) {
    super(props);
    this.textTitleInput = React.createRef();
    this.textHashtagInput = React.createRef();
    this.selectCategoryInput = React.createRef();
    this.titleValue = '';
    this.hashtagValue = '';
    this.categoryValue = '';
    this.boardId = '';
  }

  handleTitleChange() {
    this.titleValue = this.textTitleInput.current.value;
  }

  handleCategoryChange() {
    this.categoryValue = this.selectCategoryInput.current.value;
  }

  handleHashtagChange() {
    this.hashtagValue = this.textHashtagInput.current.value;
  }

  detectHashtag() {
    var hashtags = this.textHashtagInput.current.value.trim().split(' ');
    var result = '';

    for(var i in hashtags) {
      hashtags[i] = hashtags[i].replace('#', '');
      result += "#" + hashtags[i] + ' ';
    }

    this.textHashtagInput.current.value = result.trim();
  }
  
  render() {
    const {children, SetPost, CategoryList, BoardId} = this.props;

    this.categoryValue = CategoryList[0].CategoryId;
    this.boardId = BoardId;
    
    let optionTemplate = CategoryList.map(v => (
      <option key={v.CategoryId} value={v.CategoryId}>{v.CategoryName}</option>
    ));

    return (
      <div className="WriteWrapper">
      <div className="WriteInfoArea">
      
        <Form>
          <Form.Group controlId="formBasicTitle">
          <Form.Row>
            <Col>
              <Form.Control ref={this.selectCategoryInput}
                            as="select"
                            onChange={() => this.handleCategoryChange()}>
                {optionTemplate}
              </Form.Control>
            </Col>
            <Col xs={10}>
              <Form.Control type="text"
                            placeholder="제목" 
                            ref={this.textTitleInput} 
                            onChange={() => this.handleTitleChange()}/>
            </Col>
          </Form.Row>
          </Form.Group>
        </Form>
      </div>
            {children}
      <p></p>
      <div className="WriteInfoArea">
        <Form>
          <Form.Group controlId="formHashTags">
            <Form.Control type="text"
                          placeholder="해시태그" 
                          ref={this.textHashtagInput} 
                          onChange={() => this.handleHashtagChange(this.textHashtagInput.current.value)}
                          onKeyPress={event => {
                            if (event.key == ' ') {
                              this.detectHashtag();
                            }
                          }}/>
          </Form.Group>
        </Form>
      </div>
      <div className="ButtonArea">
      <Button variant="primary" onClick={() => SetPost(this.boardId, this.categoryValue, this.titleValue, children.props.value, this.hashtagValue)} className="Write">작성</Button>
      </div>
    </div>
    );
  }
}

export default WriteWrapper;
