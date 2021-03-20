import '../main.css'
import {
  onClick
} from "../redux/actions"
import {connect} from "react-redux";

const App = ({clickedOn, onClick}) => (
  <div className="App">
    Hello. {clickedOn}
    <p/>
    <button onClick={onClick}>Click</button>
  </div>
)

const mapStateToProps = state => ({
  clickedOn: state.clickedOn
})

export default connect(
  mapStateToProps,
  {
    onClick
    // actions
  }
)(App);