import React from 'react'

const EmployeeDetailCard = (props) => {
    if (props.user.length === 0) {
        return <h2>click card to see detail</h2>
    }
    return (
        <div className='detail-card'>
            <div className='user-image'>
                <img src={props.user.picture.medium} alt='logo' />
            </div>
            <div className='user-detail-dat'>
                <div className='u-name'> {props.user.name.title} {props.user.name.first} {props.user.name.last} </div>
                <div className='address'>{props.user.location.street.number}
                    {' '} {props.user.location.street.name}{''}
                    {props.user.location.state}{' '}{props.user.location.country}{' '}{
                        props.user.location.postcode

                    }
                </div>
                <div className='' style={{ fontSize: '12px' }} >{props.user.location.timezone.offset}{' '}{props.user.location.timezone.description}</div>
                <div className='card-gender'>{props.user.gender}</div>
            </div>

        </div>
    )
}

export default EmployeeDetailCard