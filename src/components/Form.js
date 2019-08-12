import React, {useState} from 'react';

function Form(){

    const [user, setUser] = useState({name: "", email: "", role: ""});

    function handleChange(event){
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedUser
        );
        setUser(updatedUser);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("user state", user);
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Team Member Details</legend>
                <label for="name"> Name:
                    <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    value={user.username}
                    onChange={handleChange}
                    />
                    
                </label>
                <label for="email"> Email:
                    <input
                    type="email"
                    placeholder="your@email.here"
                    value={user.email}
                    onChange={handleChange}
                    />
                    
                </label>
                <label for="role"> Role:
                    <input
                    type="text"
                    placeholder="your role"
                    value={user.role}
                    onChange={handleChange}
                    />
                    
                </label>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    )
}

export default Form;