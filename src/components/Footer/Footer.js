import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>Developed by TripleTen student Sheena Irvin</div>
      <div>{currentYear}</div>
    </footer>
  );
};

export default Footer;
