import React from 'react';


// TODO seperate qty and size into seperate comonents


export default class BasketForm extends React.Component {
	render () {
		return (
			<form role="form" className="mod-bordered" noValidate>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="sku">Size</label>
                        <select id="sku" name="sku" className="form-control">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" value="1" min="1" max="10" name="quantity" id="quantity" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn--md btn--block">Buy Now</button>
            </form>
		)
	}
}