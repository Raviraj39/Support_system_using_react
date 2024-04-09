import React , {useState} from 'react'
import Login from './Login';

const Register = () => {
	const [name,setName] =useState();
	const [date,setDate]=useState();
	const [email,setEmail]=useState();
	const [password,setPassword]=useState();
  const [isRegister, setRegister] = useState(false);


	const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password,date,email }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access); // Store access token
        localStorage.setItem('refreshToken', data.refresh); // Store refresh token
        setRegister(true);
        
        
      } else {
        // Handle unsuccessful Register
        console.error('Register failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
	<div>
		<div className='auth-inner mt-5' >
		{/* <Nav/> */}
        {isRegister ? (<Login/>):(
		<form className='mt-5' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
						onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Date Of Birth</label>
                    <input type='date' className="form-control"
					 onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
						onChange={(e)=>setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
						onChange={(e)=>setPassword(e.target.value)}

                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
        </form>
        )
}
    </div>
	</div>
	
  )
}

export default Register