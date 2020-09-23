import React, {Component} from 'react';
import '../Header/Header.css'
import Navbar from '../Navbar/Navbar';
import LogoBar from './LogoBar';
import RightNav from './RightNav';
import SearchBar from './SearchBar';

class Header extends Component {
render(){
    return(
<header>
    <section>
    <LogoBar />
    <SearchBar />
    <RightNav />
    </section>
<Navbar />

</header>

    )
}
}



export default Header