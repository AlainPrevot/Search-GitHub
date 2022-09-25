import { useDate } from '../hooks/useDate'
import StyleInfoUser from './sass/InfoUser.module.sass'

export const InfoUser = ({user, name, username, bio}) => {

    let biography = bio == null ? 'This profile has no bio' : bio

    const {day, month, year} = useDate(user);
  return (
    <div className={StyleInfoUser.content}>
        <h1>{name}</h1>
        <h2>{username}</h2>
        <p>Joined {day} {month} {year}</p>  
        <p>{biography}</p>
    </div>
  )
}
