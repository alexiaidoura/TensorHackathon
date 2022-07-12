import React from "react";

export function Login(){
    const [show, setShow]           =React.useState(true);
    const [status, setStatus]       =React.useState(''); 
    const [email, setEmail]        =React.useState('');
    const [password, setPassword]  =React.useState('');
 

    function validate(field, label){
        if (!field) {
            setStatus('Error:' + label); 
            setTimeout(() => setStatus(''),3000); 
            return false;
        }
        return true; 
    }
   
    function submit(){
        if (!validate(email,      'email'))   return; 
        if (!validate(password,   'emaild'))  return;
    }
    

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

 return (
    <div className="classes" style={{maxWidth: "18rem"}}>
    <div className="card-header"></div>
    <div className="card-body">
    body={
        <>
        Email address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={submit}>Login</button>
        </>
    }
    
    </div>
  </div> 
 )};

