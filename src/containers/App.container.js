import React, { Component} from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as TodoActions from '../actions/todos';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header addTodo={actions.addTodo}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
