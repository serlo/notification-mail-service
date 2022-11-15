import moment from 'moment'
import React from 'react'

enum EventType {
  // in order to match the event types ids in the actual db we have to start with 1. The order should not be changed!
  taxonomyTermAssociate = 1,
  taxonomyTermCreate,
  licenseObjectSet,
  entityCreate,
  entityRevisionAdd,
  entityRevisionCheckout,
  entityLinkCreate,
  discussionCreate,
  discussionCommentCreate,
  uuidTrash,
  entityRevisionReject,
  taxonomyTermUpdate,
  uuidRestore,
  discussionCommentArchive,
  taxonomyTermParentChange,
  discussionRestore,
  taxonomyTermDissociate,
  entityLinkRemove,
}

const eventMessages: Record<EventType, string> = {
  // TODO: which taxonomy term, entity etc.
  [EventType.taxonomyTermAssociate]: 'associated the taxonomy term on',
  [EventType.taxonomyTermCreate]: 'created taxonomy term on  created',
  [EventType.licenseObjectSet]: 'set the license object on',
  [EventType.entityCreate]: 'created the entity on',
  [EventType.entityRevisionAdd]: 'added the entity revision on',
  [EventType.entityRevisionCheckout]: 'checkout the entity revision on',
  [EventType.entityLinkCreate]: 'created the entity link on',
  [EventType.discussionCreate]: 'created the discussion on',
  [EventType.discussionCommentCreate]: 'created comment on discussion on',
  [EventType.uuidTrash]: 'trashed the uuid on',
  [EventType.entityRevisionReject]: 'rejected entity revision on',
  [EventType.taxonomyTermUpdate]: 'updated taxonomy term on',
  [EventType.uuidRestore]: 'restored uuid on',
  [EventType.discussionCommentArchive]: 'archived discussion comment on',
  [EventType.taxonomyTermParentChange]: 'changed taxonomy term parent on',
  [EventType.discussionRestore]: 'restored the discussion on',
  [EventType.taxonomyTermDissociate]: 'dissociated the taxonomy term on',
  [EventType.entityLinkRemove]: 'removed the entity link on',
}

interface Props {
  username: string
  dates: string[]
  eventIds: string[]
  actorNames: string[]
}

function formattedDate(date: Date) {
  return moment(date).format('YYYY-MM-DD HH:mm')
}

export function NotificationEmail({
  username,
  actorNames,
  dates,
  eventIds,
}: Props) {
  return {
    subject: 'You have unread notifications in serlo.org',
    body: (
      <>
        <p>Hello {username}</p>
        <br />
        {actorNames.map((actor, i) => {
          return (
            <div key={i}>
              <p>
                {actor} {eventMessages[parseInt(eventIds[i]) as EventType]}{' '}
                {formattedDate(new Date(dates[i]))}
              </p>
              <br />
            </div>
          )
        })}
        <br />
        Best regards
        <br />
        <span>Serlo Team</span>
      </>
    ),
  }
}
