export function UserLink({ username }: { username: string }) {
  return <a href={`https://serlo.org/user/profile/${username}`}>{username}</a>
}
