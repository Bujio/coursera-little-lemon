import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__children">
          <h2 className="name-footer">Doormat Navigation</h2>
          <a className="size-link" href="">
            Home
          </a>
          <a className="size-link" href="">
            About
          </a>
          <a className="size-link" href="">
            Menu
          </a>
          <a className="size-link" href="">
            Reservation
          </a>
          <a className="size-link" href="">
            Order Online
          </a>
          <a className="size-link" href="">
            Login
          </a>
        </div>
        <div className="footer__children">
          <h2 className="name-footer">Contact</h2>
          <a className="size-link" href="">
            Address
          </a>
          <a className="size-link" href="">
            Phone Number
          </a>
          <a className="size-link" href="">
            Email
          </a>
        </div>
        <div className="footer__children">
          <h2 className="name-footer">Social Media Links</h2>
          <div className=" flex-rrss">
            <img className="logo-rrss" src="/images/facebook.svg" alt="" />
            <img className="logo-rrss" src="/images/linkedin.svg" alt="" />
            <img className="logo-rrss" src="/images/twitter.svg" alt="" />
            <img className="logo-rrss" src="/images/instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
