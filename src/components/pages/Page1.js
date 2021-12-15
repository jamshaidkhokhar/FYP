import React from 'react';
import '../../App.css';
import App from '../../App';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Page1.css';


export default function Page1() {

  const [user, setUser] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/Fyp2/php/view.php")
    setUser(result.data.phpresult)
    console.log(result.data.phpresult);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
       {user.map((res)=>
      <div className='Page1'>


        <div className="Imagestyle">
        <div className="titlestyle">
          <h1>{res.Title}</h1>
        </div>
          <img src='./images/adidas2.jpeg' height="500px" width="1200px" />
        </div>
       
        <div className='Para'>
          <p1>{res.Paragraph}</p1>
          <br/><br/>
          <p1>{res.Paragraph2}</p1>
        </div>
      </div>
         )}
          <div className="Link">
            {/* <Link
              class='social-icon-link facebook'
              
              target='_blank'
              aria-label='Facebook'
            > <a href='https://amazon.com/'>
              <i class='fab fa-amazon' ></i></a>
              </Link> */}

                <Link 
                target='_blank'
                class="btn btn-dark" >
                    <a href='https://www.amazon.com/adidas-Graphic-Duffel-Jersey-Yellow/dp/B087LP2K2Z/ref=sr_1_7?keywords=adidas%2Bduffle%2Bbag&qid=1639071416&sr=8-7&th=1&psc=1'>Check Price</a>
                </Link>
            </div>
            <div className="pros-cons-container">
    <div className="pros-container">
      <h2 className="heading">Pros</h2>
      <ul className="pros">
        <li>Amazing Performance</li>
        <li>Free For 1 Month</li>
        <li>Unlimited Storage Space</li>
        <li>Email Support</li>
        <li>Additional Add-ons</li>
      </ul>
    </div>
    <div className="cons-container">
      <h2 className="heading">Cons</h2>
      <ul className="cons">
        <li>No Phone Support</li>
        <li>Complicated UI</li>
        <li>No SSDs</li>
      </ul>
    </div>
  </div>


    </div>
  )
}