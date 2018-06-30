import React from 'react'
import PropTypes from "prop-types";


const AddCard = (props) => {
    return (
      <div className="add-card">
        <input onChange={props.setNewCardTitle} value={props.newCardTitle} type="text"/>
        <button onClick={() => props.addCard("card title", "sdfbhnefbs", props.listNumber)}>Add card</button>
        <button onClick={props.toggleAddingCardForm}>Cencel</button>
      </div>
    )
};


AddCard.propTypes = {
  setNewCardTitle: PropTypes.func.isRequired,
  newCardTitle: PropTypes.string,
  addCard: PropTypes.func.isRequired,
  listNumber: PropTypes.number.isRequired,
  toggleAddingCardForm: PropTypes.func.isRequired
}

export default AddCard;