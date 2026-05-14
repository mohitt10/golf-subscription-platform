const Header = () => (
  <header className="flex items-center">
    <nav className="max-w-container w-full flex justify-between items-center">
      <div className="header-logo">Modern Fairway</div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="label-md nav-link active">Home</a>
        <a href="#" className="label-md nav-link">Charities</a>
        <a href="#" className="label-md nav-link">Lucky Draw</a>
      </div>
      <div className="flex items-center gap-4 header-actions">
        <button className="hidden md:block label-md login-btn">Login</button>
        <button className="btn-primary label-md">Join Now</button>
      </div>
    </nav>
  </header>
);

export default Header;