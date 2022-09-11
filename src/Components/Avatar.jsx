import './sass/Avatar.sass'
export const Avatar = ({avatar_url}) => {
  return (
    <img className="avatar" src={avatar_url} alt="Avatar" />
  )
}
