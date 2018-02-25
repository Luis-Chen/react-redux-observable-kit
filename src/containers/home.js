import { connect } from 'react-redux'
import { fetchData } from '../store/people/action'

import Home from '../components/home'

function mapStateToProps(state) {
	return {
		appData: state.appData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
