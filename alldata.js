function AllData(){    
   const ctx = React.useContext(UserContext);
   const [currentUserIndex, setCurrentUserIndex] = React.useState(0); 
   let className = JSON.stringify(ctx.users[currentUserIndex].name);
   let balance = ctx.users[currentUserIndex].balance;

   return (
    <h5>All Data<br/>
    {JSON.stringify(ctx)}<br/>
    </h5>
    );
}
