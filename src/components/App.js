import '../main.css'
import Actions from "../redux/actions"
import {connect} from "react-redux";

const App = ({clickedOn, onClick}) => (
  <div className="App">
    Hello. {clickedOn}
    <p/>
    <button name="Mr. Clicky" onClick={e => onClick(e)}>Click</button>
  </div>
)

const mapStateToProps = state => ({
  clickedOn: state.clickedOn
})

export default connect(
  mapStateToProps,
  {
    onClick: Actions.onClick
    // actions
  }
)(App);