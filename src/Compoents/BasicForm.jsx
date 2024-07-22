// basic login form are create and stored value 
import { useState } from 'react';
import "./Login.css";

const BasicForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newEntry, setNewEntry] = useState([]); // store the value  with this hooks

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      const newEntryAll = { id: new Date().getTime().toString(), username: username, password: password };
      setNewEntry([...newEntry, newEntryAll]);
      // Reset username and password after submission if needed
      setUsername('');
      setPassword('');
    } else {
      alert("Please fill both fields");
    }
  };
    
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login to Your Account</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
    
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

      <div>
        {newEntry.map((curElement) => {
          const { id, username, password } = curElement;
          return (
            <div className='show' key={id}>
              <p>Email: {username}</p>
              <p>Password: {password}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default BasicForm;

// map are using tu show the output of the form