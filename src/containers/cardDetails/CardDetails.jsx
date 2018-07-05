import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Assets
import "./cardDetails.scss";


class CardDetails extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="card-details">
				<h1 className="card-details__title">Card Title</h1>
				<h1>{this.props.match.params.id}</h1>
				<p className="card-details__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste omnis doloribus dolorem aut molestias aspernatur natus eligendi. Odio reiciendis non, quod veniam alias, veritatis dolor tempore tempora ab magnam eveniet.</p>

				<div className="card-details__action">
					<button>save</button>
					<Link to="/" >close</Link>
				</div>
			</div>
		)
	}
}

export default CardDetails;