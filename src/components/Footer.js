import '../styles/Footer.scss';

const Footer = (props) => { 
    return (<footer className="footer">
    <p className="footer-title">Awesome profile-cards &#169;2022</p>
    <img
      src={props.logoFooter}
      alt="logo Adalab"
      title="logo Adalab"
      className="adalab-img"
    />
  </footer>);
}
export default Footer; 

