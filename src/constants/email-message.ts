export enum EVENT_TYPE {
  // in order to match the event types ids in the actual db we have to start with 1. The order should not be changed!
  TAXONOMY_TERM_ASSOCIATE = 1,
  TAXONOMY_TERM_CREATE,
  LICENSE_OBJECT_SET,
  ENTITY_CREATE,
  ENTITY_REVISION_ADD,
  ENTITY_REVISION_CHECKOUT,
  ENTITY_LINK_CREATE,
  DISCUSSION_CREATE,
  DISCUSSION_COMMENT_CREATE,
  UUID_TRASH,
  ENTITY_REVISION_REJECT,
  TAXONOMY_TERM_UPDATE,
  UUID_RESTORE,
  DISCUSSION_COMMENT_ARCHIVE,
  TAXONOMY_TERM_PARENT_CHANG,
  DISCUSSION_RESTORE,
  TAXONOMY_TERM_DISSOCIATE,
  ENTITY_LINK_REMOVE,
}

export const eventMessages: Record<EVENT_TYPE, string> = {
  // TODO: which taxonomy term, entity etc.
  [EVENT_TYPE.TAXONOMY_TERM_ASSOCIATE]: `associated the taxonomy term on`,
  [EVENT_TYPE.TAXONOMY_TERM_CREATE]: `created taxonomy term on  created`,
  [EVENT_TYPE.LICENSE_OBJECT_SET]: `set the license object on`,
  [EVENT_TYPE.ENTITY_CREATE]: `created the entity on`,
  [EVENT_TYPE.ENTITY_REVISION_ADD]: `added the entity revision on`,
  [EVENT_TYPE.ENTITY_REVISION_CHECKOUT]: `checkout the entity revision on`,
  [EVENT_TYPE.ENTITY_LINK_CREATE]: `created the entity link on`,
  [EVENT_TYPE.DISCUSSION_CREATE]: `created the discussion on`,
  [EVENT_TYPE.DISCUSSION_COMMENT_CREATE]: `created comment on discussion on`,
  [EVENT_TYPE.UUID_TRASH]: `trashed the uuid on`,
  [EVENT_TYPE.ENTITY_REVISION_REJECT]: `rejected entity revision on`,
  [EVENT_TYPE.TAXONOMY_TERM_UPDATE]: `updated taxonomy term on`,
  [EVENT_TYPE.UUID_RESTORE]: `restored uuid on`,
  [EVENT_TYPE.DISCUSSION_COMMENT_ARCHIVE]: `archived discussion comment on`,
  [EVENT_TYPE.TAXONOMY_TERM_PARENT_CHANG]: `changed taxonomy term parent on`,
  [EVENT_TYPE.DISCUSSION_RESTORE]: `restored the discussion on`,
  [EVENT_TYPE.TAXONOMY_TERM_DISSOCIATE]: `dissociated the taxonomy term on`,
  [EVENT_TYPE.ENTITY_LINK_REMOVE]: `removed the entity link on`,
}
