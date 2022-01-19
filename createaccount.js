function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  //Validate function
  function validate(field, label) {
    if (!field) {
      setStatus('Error: Please enter valid ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  //Validate Account Details
  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    if(password.length < 8){
      alert("Must contain at least 8 characters including a special caharcter, one number and one uppercase and lowercase letter")
      return false}
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  //Clear & Reset Form After Account Creation
  function clearForm() {
    setName("");
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
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
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
           
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          //Validate Name, Email Address, Password Successfully Created
          <>
            <h5>Success! Account Created.</h5>
            <br />
            <button
              type="submit"
              className="btn btn-danger"
              onClick={clearForm}
            >
              Add Another Account
            </button>
          </>
        )
      }
    />
  );
}
