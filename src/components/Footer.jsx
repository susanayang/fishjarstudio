export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-page-links">
        <div className="footer-page-link">
          <h3 className="footer-page-link-title">Contact Us</h3>
          <p className="footer-page-link-subtitle">yujie452106@gmail.com</p>
        </div>
        <div className="footer-page-link">
          <h3 className="footer-page-link-title">Follow Us</h3>
          <div className="footer-page-link-social">
            <img src="/xhs_logo.png" alt="" className="footer-page-link-logo" />
            <p className="footer-page-link-subtitle">@天都的女儿</p>
          </div>
        </div>
      </div>
      <img
        src="/footer_banner.png"
        alt="Fishjar Studio footer banner"
        className="footer-banner-image"
      />
    </footer>
  );
}
