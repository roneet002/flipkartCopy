import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'


class RightNav extends Component{
render(){

    return(
<section className="rightNav">
<ul>
<li><a href="#">Login</a></li>
<li><span>More <FontAwesomeIcon icon={faChevronDown} /></span></li>
<li><span> <FontAwesomeIcon icon={faCartPlus} /> Cart</span></li>
</ul>
</section>
        
    )

}

}


export default RightNav