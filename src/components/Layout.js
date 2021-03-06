import { connect } from "react-redux";
import {
} from "../redux/actions"

const Layout = (
    <div>
        Hello
    </div>
)

const mapStateToProps = state => ({
    // state
})

export default connect(
    mapStateToProps,
    {
        // actions
    }
)(Layout);
