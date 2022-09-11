import { useState } from "react"

import StyleInfoUser from './sass/InfoUser.module.sass'

export const InfoUser = ({name, username, bio, created_at}) => {

    let biography = bio == null ? 'This profile has no bio' : bio

  return (
    <div className={StyleInfoUser.content}>
        <h1>{name}</h1>
        <h2>{username}</h2>
        <p>{biography}</p>
        <p>{created_at}</p>
    </div>
  )
}
