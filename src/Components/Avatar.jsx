import StyleAvatar from './sass/Avatar.module.sass'

export const Avatar = ({avatar_url}) => {
 
  return (
    <img className={StyleAvatar.avatar} src={avatar_url} alt="Avatar" />
  )
}
