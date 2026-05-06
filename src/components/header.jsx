import { Link } from "react-router-dom";

function header() {
  
return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          Movie Reviews
        </Link>
      </div>
    </nav>
  );


}

export default header
