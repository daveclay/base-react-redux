import '../main.css'
import {
  onClick
} from "../redux/actions"
import {connect} from "react-redux";

const App = ({onClick}) => (
  <div className="App">
    Hello.
    <p/>
    <button onClick={onClick}>Click</button>
  </div>
)

const mapStateToProps = state => ({
  // state
})

export default connect(
  mapStateToProps,
  {
    onClick
    // actions
  }
)(App);