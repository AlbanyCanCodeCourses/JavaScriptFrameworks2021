import { connect } from "react-redux";
import DiceRoller from "./DiceRoller";
import { rollDice } from "../../actions";

function mapStateToProps(state) {
  return {
    diceNumber: state.diceNumber
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rollDice: () => dispatch(rollDice())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiceRoller);
