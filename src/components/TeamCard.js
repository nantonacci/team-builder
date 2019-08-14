import React from 'react';

const TeamCard = props => {
    return(
        <div className="cardContainer">
            {props.teamList.map(team => {
                return (
                    <div className="card" key={team.id}>
                        <p><span className="guide">Name:</span> {team.member}</p>
                        <p><span className="guide">Email:</span> {team.email}</p>
                        <p><span className="guide">Role:</span> {team.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamCard;