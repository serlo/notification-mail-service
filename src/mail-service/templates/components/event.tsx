import { domain } from '..'
import { GetNotificationsQuery } from '../../../gql/graphql'
import { getEntityStringByTypename } from '../helper/get-string-by-typename'
import { replacePlaceholders } from '../helper/replace-placeholders'
import { UuidType } from '../helper/uuid-type'
import { UserLink } from './user-link'
import { LanguageStrings } from '../helper/type-language-strings'

export type Event =
  GetNotificationsQuery['notifications']['nodes'][number]['event']

type EventThread = Extract<Event, { thread: unknown }>['thread']
type EventObject = Extract<Event, { object: unknown }>['object']
type EventParent = Extract<Event, { parent: unknown }>['parent']

type EventAbstractUuid = Extract<Event, { __typename: string }>

export function EventComponent({
  event,
  noPrivateContent,
  strings,
}: {
  event: EventAbstractUuid
  noPrivateContent?: boolean
  strings: LanguageStrings
}) {
  return (
    <>
      <p>
        {renderText()}{' '}
        <small>
          <abbr title={event.date as string}>{event.date}</abbr>
        </small>
      </p>
      {renderAdditionalText()}
      <br />
    </>
  )

  function parseString(
    string: string,
    replaceables: { [key: string]: JSX.Element | string }
  ) {
    replaceables.actor = <UserLink user={event.actor} />
    return replacePlaceholders(string, replaceables)
  }

  function renderText() {
    switch (event.__typename) {
      case 'SetThreadStateNotificationEvent':
        return parseString(
          event.archived
            ? strings.events.setThreadStateArchived
            : strings.events.setThreadStateUnarchived,
          {
            thread: renderThread(event.thread),
          }
        )

      case 'CreateCommentNotificationEvent':
        return parseString(strings.events.createComment, {
          thread: renderThread(event.thread),
          comment: (
            <a href={`${domain}/${event.comment.id}`}>
              {strings.entities.comment}&nbsp;<sup>{event.comment.id}</sup>
            </a>
          ),
        })

      case 'CreateThreadNotificationEvent':
        return parseString(strings.events.createThread, {
          thread: renderThread(event.thread),
          object: renderObject(event.object),
        })

      case 'CreateEntityNotificationEvent':
        return parseString(strings.events.createEntity, {
          object: renderObject(event.entity),
        })

      case 'SetLicenseNotificationEvent':
        return parseString(strings.events.setLicense, {
          repository: renderObject(event.repository),
        })

      case 'CreateEntityLinkNotificationEvent':
        return parseString(strings.events.createEntityLink, {
          child: renderObject(event.child),
          parent: renderObject(event.parent),
        })

      case 'RemoveEntityLinkNotificationEvent':
        return parseString(strings.events.removeEntityLink, {
          child: renderObject(event.child),
          parent: renderObject(event.parent),
        })

      case 'CreateEntityRevisionNotificationEvent':
        return parseString(strings.events.createEntityRevision, {
          revision: renderRevision(event.entityRevision.id),
          entity: renderObject(event.entity),
        })

      case 'CheckoutRevisionNotificationEvent':
        return parseString(strings.events.checkoutRevision, {
          revision: renderRevision(event.revision.id),
          repository: renderObject(event.repository),
        })

      case 'RejectRevisionNotificationEvent':
        return parseString(strings.events.rejectRevision, {
          revision: renderRevision(event.revision.id),
          repository: renderObject(event.repository),
        })

      case 'CreateTaxonomyLinkNotificationEvent':
        return parseString(strings.events.createTaxonomyLink, {
          child: renderObject(event.child),
          parent: renderObject(event.parent),
        })

      case 'RemoveTaxonomyLinkNotificationEvent':
        return parseString(strings.events.removeTaxonomyLink, {
          child: renderObject(event.child),
          parent: renderObject(event.parent),
        })

      case 'CreateTaxonomyTermNotificationEvent':
        return parseString(strings.events.createTaxonomyTerm, {
          term: renderObject(event.taxonomyTerm),
        })

      case 'SetTaxonomyTermNotificationEvent':
        return parseString(strings.events.setTaxonomyTerm, {
          term: renderObject(event.taxonomyTerm),
        })

      case 'SetTaxonomyParentNotificationEvent':
        if (!event.optionalParent) {
          //deleted
          return parseString(strings.events.setTaxonomyParentDeleted, {
            child: renderObject(event.child),
          })
        }
        if (event.previousParent) {
          return parseString(strings.events.setTaxonomyParentChangedFrom, {
            child: renderObject(event.child),
            previousparent: renderObject(event.previousParent),
            parent: renderObject(event.optionalParent),
          })
        }
        return parseString(strings.events.setTaxonomyParentChanged, {
          child: renderObject(event.child),
          parent: renderObject(event.optionalParent),
        })

      case 'SetUuidStateNotificationEvent':
        return parseString(
          event.trashed
            ? strings.events.setUuidStateTrashed
            : strings.events.setUuidStateRestored,
          {
            object: renderObject(event.object),
          }
        )
    }
  }

  function renderObject({
    alias,
    title,
    __typename,
    id,
  }: EventObject | EventParent) {
    return (
      <a href={domain + alias}>
        <>
          {renderTitle(title, __typename as UuidType, id)}
          {shouldRenderParent(__typename as UuidType) ? (
            <>{renderParent(title, __typename as UuidType)}</>
          ) : null}
        </>
      </a>
    )
  }

  function shouldRenderParent(typename: UuidType) {
    return [
      UuidType.Exercise,
      UuidType.GroupedExercise,
      UuidType.Solution,
      UuidType.Thread,
      UuidType.Comment,
    ].includes(typename)
  }

  function renderParent(title: string, typename: UuidType) {
    const preposition = [
      UuidType.Exercise,
      UuidType.GroupedExercise,
      UuidType.Solution,
    ].includes(typename)
      ? strings.events.entityInParentPreposition
      : [UuidType.Thread, UuidType.Comment].includes(typename)
      ? strings.events.commentInParentPreposition
      : ''

    return ` (${preposition} ${title})`
  }

  function renderTitle(title: string, typename: UuidType, id: number) {
    if (
      [
        UuidType.Exercise,
        UuidType.GroupedExercise,
        UuidType.Solution,
        UuidType.Thread,
        UuidType.Comment,
      ].includes(typename)
    ) {
      return (
        <>
          {getEntityStringByTypename(typename, strings)}&nbsp;<sup>{id}</sup>
        </>
      )
    } else {
      return <>{title}</>
    }
  }

  function renderRevision(id: number) {
    return (
      <a href={`${domain}/${id}`}>
        {strings.entities.revision}&nbsp;<sup>{id}</sup>
      </a>
    )
  }

  function renderThread(thread: EventThread) {
    const id = thread.thread.nodes[0]?.id
    return (
      <a href={`${domain}/${id}`}>
        {strings.entities.thread}&nbsp;<sup>{id}</sup>
      </a>
    )
  }
  function renderAdditionalText() {
    if (noPrivateContent) return null

    if (
      event.__typename === 'RejectRevisionNotificationEvent' ||
      event.__typename === 'CheckoutRevisionNotificationEvent'
    ) {
      return <div className="text-truegray-500">{event.reason}</div>
    }
    if (event.__typename === 'CreateThreadNotificationEvent') {
      return renderCommentContent(event.thread.thread.nodes[0].content)
    }
    if (event.__typename === 'CreateCommentNotificationEvent') {
      return renderCommentContent(event.thread.comment.nodes[0].content)
    }
  }
  function renderCommentContent(content?: string) {
    if (!content) return null
    const maxLength = 200
    const shortened =
      content.length > maxLength
        ? content.substring(0, maxLength) + '…'
        : content
    // TODO: maybe proper render math signs
    // const withMath = replaceWithJSX([shortened], /%%(.+?)%%/g, (str, i) => (
    //   <MathSpan key={`math-${i}`} formula={str} />
    // ))
    return <div>{shortened}</div>
  }
}
