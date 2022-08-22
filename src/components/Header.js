const Header = (props) => { 
    return (<header>
        <img
          className="header__img"
          src={props.logoHeader}
          alt="imagen logo"
          title="logo"
        />
      </header>);
}
export default Header; 

