function Spa() {
    return (
            <HashRouter>         
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'Tony James',email:'tony@mit.edu',password:'Tony123%',balance:100}]}}>
                  <Route path="/" exact component={Home} />
                  <Route path="/CreateAccount/" component={CreateAccount} />
                  <Route path="/login/" component={Login} />
                  <Route path="/deposit/" component={Deposit} />
                  <Route path="/withdraw/" component={Withdraw} />
                  <Route path="/alldata/" component={AllData} />
                 

            </UserContext.Provider>
            </HashRouter>      
    );
  }
  
  ReactDOM.render(
  <Spa/>, 
  document.getElementById('root')
  )
  
