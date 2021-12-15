import React from 'react';
import '../../App.css';
import App from '../../App';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Page1.css';
 export default function Page2()
 {
    {
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
              <div className='Page3'>
                  <div className="titlestyle">
                  <h1>{res.Title2}</h1>
                </div>
                <div className="Imagestyle">
                  <img src='./images/leather.jpg' height="1000px" width="1349px" />
                </div>
                
                <div className='Para'>
                  <p1 >{res.Paragraph3}</p1>
                  <br/><br/>
                  <p1>{res.Paragraph2}</p1>
                </div>
              </div>
                 )}
                 <div className="Link">
            <Link
              class='social-icon-link facebook'
              
              target='_blank'
              aria-label='Facebook'
            > <a href='https://amazon.com/'>
              <i class='fab fa-amazon' ></i></a>
              </Link>
            </div>
            </div>
          )
 }
}