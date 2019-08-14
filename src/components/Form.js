import React, {useState} from 'react';
import teamData from '../data.js';

const Form = props => {
    console.log(props);

    const [user, setUser] = useState({member: "", email: "", role: ""});


    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
       
    };


    const handleSubmit = event => {
        event.preventDefault();
        const newUser = {
            ...user,
            id: Date.now()
        }
        setUser({
            member: "", email: "", role: ""
        })
        props.addTeam(newUser);
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add a team member</legend>
                <label> Name:
                    <input
                    type="text"
                    name="member"
                    placeholder="your name"
                    value={user.member}
                    onChange={handleChange}
                    required
                    />
                    
                </label>
                <label> Email:
                    <input
                    type="email"
                    name="email"
                    placeholder="your@email.here"
                    value={user.email}
                    onChange={handleChange}
                    required
                    />
                    
                </label>
                <label> Role:
                    <input
                    type="text"
                    name="role"
                    placeholder="your role"
                    value={user.role}
                    onChange={handleChange}
                    required
                    />
                    
                </label>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}

export default Form;