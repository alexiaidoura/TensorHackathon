
function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState(''); //MOVED TO VALIDATE.JS
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);    

  /* function userExists(user) {
    //console.log(`userExists user is: ${user}`); //ok
    //console.log(`ctx.users is: ${ctx.users}`); //undefined
    return ctx.users.map(item => user.email === item.email); //works
  } */

  function validate(field, label){
    console.log(field + label);

    // if (!field) {
    //   setStatus('Error: ' + label); //works
    //   setTimeout(() => setStatus(''),3000);
    //   return false;
    // };
    /* if (userExists(field)) {
      setStatus('Error: user already exists'); //every attempt gets this error
      return false
    }; */
    if ((label=='password') && (field.length < 8)) {
      console.log(field.length);
      alert('Password must be more than 8 characters long');
      return false;
    }
    return true;
  } //MOVE TO SEPARATE FILE SO I DO NOT HAVE TO DUP EVERYWHERE

  function handleCreate(){
    //console.log("handleCreate " + name,email,password); //yes, displays
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    //console.log('context is ' + JSON.stringify(ctx)); //ok USE THIS FOR MY BUG VIDEO?
    setShow(false);
    //clearForm();
  }
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
 
  }

  return (
    <Card 
      bgcolor="light card title"
      header="Create Account"
      status={status}
      body={show ? (
        <>
          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name||!email||!password}>Create Account</button>

        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  );
}