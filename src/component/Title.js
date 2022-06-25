import { connect } from 'react-redux'

function Title(props) {
	return (
		<div className="card-title">
			<div className="card-title-top">
				<input type="text" onChange={props.onInput}/>
			</div>
			<p>{props.text}</p>
		</div>
	)
}

function mapStateToProps(state) {
	console.log('mapStateToProps', state)
	return {
		text: state.input.text,
	}
}

function mapDispatchToProps(dispatch, text) {
	return {
		onInput: (event) => {
			console.log('Text entered')
			const action = { type: 'INPUT', text: event.target.value }
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)