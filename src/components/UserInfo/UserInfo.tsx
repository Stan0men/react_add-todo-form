interface UserInfoProps {
  user: {
    name: string;
    email: string;
  };
}
export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
