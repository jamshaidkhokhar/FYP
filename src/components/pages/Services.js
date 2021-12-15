import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';



export default function Services() {
  return (
    <div className="container">
  <div className="row">
    <div className="col">
    <div class="card" >
  <img src='images/adidas2.jpeg' class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">fff</a> */}
    <Link to="./Page1"
    class="btn btn-primary" >Button</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src='images/leather2.jpg' class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <Link to="./Page2"
    class="btn btn-primary" >Button</Link>
  </div>
</div>
    </div>
    
    <div className="col">
    <div class="card" >
  <img src='images/index.jpg' class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <Link to="./Page3"
    class="btn btn-primary" >Button</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" >
  <img src='images/yellow.jpg' class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <Link to="./Page4"
    class="btn btn-primary" >Button</Link>
  </div>
</div>
    </div>

  </div>
</div>
  );
}
