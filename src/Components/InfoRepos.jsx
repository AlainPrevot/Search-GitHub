
export const InfoRepos = ({repos, followers, following}) => {
  return (
    <div>
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
}
