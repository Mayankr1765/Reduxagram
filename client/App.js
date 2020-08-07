import {bindActionCreators} from  'react';
import {connect} from 'react-redux';
import * as actionCreators from './actions/actioncreators';
import Main from './Main';

function mapStateToProps()
{
    return{
        posts:state.posts,
        comments:state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);

    
}

const App = connect(mapStateToProps,mapDispatchToProps)(main);

export default App;

