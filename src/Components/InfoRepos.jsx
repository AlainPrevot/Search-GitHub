import StyleInfoRepos from './sass/InfoRepos.module.sass'

export const InfoRepos = ({repos=0, followers=0, following=0}) => {

  return (
    <div className={StyleInfoRepos.content}>

      <div>
        <span>Repos</span>
        <span>{repos}</span>
      </div>

      <div>
        <span>Folowers</span>
        <span>{followers}</span>
      </div>
      
      <div>
        <span>Following</span>
        <span>{following}</span>
      </div>
    </div>
  )
};

