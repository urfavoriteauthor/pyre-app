import React from 'react'

class Cards extends React.Component{
    render(){
        return(
            <div>
                <div class="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
      
        <a className="nav-link active" href="#">Snapshot</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Looking for</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Previous Work</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
  <img src="..." class="card-img" alt="..."/>
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        )
    }
}

export default Cards; 