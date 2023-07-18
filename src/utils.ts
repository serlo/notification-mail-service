import jwt from 'jsonwebtoken'

export function createToken({ secret }: { secret: string }) {
  return jwt.sign({}, secret, {
    expiresIn: '2h',
    audience: 'api.serlo.org',
    issuer: 'notification-email-service',
  })
}
