import { React, useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Comment from './Comment'

import generateUUID from '../additional/generateUUID.js'

const CommentBlockDiv = styled.div`
    width: 100%;
    height: calc(50vh - 0px);
    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow-y: auto;
`

const NewCommentInput = styled.textarea`
    width: 100%;
    height: 128px;
    min-height: 64px;
    min-width: 256px;
    resize: none;

    border: solid 1px #a4a4a4;

    padding: 4px;
    margin-top: 12px;
`

function CommentBlock(props) {
    console.log('> render >', props)
    // const [comments, setComments] = useState(['TEST'])
    const commentInputRef = useRef()
    const commentBlockRef = useRef()

    useEffect(() => {
        commentBlockRef.current.scrollTop = commentBlockRef.current.scrollHeight
        commentInputRef.current.value = null
    })

    return (
        <CommentBlockDiv>
            <CommentBlockDiv ref={commentBlockRef}>
                {props.comments?.map((comment) => <Comment key={comment.uuid} uuid={comment.uuid} text={comment.text}/>)}
            </CommentBlockDiv>
            <NewCommentInput ref={commentInputRef} onKeyDown={props.addComment} placeholder="Enter you comment..."/>
        </CommentBlockDiv>
    )
}

function mapStateToProps(state) {
	console.log('> mapStateToProps', state)
	return {
		comments: state.comment.comments,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addComment: (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
			    console.log('! Comment created')
			    const action = { type: 'ADD COMMENT', newComment: e.target.value, newCommentUUID: generateUUID()}
			    dispatch(action)
            }
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock)