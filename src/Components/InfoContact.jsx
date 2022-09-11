
export const InfoContact = ({location, twitter, url, company}) => {

    let user_location = location == null ? 'Not Available' : location
    let user_twitter = twitter == null ? 'Not Available' : twitter
    let user_url = url == null ? 'Not Available' : url
    let user_company = company == null ? 'Not Available' : company

  return (
    <div>
        <span>{user_location}</span>
        <span>{user_twitter}</span>
        <span>{user_url}</span>
        <span>{user_company}</span>
    </div>
  )
}
