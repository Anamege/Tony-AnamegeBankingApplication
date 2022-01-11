function Deposit(){    
    const [show, setShow]               = React.useState(true);
    const [status, setStatus]           = React.useState('');
    const [name, setName]          = React.useState('');
    const [deposit, setDeposit]         = React.useState('');
    const ctx = React.useContext(UserContext);

    //Validate functions
    function validate(field, label){
        if (!field) {            
            setTimeout(() => setStatus(''), 10000);
            alert(`Invalid ${label} amount`);
            return false;
        }

        if (field === deposit) {
            if (Number(deposit) <= 0) {
                alert("Please enter a valid amount");
                return false;
    }
    

        }
return true;
    }

    function handleDeposit() {       
            if (!validate(name, 'name')) return;
            if (!validate(deposit, 'deposit')) return;
            if (Number(deposit) <= ctx.users[0].balance);
            if (name === ctx.users[0].name) { 
            console.log(name, `Deposit: ${deposit}`);           
            ctx.users.push({deposit});
            ctx.users[0].balance += Number(deposit);
            setShow(false);
        } else {
            alert(`Please enter valid Account Name`);
            
        }
    } 

    //Clear Form After Deposit Completed                
    function clearForm(){
        setDeposit('');
        setShow(true);

    }

//Style Deposit Card Using Bootstrap
       return (
        <Card
        bgcolor="success"
        header="Deposit"
        status={status}
        body={show ? (
            <>
        Current Balance<br/> {ctx.users[0].balance} <br/><br/> 
        Account Name<br/>
        <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>  

        Deposit Amount<br/>                  
        <input type="number" className="form-control" id="deposit"
        placeholder="Enter Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>

        <button type="submit" className="btn btn-danger" onClick={handleDeposit}>Submit Transaction.</button>
            </>

        ):(
    //Validate Successful Completion of Deposit / Add Another Transaction       
        <>
        <h5>Transaction Successful!</h5><br/>
        <button type="submit" className="btn btn-danger" onClick={clearForm}>Add Another Transaction</button>
        </>

    )}
    />
        )
            }
