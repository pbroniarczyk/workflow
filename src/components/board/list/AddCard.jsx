import React, { Component } from 'react'


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

export default AddCard;