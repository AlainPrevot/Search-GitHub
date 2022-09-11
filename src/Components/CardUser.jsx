import { Avatar } from "./Avatar";
import { useFetchGitHub } from "./hooks/useFetchGitHub"
import { InfoContact } from "./InfoContact";
import { InfoRepos } from "./InfoRepos";
import { InfoUser } from "./InfoUser";

import './sass/CardUser.sass'

export const CardUser = ({username}) => {


  const {avatar} = useFetchGitHub(username);


  return (
    <div className="card">
        <Avatar 
          avatar_url={avatar.avatar_url}
        />
        <InfoUser
          name={avatar.name}
          username={avatar.login}
          bio={avatar.bio}
          created_at={avatar.created_at}
        />
        <InfoRepos
          repos={avatar.public_repos}
          followers={avatar.followers}
          following={avatar.following}
        />
        <InfoContact
          location={avatar.location}
          twitter={avatar.twitter_username}
          url={avatar.html_url}
          company={avatar.company}
        />
    </div>
  )
}
