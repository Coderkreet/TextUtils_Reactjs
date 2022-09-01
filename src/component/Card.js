import React from 'react'
import PropTypes from 'prop-types'

export default function Card(props) {
    return(
      <>
<div className="row my-5">
      <h1>Developer:-</h1>
  <div className="col-sm-6 my-4">
    <div className="card" style = {{'width':'18rem' , backgroundColor: props.mode === 'dark'?'black':'white', color : props.mode === 'dark'?'white':'black'}}>
      <div className="card-body">
        {/* <img src="https://source.unsplash.com/400x400/code" name="card-img-top" alt="..."/> */}
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">I am Krunal Bende , Create this Text TextUtils Converter, All Can use this</p>
        {/* <a href="/" className="btn btn-primary">Go</a> */}
      </div>
    </div>
  </div>
</div>
</>
)
}
Card.propTypes = {
title : PropTypes.string,
};

Card.defaultProps = {
title2 : "Kreet",
title : "Story of kreet"

}
