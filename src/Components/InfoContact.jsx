import {IconCompany, IconLocation, IconTwitter, IconURL} from '../Icons'
import StyleInfoContact from './sass/InfoContact.module.sass'
import PropTypes from 'prop-types'

export const InfoContact = ({location, twitter, url, company}) => {

    let user_location = location == null ? 'Not Available' : location
    let user_twitter = twitter == null ? 'Not Available' : twitter
    let user_url = url == null ? 'Not Available' : url
    let user_company = company == null ? 'Not Available' : company

  return (
    <div className={StyleInfoContact.content}>

        <IconLocation className={StyleInfoContact.content__Icon}/>
        <span>{user_location}</span>

        <IconTwitter className={StyleInfoContact.content__Icon}/>
        <span>{user_twitter}</span>

        <IconURL className={StyleInfoContact.content__Icon}/>
        <a href={user_url}>{user_url}</a>

        <IconCompany className={StyleInfoContact.content__Icon}/>
        <span>{user_company}</span>
    </div>
  )
}

InfoContact.propTypes = {
  location: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}
