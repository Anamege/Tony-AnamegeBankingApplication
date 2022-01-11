function NavBar() {
    return (
      <>

      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    
      <a className="navbar-brand" href="#"><span className="mb-0 h3"><b>Front End Bank</b></span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                  <a className="nav-link" href="#/CreateAccount/"><b>Create Account</b></a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#/login/"><b>Login</b></a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#/deposit/"><b>Deposit</b></a>
                  </li>  
  
                   <li className="nav-item">
                  <a className="nav-link" href="#/withdraw/"><b>Withdraw</b></a>
                  </li>                

                  <li className="nav-item">
                  <a className="nav-link" href="#/AllData/"><b>All Data</b></a>
                  </li>
          </ul>  
  
        
          
      </div>   
    
  </nav>
          
      </>
    );
  }
  
