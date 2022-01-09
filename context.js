const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
  const [show, setShow]          = React.useState(true);
  const [status, setStatus]      = React.useState('');
  const [name, setName]          = React.useState('');
  const [email, setEmail]        = React.useState('');
  const [password, setPassword]  = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 10000);
        alert(`Enter field: ${label}`);
        return false;
    }

    return true;
  }

    function validateForm() {
        return password.length > 8 && name.length > 0 && email.length > 0;
    }
    
    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name,     'name'))     return;
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance: 100});
        setShow(false);
    }
    
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3' + bg + txt;
    }



    
    return (
        <div className={classes()} style={{maxWidth: "40rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h4 className="card-title">{props.title}</h4>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
               

        </div>
        </div>
    );
}
