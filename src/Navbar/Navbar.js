import React, { Component } from 'react'
import './Navbar.css'
class Navbar extends Component{
    render(){
return(


	<nav className="navbar">

	<ul className="navbarLft">

	<li className="megaMenu">
        <a href="#" className="dropDown">Bras</a>
	<ul className="subMenu">
        <li className="subMenuContent"> 
 			  <ul className="coslmenu">
                <li className="no-border"><p>Shop By Style</p></li>
	 			<li><a href="#">Full Cup</a></li>
                <li><a href="#">3/4th Demi cup</a></li>
                <li><a href="#">Half cup</a></li>
                <li><a href="#">Plunge neck</a></li>
                <li><a href="#">Balconette</a></li>
                <li><a href="#">Tube bra</a></li>
              </ul>
              <ul className="coslmenu listNone">
                <li className="no-border"> 
                  <p>Shop By Coverage</p>
             </li>
                <li><a href="#">T Shirt</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Push Up </a></li>
                <li><a href="#">Strapless/Multiway</a></li>
                <li><a href="#">Halter-neck</a></li>
                <li><a href="#">Large Size</a></li>
                <li><a href="#">Bralette</a></li>
              </ul>
              <ul className="coslmenu listNone">
                <li className="no-border"> 
                  <p>Shop By Fabric </p>
                  </li>
                <li><a href="#">Backless</a></li>
                <li><a href="#">Front Open</a></li>
                <li><a href="#">Minimisers</a></li>
                <li><a href="#">Invisible </a></li>
                <li><a href="#">Free Size</a></li>
                <li><a href="#">Seamless</a></li>
                <li><a href="#">Magic</a></li>
              </ul>
              <ul className="coslmenu listNone">
                <li className="no-border">
                  <p>Shop By Offers</p>
                   </li>
                <li><a href="#">Designer Bras</a></li>
                <li><a href="#">Lace Bras</a></li>
                <li><a href="#">All Bras</a></li>
                <li><a href="#">4 Bras For 499</a></li>
                <li><a href="#">Bestseller</a></li>
                <li><a href="#">Bra &amp; Brief Sets</a></li>
                <li><a href="#">Bridal</a></li>
              </ul>
            
              </li>
			<li className="rftImgSection">
					<a href="#" className="fullImg"><img className="imgResponsive" src="https://image.clovia.com/media/images/mainmenu-picture1-jliwt-1.jpg"/></a>
			</li>	
	</ul>
	
	
	</li>	
	<li className="megaMenu"><a href="#" className="dropDown">Panties</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Nightwear</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Clothing</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Bridal</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Gift Sets</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">4 Bras @ 699</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">5 panties @ 599</a></li>	
	<li className="megaMenu highLight"><a href="#" className="dropDown">3 panties @ 599</a></li>	
	<li className="megaMenu highLight"><a href="#" className="dropDown">2 Plush bras @ 999</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Shapewear</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Beach</a></li>	
	<li className="megaMenu"><a href="#" className="dropDown">Club Clovia</a></li>	
	<li className="rftLi"><span className="headSp SearchIcon"></span></li>
	<li className="rftLi"><span className="headSp CartIcon"></span></li>	
	</ul>	

		{/* <span className="clear"></span> */}
	</nav>
	




)

    }
}

export default Navbar