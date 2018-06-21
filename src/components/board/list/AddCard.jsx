import React, { Component } from 'react'
import PropTypes from "prop-types";


class AddCard extends Component {
  render() {
    return (
      <div className="add-card">
        <input onChange={this.props.setNewCardTitle} value={this.props.newCardTitle} type="text"/>
        <button onClick={() => this.props.addCard("card title", "sdfbhnefbs", this.props.listNumber)}>Add card</button>
        <button onClick={this.props.toggleAddingCardForm}>Cencel</button>
      </div>
    )
  }
}


AddCard.propTypes = {
  setNewCardTitle: PropTypes.func.isRequired,
  newCardTitle: PropTypes.string,
  addCard: PropTypes.func.isRequired,
  listNumber: PropTypes.number.isRequired,
  toggleAddingCardForm: PropTypes.func.isRequired
}

export default AddCard;