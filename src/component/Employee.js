import React, { useState } from 'react'

const Employee = ({ employee ,setEmployeeDetails}) => {
    const [currentClikedEmployeeCard, setCurrentClickedEmployeeCard] = useState('')
    const [isCardCliked, setIsCardClicked] = useState(false);

    const handleClick = (detail) => {
        console.log('user detail in handle click', detail.email)

        setIsCardClicked(true)
        setCurrentClickedEmployeeCard(detail.email)
        // setDetail(detail);

    }

    return (
        <div onClick={() => handleClick(employee)} key={employee.email} className={`card ${((currentClikedEmployeeCard === employee.email) && isCardCliked) ? 'card-bg-secondary' : 'card-bg-primary'}`}>
            <div className={`card-item card-gender ${((currentClikedEmployeeCard === employee.email) && isCardCliked) ? 'c' : ''}`}>
                <p style={{ marginRight: '2px' }}>{employee.gender}</p>
                <p>{employee.nat}</p>
            </div>
            <div className='card-item card-user-name'>
                <p>{employee.name.title} {employee.name.first} {employee.name.last}</p>

            </div>
            <div className='card-item card-user-email'>
                <p>{employee.email}</p>
            </div>

        </div>
    )
}

export default Employee