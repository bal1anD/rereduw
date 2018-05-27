import React, {Component} from 'react'
import Button from './Button';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to React App</h1>
                <Button type="button" displayText={this.props.btnText} changeDisplay={this.props.actions.changeBtnDisplay}/>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => state

const mapDispatchToActions = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(App)
