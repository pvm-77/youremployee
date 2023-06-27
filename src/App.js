import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const DetailCard = (props) => {
  console.log('USER', props.user)
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
function App() {
  const [userdata, setUserData] = useState([]);
  const [detail, setDetail] = useState([]);
  console.log('use detail is', detail)
  const [isCardCliked, setIsCardClicked] = useState(false);
  const [currentClickedUser,setCurrentClickedUser]=useState('')

  const fetchData = async (url) => {
    const usersData = await axios.get(url)
    return usersData;
  }
  const handleClick = (detail) => {
    console.log('user detail in handle click', detail.email)

    setIsCardClicked(true)
    setCurrentClickedUser(detail.email)
    setDetail(detail);

  }
  useEffect(() => {
    try {
      axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
        .then(r => {
          console.log(r.data.results)
          setUserData(r.data.results)
        }).catch(e => console.error(e))


    } catch (error) {
      // console.error('error is ', error);

    }
  }, [])
  return (
    <div className='wrapper'>
      <div className='detail'>
        <DetailCard user={detail} />

      </div>

      <div className='card-container'>

        {
          userdata.map((user) => (

            (<div onClick={() => handleClick(user)} key={user.email} className={`card ${((currentClickedUser===user.email)&&isCardCliked )? 'card-bg-secondary' : 'card-bg-primary'}`}>
              <div className=
              {`card-item card-gender ${((currentClickedUser===user.email)&&isCardCliked )? 'c' : ''}`}
              
              >
                <p style={{ marginRight: '2px' }}>{user.gender}</p>
                <p>{user.nat}</p>
              </div>
              <div className='card-item card-user-name'
              
              >
                <p>{user.name.title} {user.name.first} {user.name.last}</p>

              </div>
              <div className='card-item card-user-email'>
                <p>{user.email}</p>
              </div>

            </div>)

          ))
        }



      </div>

      

    </div>
  );
}

export default App;
