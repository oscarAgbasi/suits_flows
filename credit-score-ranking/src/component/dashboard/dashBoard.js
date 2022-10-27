

function DashBoard({ Logout }) {
    return (
      <div className="container">
        <div className="form-input">
          <p>
            Welcome, <span>Page</span>
          </p>
        </div>
        <button onClick={Logout}>Logout</button>
      </div>
    );
  }
  
  export default DashBoard;