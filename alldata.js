function AllData(){    
   const ctx = React.useContext(UserContext);
   const user = ctx.users

   return (
           <Card
           bgcolor="success"    
           header="All Data"
           body={
           <table className="table table-hover">
               <thead> 
                       <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Balance</th>
                        </tr>
                </thead>
                <tbody>
                    {user.map((value,index) => {
                        return (
                        <tr key={index+1}>
                        <th scope="row">{index+1}</th>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td>{value.balance}</td>
                      </tr>)
                    })}
                </tbody>
              </table>
              }
              />
              );
            }
