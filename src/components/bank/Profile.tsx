// TypeScript/typescript-next/components/Profile.tsx
// import { ProfilePropsType } from './ProfileType';

type ProfilePropsType = {
  profile: {
    firstName: string;
    middleName?: string;
    lastName: string;
    password: number | string;
    role?: string;
  };
};

// interface ProfilePropsType {
//   profile: {
//     firstName: string,
//     middleName?: string,
//     lastName: string,
//     password: number | string,
//     role?: string
//   }
// }

// const Profile: React.FC<ProfilePropsType> = ({ profile }): JSX.Element => // lessons learned
// const Profile = ({ profile }: any) => { // by type inference
const Profile = ({ profile }: ProfilePropsType): JSX.Element => {
  // by type annotation
  return (
    <>
      <h3>My Profile CSS Grid Layout</h3>
      <div style={{ background: "snow", padding: "10px" }}>
        <p>Common Transactions Teller Platform</p>
        <span>First Name: {profile.firstName}</span>
        <br />
        <span>Middel Name: {profile.middleName}</span>
        <br />
        <span>Last Name: {profile.lastName}</span>
        <br />
        <span>Password: {profile.password}</span>
        <hr />
        <span>
          Role: <b>{profile.role}</b>
        </span>
      </div>
    </>
  );
};

export default Profile;
