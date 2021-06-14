import React from 'react';
import './Header.css';
import PageviewIcon from '@material-ui/icons/Pageview';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {


    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">  
                <img className = "header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>
            <div
            className ="header_search">
                
            <input
            className="header_searchInput" type = "text"/>
            <PageviewIcon className="header_searchIcon"/>    
            </div>

            <div className="header_nav">
                    <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionlineone">Hello {user? user.email[0] : 'Guest'},
                    </span>

                    
                    <span className="header_optionlinetwo">{user ? 'Sign Out':'Sign In'}
                    </span>
                </div>
                </Link>
                <div className="header_option">
                <span className="header_optionlineone">Return
                    </span>

                    
                    <span className="header_optionlinetwo">& orders
                    </span>
                    
                </div>
                <div className="header_option">
                <span className="header_optionlineone">Your
                    </span>

                    
                    <span className="header_optionlinetwo">Prime
                    </span>
                    
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                <AddShoppingCartIcon />
                <span className="header_optionlinetwo header_basketCount ">{basket.length}</span>

                </div>
                </Link>
            
            </div>

        
        </div>
    )
}

export default Header
