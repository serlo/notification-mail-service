import { domain } from '../../../config'

export function UserLink({
  user,
}: {
  user: {
    username: string
  }
}) {
  return (
    <>
      <a href={`${domain}/user/profile/${user.username}`}>{user.username}</a>
    </>
  )
}
