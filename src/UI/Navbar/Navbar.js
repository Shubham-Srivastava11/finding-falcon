import './Navbar.css';

const Navbar = () => {

    const resetHandler = () => {

    }

    const homeHandler = () => {

    }

    return (
        <nav className='navbar'>
            <label>Finding Falcon!</label>
            <div className='navigation'>
                <a onClick={resetHandler}>Reset</a>
                <a>|</a>
                <a onClick={homeHandler}>Geek Trust Home</a>
            </div>
        </nav>
    )
}

export default Navbar;