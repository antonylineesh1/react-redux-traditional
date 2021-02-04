import Home from '../components/Home'
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../services/actions/actions";

const mapStateToProps = state => ({
    data: state
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: () => dispatch(removeFromCart()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);