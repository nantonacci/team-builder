import React, {useState} from 'react';

function Form(){

    const [user, setUser] = useState({member: "", email: "", role: ""});


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


    // function handleSubmit(event){
    //     event.preventDefault();
    //     console.log("user state", user);
    // }

    return(
        <form>
            <fieldset>
                <legend>Add a team member</legend>
                <label> Name:
                    <input
                    type="text"
                    name="member"
                    placeholder="your name"
                    value={user.member}
                    onChange={handleChange}
                    />
                    
                </label>
                <label> Email:
                    <input
                    type="email"
                    name="email"
                    placeholder="your@email.here"
                    value={user.email}
                    onChange={handleChange}
                    />
                    
                </label>
                <label> Role:
                    <input
                    type="text"
                    name="role"
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