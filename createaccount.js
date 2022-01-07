function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  //Validate function
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

//Validate Account Details
  function handleCreate() {
    console.log(firstname, lastname, email, password);
    if (!validate(firstname, "firstname")) return;
    if (!validate(lastname, "lastname")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ firstname, lastname, email, password, balance: 500 });
    setShow(false);
  }

//Clear & Reset Form After Account Creation
  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }
  
//Style With Bootstrap Card
  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            First Name
            <br />
            <input
              type="input"
              className="form-control"
              id="firstname"
              placeholder="Enter First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
            <br />
            Last Name
            <br />
            <input
              type="input"
              className="form-control"
              id="lastname"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.currentTarget.value)}
            />
            <br />
            Email Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-warning"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (

          //Validate Name, Email Address, Password Successfully Created
          <>      
            <h5>Success! Account Created.</h5><br/>
            <button type="submit" className="btn btn-warning" onClick={clearForm}>Add Another Account</button>
          </>
        )
      }
    />
  );
}
