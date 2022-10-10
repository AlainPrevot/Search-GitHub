import StyleAvatar from './sass/Avatar.module.sass'
import PropTypes from 'prop-types'

export const Avatar = ({avatar_url}) => {
 
  return (
    <img className={StyleAvatar.avatar} src={avatar_url} alt="Avatar" />
  )
}

Avatar.propTypes = { 
  avatar_url: PropTypes.string.isRequired,
}