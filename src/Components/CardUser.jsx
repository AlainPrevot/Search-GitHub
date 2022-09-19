import { useFetchGitHub } from "./hooks/useFetchGitHub"
import {Avatar, InfoContact, InfoRepos, InfoUser } from "../Components";

import StyleCardUser from './sass/CardUser.module.sass'
import StyleModo from './sass/Modo.module.sass'

export const CardUser = ({username}) => {


  const {avatar} = useFetchGitHub(username); //Obtengo un objeto con los datos de la api


  return (
    <div className={`${StyleCardUser.card} ${StyleModo.prueba}`}>

        <Avatar 
          avatar_url={avatar.avatar_url}
        />

        <div className={StyleCardUser.card__info}>

          <InfoUser
            user={username}
            name={avatar.name}
            username={avatar.login}
            bio={avatar.bio}
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
    </div>
  )
}
