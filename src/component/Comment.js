import { connect } from 'react-redux'
import styled from "styled-components"

const CommentElement = styled.div`
    width: 348px;

    display: grid;
    grid-template-columns: 48px 300px;

    border-bottom: solid 1px #e4e4e4;

    padding-bottom: 4px;
    margin-bottom: 4px;
`

const DeleteCommentButton = styled.button`
    height: 32px;
    width: 32px;
    max-width: 32px;

    display: inline-flex;
    align-items: center; 

    justify-self: center;

    font-size: 22px;

    border: none;
    background: none;

    padding: 0;
    margin: 0;

    &:hover {
        cursor: pointer;
        color: #fb6767;
    }
`

const CommentInput = styled.input`
    border: none;
`

function Comment(props) {
    return (
        <CommentElement>
            <DeleteCommentButton onClick={props.deleteComment}>×</DeleteCommentButton>
            <CommentInput defaultValue={props.text} onChange={props.updateComment}></CommentInput>
        </CommentElement>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteComment: (e) => {
        console.log('! Comment deleted')
        const action = { type: 'DELETE COMMENT', uuid: ownProps.uuid }
		dispatch(action)
    },
    updateComment: (e) => {
        console.log('! Comment updated')
        const action = { type: 'UPDATE COMMENT', uuid: ownProps.uuid, text: e.target.value }
        dispatch(action)
    }
})


export default connect(null, mapDispatchToProps)(Comment)