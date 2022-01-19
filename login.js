function Login(){    
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);


    function validate(field, label){
        if (!field) {
            setStatus('Error: Please enter valid ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
          }
          return true;
        }             

    function handleCreate(){
        console.log(email,password);
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        if(password.length < 8){
            alert("Must contain at least 8 characters including a special caharcter, one number and one uppercase and lowercase letter")
            return false
        }
        ctx.users.push({email,password,balance:100});
        setShow(false);
        }
            
    //Reset Inputfield
        function clearForm(){
        setEmail(' ');
        setPassword(' ');
        setShow(true);

    }
    
    return (
        <Card
        bgcolor="success"
        header="Login"
        status={status}
        body={show ? (
            <>      
            Email Address<br/>
            <input type="input" className="form-control" id="email"
            placeholder="Enter email here" value={email}onChange={e => setEmail(e.currentTarget.value)} /><br/>            

            Password<br/>                    
            <input type="password" className="form-control" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least 8 characters including a special caharcter, one number and one uppercase and lowercase letter" required
            placeholder="Enter valid password here" value={password}onChange={e => setPassword(e.currentTarget.value)} /> 

                            
           <br/>
            <button type="submit" className="btn btn-danger" onClick={handleCreate}>Login</button>
            </>

        ):(
        <>
        <h5>Success! Welcome Back.</h5>
        </>

)}
/>
    
);
}
