import { domain } from '../../../config'

export function UserLink({ username }: { username: string }) {
  return <a href={`${domain}/user/profile/${username}`}>{username}</a>
}
