import Profile from './Profile'
import { MediumExample } from './MediumExample'

const Home = () => {
  return (
    <div>
      <main>
        <MediumExample />
        <Profile
          profile={{
            firstName: 'Sun',
            middleName: 'Stephen',
            lastName: 'Oo',
            password: 'c081597',
            role: 'Customer',
          }}
        />
        <Profile
          profile={{
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            password: '496731',
            role: 'Banker',
          }}
        ></Profile>
      </main>
    </div>
  )
}

export default Home
