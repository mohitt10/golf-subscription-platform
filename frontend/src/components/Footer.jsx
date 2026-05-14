const Footer = () => (
  <footer className="w-full">
    <div className="max-w-container flex flex-col md:flex-row justify-between items-start" style={{ paddingBottom: '64px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div className="display-md text-secondary" style={{ marginBottom: '24px' }}>Modern Fairway</div>
        <p className="body-md text-on-primary" style={{ opacity: 0.6, maxWidth: '280px' }}>
          Redefining the relationship between golf, luxury, and social responsibility.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
        <div>
          <h5 className="label-md text-secondary-fixed" style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Platform</h5>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '16px' }}><a href="#" className="body-md text-on-primary" style={{ opacity: 0.8, textDecoration: 'none' }}>Impact Report</a></li>
            <li><a href="#" className="body-md text-on-primary" style={{ opacity: 0.8, textDecoration: 'none' }}>Charity Partners</a></li>
          </ul>
        </div>
        <div>
          <h5 className="label-md text-secondary-fixed" style={{ marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Legal</h5>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '16px' }}><a href="#" className="body-md text-on-primary" style={{ opacity: 0.8, textDecoration: 'none' }}>Terms of Play</a></li>
            <li><a href="#" className="body-md text-on-primary" style={{ opacity: 0.8, textDecoration: 'none' }}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <p className="label-md" style={{ opacity: 0.4 }}>© 2024 Modern Fairway. Swing for Change.</p>
        <div className="social-links">
          <a href="#"><span className="material-symbols-outlined">public</span></a>
          <a href="#"><span className="material-symbols-outlined">mail</span></a>
          <a href="#"><span className="material-symbols-outlined">share</span></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;