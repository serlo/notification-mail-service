/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AbstractEntity = {
  alias: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  subject?: Maybe<Subject>;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractEntityEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AbstractEntityConnection = {
  __typename?: 'AbstractEntityConnection';
  edges: Array<AbstractEntityCursor>;
  nodes: Array<AbstractEntity>;
  pageInfo: HasNextPageInfo;
  totalCount: Scalars['Int'];
};

export type AbstractEntityCursor = {
  __typename?: 'AbstractEntityCursor';
  cursor: Scalars['String'];
  node: AbstractEntity;
};

export type AbstractEntityRevision = {
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractEntityRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AbstractExercise = {
  alias: Scalars['String'];
  currentRevision?: Maybe<AbstractExerciseRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  solution?: Maybe<Solution>;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractExerciseEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AbstractExerciseRevision = {
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractExerciseRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AbstractNavigationChild = {
  navigation?: Maybe<Navigation>;
};

export type AbstractNotificationEvent = {
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
};

export type AbstractNotificationEventConnection = {
  __typename?: 'AbstractNotificationEventConnection';
  edges: Array<AbstractNotificationEventEdge>;
  nodes: Array<AbstractNotificationEvent>;
  pageInfo: HasNextPageInfo;
};

export type AbstractNotificationEventEdge = {
  __typename?: 'AbstractNotificationEventEdge';
  cursor: Scalars['String'];
  node: AbstractNotificationEvent;
};

export type AbstractRepository = {
  alias: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractRepositoryEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AbstractRepositoryThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type AbstractRevision = {
  alias: Scalars['String'];
  author: User;
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AbstractRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type AbstractTaxonomyTermChild = {
  alias: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  taxonomyTerms: TaxonomyTermConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractTaxonomyTermChildEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AbstractTaxonomyTermChildTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AbstractUuid = {
  alias: Scalars['String'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AbstractUuidEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};

export type AbstractUuidConnection = {
  __typename?: 'AbstractUuidConnection';
  edges: Array<AbstractUuidCursor>;
  nodes: Array<AbstractUuid>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AbstractUuidCursor = {
  __typename?: 'AbstractUuidCursor';
  cursor: Scalars['String'];
  node: AbstractUuid;
};

export type AddRevisionResponse = {
  __typename?: 'AddRevisionResponse';
  query: Query;
  revisionId?: Maybe<Scalars['Int']>;
  success: Scalars['Boolean'];
};

export type AliasInput = {
  instance: Instance;
  path: Scalars['String'];
};

export type AllThreadsConnection = {
  __typename?: 'AllThreadsConnection';
  edges: Array<ThreadsCursor>;
  nodes: Array<Thread>;
  pageInfo: HasNextPageInfo;
  totalCount: Scalars['Int'];
};

export type Applet = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Applet';
  alias: Scalars['String'];
  currentRevision?: Maybe<AppletRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: AppletRevisionConnection;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type AppletEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AppletRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type AppletTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AppletThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type AppletRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'AppletRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  repository: Applet;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
  url: Scalars['String'];
};


export type AppletRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type AppletRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type AppletRevisionConnection = {
  __typename?: 'AppletRevisionConnection';
  edges: Array<AppletRevisionCursor>;
  nodes: Array<AppletRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppletRevisionCursor = {
  __typename?: 'AppletRevisionCursor';
  cursor: Scalars['String'];
  node: AppletRevision;
};

export type Article = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Article';
  alias: Scalars['String'];
  currentRevision?: Maybe<ArticleRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: ArticleRevisionConnection;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type ArticleEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ArticleRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type ArticleTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ArticleThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'ArticleRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  repository: Article;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type ArticleRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ArticleRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleRevisionConnection = {
  __typename?: 'ArticleRevisionConnection';
  edges: Array<ArticleRevisionCursor>;
  nodes: Array<ArticleRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ArticleRevisionCursor = {
  __typename?: 'ArticleRevisionCursor';
  cursor: Scalars['String'];
  node: ArticleRevision;
};

export type CacheRemoveInput = {
  keys: Array<Scalars['String']>;
};

export type CacheRemoveResponse = {
  __typename?: 'CacheRemoveResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type CacheSetInput = {
  key: Scalars['String'];
  value: Scalars['JSON'];
};

export type CacheSetResponse = {
  __typename?: 'CacheSetResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type CacheUpdateInput = {
  keys: Array<Scalars['String']>;
};

export type CacheUpdateResponse = {
  __typename?: 'CacheUpdateResponse';
  success: Scalars['Boolean'];
};

export type CheckoutRevisionInput = {
  reason: Scalars['String'];
  revisionId: Scalars['Int'];
};

export type CheckoutRevisionNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CheckoutRevisionNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  reason: Scalars['String'];
  repository: AbstractRepository;
  revision: AbstractRevision;
};

export type CheckoutRevisionResponse = {
  __typename?: 'CheckoutRevisionResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type Comment = AbstractUuid & {
  __typename?: 'Comment';
  alias: Scalars['String'];
  archived: Scalars['Boolean'];
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  legacyObject: AbstractUuid;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type CommentEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node: Comment;
};

export type Course = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Course';
  alias: Scalars['String'];
  currentRevision?: Maybe<CourseRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  pages: Array<CoursePage>;
  revisions: CourseRevisionConnection;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type CourseEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CoursePagesArgs = {
  hasCurrentRevision?: InputMaybe<Scalars['Boolean']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};


export type CourseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type CourseTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CourseThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type CoursePage = AbstractEntity & AbstractRepository & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'CoursePage';
  alias: Scalars['String'];
  course: Course;
  currentRevision?: Maybe<CoursePageRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: CoursePageRevisionConnection;
  subject?: Maybe<Subject>;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type CoursePageEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CoursePageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type CoursePageThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type CoursePageRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'CoursePageRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: CoursePage;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type CoursePageRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CoursePageRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type CoursePageRevisionConnection = {
  __typename?: 'CoursePageRevisionConnection';
  edges: Array<CoursePageRevisionCursor>;
  nodes: Array<CoursePageRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CoursePageRevisionCursor = {
  __typename?: 'CoursePageRevisionCursor';
  cursor: Scalars['String'];
  node: CoursePageRevision;
};

export type CourseRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'CourseRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  metaDescription: Scalars['String'];
  repository: Course;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type CourseRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CourseRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type CourseRevisionConnection = {
  __typename?: 'CourseRevisionConnection';
  edges: Array<CourseRevisionCursor>;
  nodes: Array<CourseRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CourseRevisionCursor = {
  __typename?: 'CourseRevisionCursor';
  cursor: Scalars['String'];
  node: CourseRevision;
};

export type CreateCommentNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateCommentNotificationEvent';
  actor: User;
  comment: Comment;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  thread: Thread;
};

export type CreateEntityLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateEntityLinkNotificationEvent';
  actor: User;
  child: AbstractEntity;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  parent: AbstractEntity;
};

export type CreateEntityNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateEntityNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  entity: AbstractEntity;
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
};

export type CreateEntityRevisionNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateEntityRevisionNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  entity: AbstractRepository;
  entityRevision: AbstractRevision;
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
};

export type CreatePageInput = {
  content: Scalars['String'];
  discussionsEnabled: Scalars['Boolean'];
  forumId?: InputMaybe<Scalars['Int']>;
  instance: Instance;
  licenseId: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateTaxonomyLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateTaxonomyLinkNotificationEvent';
  actor: User;
  child: AbstractUuid;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  parent: TaxonomyTerm;
};

export type CreateTaxonomyTermNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateTaxonomyTermNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  taxonomyTerm: TaxonomyTerm;
};

export type CreateThreadNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateThreadNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  object: AbstractUuid;
  objectId: Scalars['Int'];
  thread: Thread;
};

export type DeletedEntitiesConnection = {
  __typename?: 'DeletedEntitiesConnection';
  edges: Array<DeletedEntityCursor>;
  nodes: Array<DeletedEntity>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DeletedEntity = {
  __typename?: 'DeletedEntity';
  dateOfDeletion?: Maybe<Scalars['String']>;
  entity?: Maybe<AbstractEntity>;
};

export type DeletedEntityCursor = {
  __typename?: 'DeletedEntityCursor';
  cursor: Scalars['String'];
  node: DeletedEntity;
};

export type EntityMetadataConnection = {
  __typename?: 'EntityMetadataConnection';
  edges: Array<EntityMetadataCursor>;
  nodes: Array<Scalars['JSONObject']>;
  pageInfo: HasNextPageInfo;
};

export type EntityMetadataCursor = {
  __typename?: 'EntityMetadataCursor';
  cursor: Scalars['String'];
  node: Scalars['JSONObject'];
};

export type EntityMutation = {
  __typename?: 'EntityMutation';
  checkoutRevision: CheckoutRevisionResponse;
  rejectRevision: RejectRevisionResponse;
  setApplet: SetEntityResponse;
  setArticle: SetEntityResponse;
  setCourse: SetEntityResponse;
  setCoursePage: SetEntityResponse;
  setEvent: SetEntityResponse;
  setExercise: SetEntityResponse;
  setExerciseGroup: SetEntityResponse;
  setGroupedExercise: SetEntityResponse;
  setSolution: SetEntityResponse;
  setVideo: SetEntityResponse;
  sort: EntitySortResponse;
  updateLicense: EntityUpdateLicenseResponse;
};


export type EntityMutationCheckoutRevisionArgs = {
  input: CheckoutRevisionInput;
};


export type EntityMutationRejectRevisionArgs = {
  input: RejectRevisionInput;
};


export type EntityMutationSetAppletArgs = {
  input: SetAppletInput;
};


export type EntityMutationSetArticleArgs = {
  input: SetArticleInput;
};


export type EntityMutationSetCourseArgs = {
  input: SetCourseInput;
};


export type EntityMutationSetCoursePageArgs = {
  input: SetCoursePageInput;
};


export type EntityMutationSetEventArgs = {
  input: SetEventInput;
};


export type EntityMutationSetExerciseArgs = {
  input: SetGenericEntityInput;
};


export type EntityMutationSetExerciseGroupArgs = {
  input: SetExerciseGroupInput;
};


export type EntityMutationSetGroupedExerciseArgs = {
  input: SetGenericEntityInput;
};


export type EntityMutationSetSolutionArgs = {
  input: SetGenericEntityInput;
};


export type EntityMutationSetVideoArgs = {
  input: SetVideoInput;
};


export type EntityMutationSortArgs = {
  input: EntitySortInput;
};


export type EntityMutationUpdateLicenseArgs = {
  input: EntityUpdateLicenseInput;
};

export type EntityQuery = {
  __typename?: 'EntityQuery';
  deletedEntities: DeletedEntitiesConnection;
};


export type EntityQueryDeletedEntitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
};

export type EntitySortInput = {
  childrenIds: Array<Scalars['Int']>;
  entityId: Scalars['Int'];
};

export type EntitySortResponse = {
  __typename?: 'EntitySortResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type EntityUpdateLicenseInput = {
  entityId: Scalars['Int'];
  licenseId: Scalars['Int'];
};

export type EntityUpdateLicenseResponse = {
  __typename?: 'EntityUpdateLicenseResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type Event = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Event';
  alias: Scalars['String'];
  currentRevision?: Maybe<EventRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: EventRevisionConnection;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type EventEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EventRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type EventTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EventThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type EventRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'EventRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  repository: Event;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type EventRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EventRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type EventRevisionConnection = {
  __typename?: 'EventRevisionConnection';
  edges: Array<EventRevisionCursor>;
  nodes: Array<EventRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EventRevisionCursor = {
  __typename?: 'EventRevisionCursor';
  cursor: Scalars['String'];
  node: EventRevision;
};

export type Exercise = AbstractEntity & AbstractExercise & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Exercise';
  alias: Scalars['String'];
  currentRevision?: Maybe<ExerciseRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: ExerciseRevisionConnection;
  solution?: Maybe<Solution>;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type ExerciseEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ExerciseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type ExerciseTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ExerciseThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ExerciseGroup = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'ExerciseGroup';
  alias: Scalars['String'];
  currentRevision?: Maybe<ExerciseGroupRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  exercises: Array<GroupedExercise>;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: ExerciseGroupRevisionConnection;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type ExerciseGroupEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ExerciseGroupRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type ExerciseGroupTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ExerciseGroupThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ExerciseGroupRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'ExerciseGroupRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  cohesive: Scalars['Boolean'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: ExerciseGroup;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type ExerciseGroupRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ExerciseGroupRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ExerciseGroupRevisionConnection = {
  __typename?: 'ExerciseGroupRevisionConnection';
  edges: Array<ExerciseGroupRevisionCursor>;
  nodes: Array<ExerciseGroupRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExerciseGroupRevisionCursor = {
  __typename?: 'ExerciseGroupRevisionCursor';
  cursor: Scalars['String'];
  node: ExerciseGroupRevision;
};

export type ExerciseRevision = AbstractEntityRevision & AbstractExerciseRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'ExerciseRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: Exercise;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type ExerciseRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ExerciseRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ExerciseRevisionConnection = {
  __typename?: 'ExerciseRevisionConnection';
  edges: Array<ExerciseRevisionCursor>;
  nodes: Array<ExerciseRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExerciseRevisionCursor = {
  __typename?: 'ExerciseRevisionCursor';
  cursor: Scalars['String'];
  node: ExerciseRevision;
};

export type GroupedExercise = AbstractEntity & AbstractExercise & AbstractRepository & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'GroupedExercise';
  alias: Scalars['String'];
  currentRevision?: Maybe<GroupedExerciseRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  exerciseGroup: ExerciseGroup;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: GroupedExerciseRevisionConnection;
  solution?: Maybe<Solution>;
  subject?: Maybe<Subject>;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type GroupedExerciseEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupedExerciseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type GroupedExerciseThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type GroupedExerciseRevision = AbstractEntityRevision & AbstractExerciseRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'GroupedExerciseRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: GroupedExercise;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type GroupedExerciseRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupedExerciseRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type GroupedExerciseRevisionConnection = {
  __typename?: 'GroupedExerciseRevisionConnection';
  edges: Array<GroupedExerciseRevisionCursor>;
  nodes: Array<GroupedExerciseRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GroupedExerciseRevisionCursor = {
  __typename?: 'GroupedExerciseRevisionCursor';
  cursor: Scalars['String'];
  node: GroupedExerciseRevision;
};

export type HasNextPageInfo = {
  __typename?: 'HasNextPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

export enum Instance {
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Hi = 'hi',
  Ta = 'ta'
}

export type InstanceAware = {
  instance: Instance;
};

export type License = {
  __typename?: 'License';
  agreement: Scalars['String'];
  content: Scalars['String'];
  default: Scalars['Boolean'];
  id: Scalars['Int'];
  instance: Instance;
  shortTitle: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type LicenseQuery = {
  __typename?: 'LicenseQuery';
  defaultLicense: License;
  license?: Maybe<License>;
  licenses: Array<License>;
};


export type LicenseQueryDefaultLicenseArgs = {
  instance: Instance;
};


export type LicenseQueryLicenseArgs = {
  id: Scalars['Int'];
};


export type LicenseQueryLicensesArgs = {
  instance?: InputMaybe<Instance>;
};

export type MediaQuery = {
  __typename?: 'MediaQuery';
  newUpload: MediaUpload;
};


export type MediaQueryNewUploadArgs = {
  mediaType: MediaType;
};

export enum MediaType {
  ImageGif = 'IMAGE_GIF',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageSvgXml = 'IMAGE_SVG_XML',
  ImageWebp = 'IMAGE_WEBP'
}

export type MediaUpload = {
  __typename?: 'MediaUpload';
  uploadUrl: Scalars['String'];
  urlAfterUpload: Scalars['String'];
};

export type MetadataQuery = {
  __typename?: 'MetadataQuery';
  entities: EntityMetadataConnection;
  publisher: Scalars['JSONObject'];
  version: Scalars['String'];
};


export type MetadataQueryEntitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  modifiedAfter?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _cache: _CacheMutation;
  entity: EntityMutation;
  notification: NotificationMutation;
  oauth: OauthMutation;
  page: PageMutation;
  subscription: SubscriptionMutation;
  taxonomyTerm: TaxonomyTermMutation;
  thread: ThreadMutation;
  user: UserMutation;
  uuid: UuidMutation;
};

export type Navigation = {
  __typename?: 'Navigation';
  path: NavigationNodeConnection;
};


export type NavigationPathArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type NavigationNode = {
  __typename?: 'NavigationNode';
  id?: Maybe<Scalars['Int']>;
  label: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type NavigationNodeConnection = {
  __typename?: 'NavigationNodeConnection';
  edges?: Maybe<Array<Maybe<NavigationNodeEdge>>>;
  nodes: Array<NavigationNode>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NavigationNodeEdge = {
  __typename?: 'NavigationNodeEdge';
  cursor: Scalars['String'];
  node: NavigationNode;
};

export type Notification = {
  __typename?: 'Notification';
  event: AbstractNotificationEvent;
  id: Scalars['Int'];
  unread: Scalars['Boolean'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String'];
  node: Notification;
};

export type NotificationMutation = {
  __typename?: 'NotificationMutation';
  setState?: Maybe<NotificationSetStateResponse>;
};


export type NotificationMutationSetStateArgs = {
  input: NotificationSetStateInput;
};

export type NotificationSetStateInput = {
  id: Array<Scalars['Int']>;
  unread: Scalars['Boolean'];
};

export type NotificationSetStateResponse = {
  __typename?: 'NotificationSetStateResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type OauthAcceptInput = {
  challenge: Scalars['String'];
  session: Scalars['JSON'];
};

export type OauthAcceptResponse = {
  __typename?: 'OauthAcceptResponse';
  redirectUri: Scalars['String'];
  success: Scalars['Boolean'];
};

export type OauthMutation = {
  __typename?: 'OauthMutation';
  acceptConsent: OauthAcceptResponse;
  acceptLogin: OauthAcceptResponse;
  acceptLogout: OauthAcceptResponse;
};


export type OauthMutationAcceptConsentArgs = {
  input: OauthAcceptInput;
};


export type OauthMutationAcceptLoginArgs = {
  input: OauthAcceptInput;
};


export type OauthMutationAcceptLogoutArgs = {
  challenge: Scalars['String'];
};

export type Page = AbstractNavigationChild & AbstractRepository & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Page';
  alias: Scalars['String'];
  currentRevision?: Maybe<PageRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  navigation?: Maybe<Navigation>;
  revisions: PageRevisionConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type PageEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type PageThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type PageAddRevisionInput = {
  content: Scalars['String'];
  pageId: Scalars['Int'];
  title: Scalars['String'];
};

export type PageCreateResponse = {
  __typename?: 'PageCreateResponse';
  query: Query;
  record?: Maybe<Page>;
  success: Scalars['Boolean'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageMutation = {
  __typename?: 'PageMutation';
  addRevision: AddRevisionResponse;
  checkoutRevision: CheckoutRevisionResponse;
  create: PageCreateResponse;
  rejectRevision: RejectRevisionResponse;
};


export type PageMutationAddRevisionArgs = {
  input: PageAddRevisionInput;
};


export type PageMutationCheckoutRevisionArgs = {
  input: CheckoutRevisionInput;
};


export type PageMutationCreateArgs = {
  input: CreatePageInput;
};


export type PageMutationRejectRevisionArgs = {
  input: RejectRevisionInput;
};

export type PageQuery = {
  __typename?: 'PageQuery';
  pages: Array<Page>;
};


export type PageQueryPagesArgs = {
  instance?: InputMaybe<Instance>;
};

export type PageRevision = AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'PageRevision';
  alias: Scalars['String'];
  author: User;
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: Page;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type PageRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PageRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type PageRevisionConnection = {
  __typename?: 'PageRevisionConnection';
  edges: Array<PageRevisionCursor>;
  nodes: Array<PageRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageRevisionCursor = {
  __typename?: 'PageRevisionCursor';
  cursor: Scalars['String'];
  node: PageRevision;
};

export type Query = {
  __typename?: 'Query';
  activeAuthors: UserConnection;
  activeDonors: UserConnection;
  activeReviewers: UserConnection;
  authorization: Scalars['JSON'];
  entity?: Maybe<EntityQuery>;
  events: AbstractNotificationEventConnection;
  license: LicenseQuery;
  media: MediaQuery;
  metadata: MetadataQuery;
  notificationEvent?: Maybe<AbstractNotificationEvent>;
  notifications: NotificationConnection;
  page: PageQuery;
  subject: SubjectQuery;
  subscription: SubscriptionQuery;
  thread: ThreadQuery;
  user: UserQuery;
  uuid?: Maybe<AbstractUuid>;
};


export type QueryActiveAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryActiveDonorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryActiveReviewersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['Int']>;
};


export type QueryNotificationEventArgs = {
  id: Scalars['Int'];
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  emailSubscribed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unread?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryUuidArgs = {
  alias?: InputMaybe<AliasInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type RejectRevisionInput = {
  reason: Scalars['String'];
  revisionId: Scalars['Int'];
};

export type RejectRevisionNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'RejectRevisionNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  reason: Scalars['String'];
  repository: AbstractRepository;
  revision: AbstractRevision;
};

export type RejectRevisionResponse = {
  __typename?: 'RejectRevisionResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type RemoveEntityLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'RemoveEntityLinkNotificationEvent';
  actor: User;
  child: AbstractEntity;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  parent: AbstractEntity;
};

export type RemoveTaxonomyLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'RemoveTaxonomyLinkNotificationEvent';
  actor: User;
  child: AbstractUuid;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  parent: TaxonomyTerm;
};

export enum Role {
  Admin = 'admin',
  Architect = 'architect',
  Guest = 'guest',
  Login = 'login',
  Moderator = 'moderator',
  Reviewer = 'reviewer',
  StaticPagesBuilder = 'static_pages_builder',
  Sysadmin = 'sysadmin'
}

export enum Scope {
  Serlo = 'Serlo',
  SerloDe = 'Serlo_De',
  SerloEn = 'Serlo_En',
  SerloEs = 'Serlo_Es',
  SerloFr = 'Serlo_Fr',
  SerloHi = 'Serlo_Hi',
  SerloTa = 'Serlo_Ta'
}

export type ScopedRole = {
  __typename?: 'ScopedRole';
  role: Role;
  scope?: Maybe<Scalars['String']>;
};

export type ScopedRoleConnection = {
  __typename?: 'ScopedRoleConnection';
  edges: Array<ScopedRoleCursor>;
  nodes: Array<ScopedRole>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ScopedRoleCursor = {
  __typename?: 'ScopedRoleCursor';
  cursor: Scalars['String'];
  node: ScopedRole;
};

export type SetAppletInput = {
  changes: Scalars['String'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type SetArticleInput = {
  changes: Scalars['String'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
  title: Scalars['String'];
};

export type SetCourseInput = {
  changes: Scalars['String'];
  content?: InputMaybe<Scalars['String']>;
  entityId?: InputMaybe<Scalars['Int']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
  title: Scalars['String'];
};

export type SetCoursePageInput = {
  changes: Scalars['String'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
  title: Scalars['String'];
};

export type SetEntityResponse = {
  __typename?: 'SetEntityResponse';
  query: Query;
  record?: Maybe<AbstractEntity>;
  success: Scalars['Boolean'];
};

export type SetEventInput = {
  changes: Scalars['String'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
  title: Scalars['String'];
};

export type SetExerciseGroupInput = {
  changes: Scalars['String'];
  cohesive: Scalars['Boolean'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
};

export type SetGenericEntityInput = {
  changes: Scalars['String'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
};

export type SetLicenseNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetLicenseNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  repository: AbstractRepository;
};

export type SetTaxonomyParentNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetTaxonomyParentNotificationEvent';
  actor: User;
  child: TaxonomyTerm;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  parent?: Maybe<TaxonomyTerm>;
  previousParent?: Maybe<TaxonomyTerm>;
};

export type SetTaxonomyTermNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetTaxonomyTermNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  taxonomyTerm: TaxonomyTerm;
};

export type SetThreadStateNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetThreadStateNotificationEvent';
  actor: User;
  archived: Scalars['Boolean'];
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  objectId: Scalars['Int'];
  thread: Thread;
};

export type SetUuidStateNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetUuidStateNotificationEvent';
  actor: User;
  date: Scalars['DateTime'];
  id: Scalars['Int'];
  instance: Instance;
  object: AbstractUuid;
  objectId: Scalars['Int'];
  trashed: Scalars['Boolean'];
};

export type SetVideoInput = {
  changes: Scalars['String'];
  content: Scalars['String'];
  entityId?: InputMaybe<Scalars['Int']>;
  needsReview: Scalars['Boolean'];
  parentId?: InputMaybe<Scalars['Int']>;
  subscribeThis: Scalars['Boolean'];
  subscribeThisByEmail: Scalars['Boolean'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Solution = AbstractEntity & AbstractRepository & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Solution';
  alias: Scalars['String'];
  currentRevision?: Maybe<SolutionRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  exercise: AbstractExercise;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: SolutionRevisionConnection;
  subject?: Maybe<Subject>;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type SolutionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type SolutionRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type SolutionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type SolutionRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'SolutionRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: Solution;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type SolutionRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type SolutionRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type SolutionRevisionConnection = {
  __typename?: 'SolutionRevisionConnection';
  edges: Array<SolutionRevisionCursor>;
  nodes: Array<SolutionRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SolutionRevisionCursor = {
  __typename?: 'SolutionRevisionCursor';
  cursor: Scalars['String'];
  node: SolutionRevision;
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['String'];
  taxonomyTerm: TaxonomyTerm;
  unrevisedEntities: AbstractEntityConnection;
};


export type SubjectUnrevisedEntitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type SubjectQuery = {
  __typename?: 'SubjectQuery';
  subject?: Maybe<Subject>;
  subjects: Array<Subject>;
};


export type SubjectQuerySubjectArgs = {
  id: Scalars['String'];
};


export type SubjectQuerySubjectsArgs = {
  instance: Instance;
};

export type SubscriptionConnection = {
  __typename?: 'SubscriptionConnection';
  edges: Array<SubscriptionCursor>;
  nodes: Array<SubscriptionInfo>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubscriptionCursor = {
  __typename?: 'SubscriptionCursor';
  cursor: Scalars['String'];
  node: SubscriptionInfo;
};

export type SubscriptionInfo = {
  __typename?: 'SubscriptionInfo';
  object: AbstractUuid;
  sendEmail: Scalars['Boolean'];
};

export type SubscriptionMutation = {
  __typename?: 'SubscriptionMutation';
  set?: Maybe<SubscriptionSetResponse>;
};


export type SubscriptionMutationSetArgs = {
  input: SubscriptionSetInput;
};

export type SubscriptionQuery = {
  __typename?: 'SubscriptionQuery';
  currentUserHasSubscribed: Scalars['Boolean'];
  getSubscriptions: SubscriptionConnection;
};


export type SubscriptionQueryCurrentUserHasSubscribedArgs = {
  id: Scalars['Int'];
};


export type SubscriptionQueryGetSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type SubscriptionSetInput = {
  id: Array<Scalars['Int']>;
  sendEmail: Scalars['Boolean'];
  subscribe: Scalars['Boolean'];
};

export type SubscriptionSetResponse = {
  __typename?: 'SubscriptionSetResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type TaxonomyEntityLinksInput = {
  entityIds: Array<Scalars['Int']>;
  taxonomyTermId: Scalars['Int'];
};

export type TaxonomyEntityLinksResponse = {
  __typename?: 'TaxonomyEntityLinksResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type TaxonomyTerm = AbstractNavigationChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'TaxonomyTerm';
  alias: Scalars['String'];
  children: AbstractUuidConnection;
  description?: Maybe<Scalars['String']>;
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  name: Scalars['String'];
  navigation?: Maybe<Navigation>;
  parent?: Maybe<TaxonomyTerm>;
  taxonomyId: Scalars['Int'];
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
  type: TaxonomyTermType;
  weight: Scalars['Int'];
};


export type TaxonomyTermChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TaxonomyTermEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TaxonomyTermThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type TaxonomyTermConnection = {
  __typename?: 'TaxonomyTermConnection';
  edges?: Maybe<Array<Maybe<TaxonomyTermEdge>>>;
  nodes: Array<TaxonomyTerm>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaxonomyTermCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId: Scalars['Int'];
  taxonomyType: TaxonomyTypeCreateOptions;
};

export type TaxonomyTermCreateResponse = {
  __typename?: 'TaxonomyTermCreateResponse';
  query: Query;
  record?: Maybe<TaxonomyTerm>;
  success: Scalars['Boolean'];
};

export type TaxonomyTermEdge = {
  __typename?: 'TaxonomyTermEdge';
  cursor: Scalars['String'];
  node: TaxonomyTerm;
};

export type TaxonomyTermMutation = {
  __typename?: 'TaxonomyTermMutation';
  create: TaxonomyTermCreateResponse;
  createEntityLinks: TaxonomyEntityLinksResponse;
  deleteEntityLinks: TaxonomyEntityLinksResponse;
  setNameAndDescription: TaxonomyTermSetNameAndDescriptionResponse;
  sort: TaxonomyTermSortResponse;
};


export type TaxonomyTermMutationCreateArgs = {
  input: TaxonomyTermCreateInput;
};


export type TaxonomyTermMutationCreateEntityLinksArgs = {
  input: TaxonomyEntityLinksInput;
};


export type TaxonomyTermMutationDeleteEntityLinksArgs = {
  input: TaxonomyEntityLinksInput;
};


export type TaxonomyTermMutationSetNameAndDescriptionArgs = {
  input: TaxonomyTermSetNameAndDescriptionInput;
};


export type TaxonomyTermMutationSortArgs = {
  input: TaxonomyTermSortInput;
};

export type TaxonomyTermSetNameAndDescriptionInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TaxonomyTermSetNameAndDescriptionResponse = {
  __typename?: 'TaxonomyTermSetNameAndDescriptionResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type TaxonomyTermSortInput = {
  childrenIds: Array<Scalars['Int']>;
  taxonomyTermId: Scalars['Int'];
};

export type TaxonomyTermSortResponse = {
  __typename?: 'TaxonomyTermSortResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export enum TaxonomyTermType {
  ExerciseFolder = 'exerciseFolder',
  Root = 'root',
  Subject = 'subject',
  Topic = 'topic'
}

export enum TaxonomyTypeCreateOptions {
  ExerciseFolder = 'exerciseFolder',
  Topic = 'topic'
}

export type Thread = {
  __typename?: 'Thread';
  archived: Scalars['Boolean'];
  comments: CommentConnection;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  object: AbstractUuid;
  title?: Maybe<Scalars['String']>;
  trashed: Scalars['Boolean'];
};


export type ThreadCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ThreadAware = {
  threads: ThreadsConnection;
};


export type ThreadAwareThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type ThreadCreateCommentInput = {
  content: Scalars['String'];
  sendEmail: Scalars['Boolean'];
  subscribe: Scalars['Boolean'];
  threadId: Scalars['String'];
};

export type ThreadCreateCommentResponse = {
  __typename?: 'ThreadCreateCommentResponse';
  query: Query;
  record?: Maybe<Comment>;
  success: Scalars['Boolean'];
};

export type ThreadCreateThreadInput = {
  content: Scalars['String'];
  objectId: Scalars['Int'];
  sendEmail: Scalars['Boolean'];
  subscribe: Scalars['Boolean'];
  title: Scalars['String'];
};

export type ThreadCreateThreadResponse = {
  __typename?: 'ThreadCreateThreadResponse';
  query: Query;
  record?: Maybe<Thread>;
  success: Scalars['Boolean'];
};

export type ThreadMutation = {
  __typename?: 'ThreadMutation';
  createComment?: Maybe<ThreadCreateCommentResponse>;
  createThread?: Maybe<ThreadCreateThreadResponse>;
  setCommentState?: Maybe<ThreadSetCommentStateResponse>;
  setThreadArchived?: Maybe<ThreadSetThreadArchivedResponse>;
  setThreadState?: Maybe<ThreadSetThreadStateResponse>;
};


export type ThreadMutationCreateCommentArgs = {
  input: ThreadCreateCommentInput;
};


export type ThreadMutationCreateThreadArgs = {
  input: ThreadCreateThreadInput;
};


export type ThreadMutationSetCommentStateArgs = {
  input: ThreadSetCommentStateInput;
};


export type ThreadMutationSetThreadArchivedArgs = {
  input: ThreadSetThreadArchivedInput;
};


export type ThreadMutationSetThreadStateArgs = {
  input: ThreadSetThreadStateInput;
};

export type ThreadQuery = {
  __typename?: 'ThreadQuery';
  allThreads: AllThreadsConnection;
};


export type ThreadQueryAllThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
};

export type ThreadSetCommentStateInput = {
  id: Array<Scalars['Int']>;
  trashed: Scalars['Boolean'];
};

export type ThreadSetCommentStateResponse = {
  __typename?: 'ThreadSetCommentStateResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type ThreadSetThreadArchivedInput = {
  archived: Scalars['Boolean'];
  id: Array<Scalars['String']>;
};

export type ThreadSetThreadArchivedResponse = {
  __typename?: 'ThreadSetThreadArchivedResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type ThreadSetThreadStateInput = {
  id: Array<Scalars['String']>;
  trashed: Scalars['Boolean'];
};

export type ThreadSetThreadStateResponse = {
  __typename?: 'ThreadSetThreadStateResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type ThreadsConnection = {
  __typename?: 'ThreadsConnection';
  edges: Array<ThreadsCursor>;
  nodes: Array<Thread>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ThreadsCursor = {
  __typename?: 'ThreadsCursor';
  cursor: Scalars['String'];
  node: Thread;
};

export type User = AbstractUuid & ThreadAware & {
  __typename?: 'User';
  activityByType: UserActivityByType;
  alias: Scalars['String'];
  chatUrl?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  events: AbstractNotificationEventConnection;
  eventsByUser: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  isActiveAuthor: Scalars['Boolean'];
  isActiveDonor: Scalars['Boolean'];
  isActiveReviewer: Scalars['Boolean'];
  isNewAuthor: Scalars['Boolean'];
  language?: Maybe<Instance>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  motivation?: Maybe<Scalars['String']>;
  roles: ScopedRoleConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
  unrevisedEntities: AbstractEntityConnection;
  username: Scalars['String'];
};


export type UserEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserEventsByUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['Int']>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};


export type UserUnrevisedEntitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserActivityByType = {
  __typename?: 'UserActivityByType';
  comments: Scalars['Int'];
  edits: Scalars['Int'];
  reviews: Scalars['Int'];
  taxonomy: Scalars['Int'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserDeleteBotsInput = {
  botIds: Array<Scalars['Int']>;
};

export type UserDeleteBotsResponse = {
  __typename?: 'UserDeleteBotsResponse';
  success: Scalars['Boolean'];
};

export type UserDeleteRegularUsersInput = {
  users: Array<UserDescriptionInput>;
};

export type UserDeleteRegularUsersResponse = {
  __typename?: 'UserDeleteRegularUsersResponse';
  reason?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  username?: Maybe<Scalars['String']>;
};

export type UserDescriptionInput = {
  id: Scalars['Int'];
  username: Scalars['String'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  addRole: UserRoleResponse;
  deleteBots: UserDeleteBotsResponse;
  deleteRegularUsers: Array<UserDeleteRegularUsersResponse>;
  removeRole: UserRoleResponse;
  setDescription: UserSetDescriptionResponse;
  setEmail: UserSetEmailResponse;
};


export type UserMutationAddRoleArgs = {
  input: UserRoleInput;
};


export type UserMutationDeleteBotsArgs = {
  input: UserDeleteBotsInput;
};


export type UserMutationDeleteRegularUsersArgs = {
  input: UserDeleteRegularUsersInput;
};


export type UserMutationRemoveRoleArgs = {
  input: UserRoleInput;
};


export type UserMutationSetDescriptionArgs = {
  input: UserSetDescriptionInput;
};


export type UserMutationSetEmailArgs = {
  input: UserSetEmailInput;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  potentialSpamUsers: UserConnection;
  usersByRole: UserConnection;
};


export type UserQueryPotentialSpamUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserQueryUsersByRoleArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  role: Role;
};

export type UserRoleInput = {
  instance?: InputMaybe<Instance>;
  role: Role;
  username: Scalars['String'];
};

export type UserRoleResponse = {
  __typename?: 'UserRoleResponse';
  success: Scalars['Boolean'];
};

export type UserSetDescriptionInput = {
  description: Scalars['String'];
};

export type UserSetDescriptionResponse = {
  __typename?: 'UserSetDescriptionResponse';
  success: Scalars['Boolean'];
};

export type UserSetEmailInput = {
  email: Scalars['String'];
  userId: Scalars['Int'];
};

export type UserSetEmailResponse = {
  __typename?: 'UserSetEmailResponse';
  email: Scalars['String'];
  success: Scalars['Boolean'];
  username: Scalars['String'];
};

export type UuidMutation = {
  __typename?: 'UuidMutation';
  setState?: Maybe<UuidSetStateResponse>;
};


export type UuidMutationSetStateArgs = {
  input: UuidSetStateInput;
};

export type UuidSetStateInput = {
  id: Array<Scalars['Int']>;
  trashed: Scalars['Boolean'];
};

export type UuidSetStateResponse = {
  __typename?: 'UuidSetStateResponse';
  query: Query;
  success: Scalars['Boolean'];
};

export type Video = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Video';
  alias: Scalars['String'];
  currentRevision?: Maybe<VideoRevision>;
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  instance: Instance;
  license: License;
  revisions: VideoRevisionConnection;
  subject?: Maybe<Subject>;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
};


export type VideoEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VideoRevisionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  unrevised?: InputMaybe<Scalars['Boolean']>;
};


export type VideoTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VideoThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type VideoRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'VideoRevision';
  alias: Scalars['String'];
  author: User;
  changes: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int'];
  repository: Video;
  threads: ThreadsConnection;
  title: Scalars['String'];
  trashed: Scalars['Boolean'];
  url: Scalars['String'];
};


export type VideoRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']>;
};


export type VideoRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  archived?: InputMaybe<Scalars['Boolean']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type VideoRevisionConnection = {
  __typename?: 'VideoRevisionConnection';
  edges: Array<VideoRevisionCursor>;
  nodes: Array<VideoRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type VideoRevisionCursor = {
  __typename?: 'VideoRevisionCursor';
  cursor: Scalars['String'];
  node: VideoRevision;
};

export type _CacheMutation = {
  __typename?: '_cacheMutation';
  remove: CacheRemoveResponse;
  set: CacheSetResponse;
  update: CacheUpdateResponse;
};


export type _CacheMutationRemoveArgs = {
  input: CacheRemoveInput;
};


export type _CacheMutationSetArgs = {
  input: CacheSetInput;
};


export type _CacheMutationUpdateArgs = {
  input: CacheUpdateInput;
};

export type GetNotificationsQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetNotificationsQuery = { __typename?: 'Query', notifications: { __typename?: 'NotificationConnection', nodes: Array<{ __typename?: 'Notification', id: number, event: { __typename: 'CheckoutRevisionNotificationEvent', date: any, id: number, objectId: number, reason: string, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean }, revision: { __typename?: 'AppletRevision', id: number } | { __typename?: 'ArticleRevision', id: number } | { __typename?: 'CoursePageRevision', id: number } | { __typename?: 'CourseRevision', id: number } | { __typename?: 'EventRevision', id: number } | { __typename?: 'ExerciseGroupRevision', id: number } | { __typename?: 'ExerciseRevision', id: number } | { __typename?: 'GroupedExerciseRevision', id: number } | { __typename?: 'PageRevision', id: number } | { __typename?: 'SolutionRevision', id: number } | { __typename?: 'VideoRevision', id: number }, repository: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } } | { __typename: 'CreateCommentNotificationEvent', date: any, id: number, objectId: number, comment: { __typename?: 'Comment', id: number }, thread: { __typename?: 'Thread', id: string, title?: string | null, thread: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number }> }, comment: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number, content: string }> } }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateEntityLinkNotificationEvent', date: any, id: number, objectId: number, parent: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateEntityNotificationEvent', date: any, id: number, objectId: number, entity: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateEntityRevisionNotificationEvent', date: any, id: number, objectId: number, entityRevision: { __typename?: 'AppletRevision', id: number } | { __typename?: 'ArticleRevision', id: number } | { __typename?: 'CoursePageRevision', id: number } | { __typename?: 'CourseRevision', id: number } | { __typename?: 'EventRevision', id: number } | { __typename?: 'ExerciseGroupRevision', id: number } | { __typename?: 'ExerciseRevision', id: number } | { __typename?: 'GroupedExerciseRevision', id: number } | { __typename?: 'PageRevision', id: number } | { __typename?: 'SolutionRevision', id: number } | { __typename?: 'VideoRevision', id: number }, entity: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateTaxonomyLinkNotificationEvent', date: any, id: number, objectId: number, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string, exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } | { __typename: 'GroupedExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string, exercise: { __typename: 'Exercise', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'GroupedExercise', exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } } | { __typename: 'SolutionRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, parent: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateTaxonomyTermNotificationEvent', date: any, id: number, objectId: number, taxonomyTerm: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateThreadNotificationEvent', date: any, id: number, objectId: number, thread: { __typename?: 'Thread', id: string, thread: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number, content: string }> } }, object: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'GroupedExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'SolutionRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'RejectRevisionNotificationEvent', reason: string, date: any, id: number, objectId: number, repository: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, revision: { __typename?: 'AppletRevision', id: number, alias: string } | { __typename?: 'ArticleRevision', id: number, alias: string } | { __typename?: 'CoursePageRevision', id: number, alias: string } | { __typename?: 'CourseRevision', id: number, alias: string } | { __typename?: 'EventRevision', id: number, alias: string } | { __typename?: 'ExerciseGroupRevision', id: number, alias: string } | { __typename?: 'ExerciseRevision', id: number, alias: string } | { __typename?: 'GroupedExerciseRevision', id: number, alias: string } | { __typename?: 'PageRevision', id: number, alias: string } | { __typename?: 'SolutionRevision', id: number, alias: string } | { __typename?: 'VideoRevision', id: number, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'RemoveEntityLinkNotificationEvent', date: any, id: number, objectId: number, parent: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'RemoveTaxonomyLinkNotificationEvent', date: any, id: number, objectId: number, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string, exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } | { __typename: 'GroupedExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string, exercise: { __typename: 'Exercise', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'GroupedExercise', exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } } | { __typename: 'SolutionRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, parent: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetLicenseNotificationEvent', date: any, id: number, objectId: number, repository: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetTaxonomyParentNotificationEvent', date: any, id: number, objectId: number, child: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, previousParent?: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | null, optionalParent?: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | null, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetTaxonomyTermNotificationEvent', date: any, id: number, objectId: number, taxonomyTerm: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetThreadStateNotificationEvent', archived: boolean, date: any, id: number, objectId: number, thread: { __typename?: 'Thread', id: string, thread: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number }> } }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetUuidStateNotificationEvent', trashed: boolean, date: any, id: number, objectId: number, object: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'GroupedExercise', id: number, title: string, alias: string, exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } | { __typename: 'GroupedExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'Solution', id: number, title: string, alias: string, exercise: { __typename: 'Exercise', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'GroupedExercise', exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } } | { __typename: 'SolutionRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } }> } };

type EntityInfo_Applet_Fragment = { __typename: 'Applet', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Applet_Fragment' };

type EntityInfo_AppletRevision_Fragment = { __typename: 'AppletRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_AppletRevision_Fragment' };

type EntityInfo_Article_Fragment = { __typename: 'Article', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Article_Fragment' };

type EntityInfo_ArticleRevision_Fragment = { __typename: 'ArticleRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_ArticleRevision_Fragment' };

type EntityInfo_Comment_Fragment = { __typename: 'Comment', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Comment_Fragment' };

type EntityInfo_Course_Fragment = { __typename: 'Course', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Course_Fragment' };

type EntityInfo_CoursePage_Fragment = { __typename: 'CoursePage', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_CoursePage_Fragment' };

type EntityInfo_CoursePageRevision_Fragment = { __typename: 'CoursePageRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_CoursePageRevision_Fragment' };

type EntityInfo_CourseRevision_Fragment = { __typename: 'CourseRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_CourseRevision_Fragment' };

type EntityInfo_Event_Fragment = { __typename: 'Event', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Event_Fragment' };

type EntityInfo_EventRevision_Fragment = { __typename: 'EventRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_EventRevision_Fragment' };

type EntityInfo_Exercise_Fragment = { __typename: 'Exercise', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Exercise_Fragment' };

type EntityInfo_ExerciseGroup_Fragment = { __typename: 'ExerciseGroup', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_ExerciseGroup_Fragment' };

type EntityInfo_ExerciseGroupRevision_Fragment = { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_ExerciseGroupRevision_Fragment' };

type EntityInfo_ExerciseRevision_Fragment = { __typename: 'ExerciseRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_ExerciseRevision_Fragment' };

type EntityInfo_GroupedExercise_Fragment = { __typename: 'GroupedExercise', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_GroupedExercise_Fragment' };

type EntityInfo_GroupedExerciseRevision_Fragment = { __typename: 'GroupedExerciseRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_GroupedExerciseRevision_Fragment' };

type EntityInfo_Page_Fragment = { __typename: 'Page', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Page_Fragment' };

type EntityInfo_PageRevision_Fragment = { __typename: 'PageRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_PageRevision_Fragment' };

type EntityInfo_Solution_Fragment = { __typename: 'Solution', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Solution_Fragment' };

type EntityInfo_SolutionRevision_Fragment = { __typename: 'SolutionRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_SolutionRevision_Fragment' };

type EntityInfo_TaxonomyTerm_Fragment = { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_TaxonomyTerm_Fragment' };

type EntityInfo_User_Fragment = { __typename: 'User', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_User_Fragment' };

type EntityInfo_Video_Fragment = { __typename: 'Video', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_Video_Fragment' };

type EntityInfo_VideoRevision_Fragment = { __typename: 'VideoRevision', id: number, title: string, alias: string } & { ' $fragmentName'?: 'EntityInfo_VideoRevision_Fragment' };

export type EntityInfoFragment = EntityInfo_Applet_Fragment | EntityInfo_AppletRevision_Fragment | EntityInfo_Article_Fragment | EntityInfo_ArticleRevision_Fragment | EntityInfo_Comment_Fragment | EntityInfo_Course_Fragment | EntityInfo_CoursePage_Fragment | EntityInfo_CoursePageRevision_Fragment | EntityInfo_CourseRevision_Fragment | EntityInfo_Event_Fragment | EntityInfo_EventRevision_Fragment | EntityInfo_Exercise_Fragment | EntityInfo_ExerciseGroup_Fragment | EntityInfo_ExerciseGroupRevision_Fragment | EntityInfo_ExerciseRevision_Fragment | EntityInfo_GroupedExercise_Fragment | EntityInfo_GroupedExerciseRevision_Fragment | EntityInfo_Page_Fragment | EntityInfo_PageRevision_Fragment | EntityInfo_Solution_Fragment | EntityInfo_SolutionRevision_Fragment | EntityInfo_TaxonomyTerm_Fragment | EntityInfo_User_Fragment | EntityInfo_Video_Fragment | EntityInfo_VideoRevision_Fragment;

type WithTaxonomyTerms_Applet_Fragment = { __typename?: 'Applet' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Applet_Fragment' };

type WithTaxonomyTerms_AppletRevision_Fragment = { __typename?: 'AppletRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_AppletRevision_Fragment' };

type WithTaxonomyTerms_Article_Fragment = { __typename?: 'Article' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Article_Fragment' };

type WithTaxonomyTerms_ArticleRevision_Fragment = { __typename?: 'ArticleRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_ArticleRevision_Fragment' };

type WithTaxonomyTerms_Comment_Fragment = { __typename?: 'Comment' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Comment_Fragment' };

type WithTaxonomyTerms_Course_Fragment = { __typename?: 'Course' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Course_Fragment' };

type WithTaxonomyTerms_CoursePage_Fragment = { __typename?: 'CoursePage' } & { ' $fragmentName'?: 'WithTaxonomyTerms_CoursePage_Fragment' };

type WithTaxonomyTerms_CoursePageRevision_Fragment = { __typename?: 'CoursePageRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_CoursePageRevision_Fragment' };

type WithTaxonomyTerms_CourseRevision_Fragment = { __typename?: 'CourseRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_CourseRevision_Fragment' };

type WithTaxonomyTerms_Event_Fragment = { __typename?: 'Event' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Event_Fragment' };

type WithTaxonomyTerms_EventRevision_Fragment = { __typename?: 'EventRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_EventRevision_Fragment' };

type WithTaxonomyTerms_Exercise_Fragment = { __typename?: 'Exercise', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } & { ' $fragmentName'?: 'WithTaxonomyTerms_Exercise_Fragment' };

type WithTaxonomyTerms_ExerciseGroup_Fragment = { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } & { ' $fragmentName'?: 'WithTaxonomyTerms_ExerciseGroup_Fragment' };

type WithTaxonomyTerms_ExerciseGroupRevision_Fragment = { __typename?: 'ExerciseGroupRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_ExerciseGroupRevision_Fragment' };

type WithTaxonomyTerms_ExerciseRevision_Fragment = { __typename?: 'ExerciseRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_ExerciseRevision_Fragment' };

type WithTaxonomyTerms_GroupedExercise_Fragment = { __typename?: 'GroupedExercise', exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } & { ' $fragmentName'?: 'WithTaxonomyTerms_GroupedExercise_Fragment' };

type WithTaxonomyTerms_GroupedExerciseRevision_Fragment = { __typename?: 'GroupedExerciseRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_GroupedExerciseRevision_Fragment' };

type WithTaxonomyTerms_Page_Fragment = { __typename?: 'Page' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Page_Fragment' };

type WithTaxonomyTerms_PageRevision_Fragment = { __typename?: 'PageRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_PageRevision_Fragment' };

type WithTaxonomyTerms_Solution_Fragment = { __typename?: 'Solution', exercise: { __typename: 'Exercise', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'GroupedExercise', exerciseGroup: { __typename?: 'ExerciseGroup', taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } } } & { ' $fragmentName'?: 'WithTaxonomyTerms_Solution_Fragment' };

type WithTaxonomyTerms_SolutionRevision_Fragment = { __typename?: 'SolutionRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_SolutionRevision_Fragment' };

type WithTaxonomyTerms_TaxonomyTerm_Fragment = { __typename?: 'TaxonomyTerm' } & { ' $fragmentName'?: 'WithTaxonomyTerms_TaxonomyTerm_Fragment' };

type WithTaxonomyTerms_User_Fragment = { __typename?: 'User' } & { ' $fragmentName'?: 'WithTaxonomyTerms_User_Fragment' };

type WithTaxonomyTerms_Video_Fragment = { __typename?: 'Video' } & { ' $fragmentName'?: 'WithTaxonomyTerms_Video_Fragment' };

type WithTaxonomyTerms_VideoRevision_Fragment = { __typename?: 'VideoRevision' } & { ' $fragmentName'?: 'WithTaxonomyTerms_VideoRevision_Fragment' };

export type WithTaxonomyTermsFragment = WithTaxonomyTerms_Applet_Fragment | WithTaxonomyTerms_AppletRevision_Fragment | WithTaxonomyTerms_Article_Fragment | WithTaxonomyTerms_ArticleRevision_Fragment | WithTaxonomyTerms_Comment_Fragment | WithTaxonomyTerms_Course_Fragment | WithTaxonomyTerms_CoursePage_Fragment | WithTaxonomyTerms_CoursePageRevision_Fragment | WithTaxonomyTerms_CourseRevision_Fragment | WithTaxonomyTerms_Event_Fragment | WithTaxonomyTerms_EventRevision_Fragment | WithTaxonomyTerms_Exercise_Fragment | WithTaxonomyTerms_ExerciseGroup_Fragment | WithTaxonomyTerms_ExerciseGroupRevision_Fragment | WithTaxonomyTerms_ExerciseRevision_Fragment | WithTaxonomyTerms_GroupedExercise_Fragment | WithTaxonomyTerms_GroupedExerciseRevision_Fragment | WithTaxonomyTerms_Page_Fragment | WithTaxonomyTerms_PageRevision_Fragment | WithTaxonomyTerms_Solution_Fragment | WithTaxonomyTerms_SolutionRevision_Fragment | WithTaxonomyTerms_TaxonomyTerm_Fragment | WithTaxonomyTerms_User_Fragment | WithTaxonomyTerms_Video_Fragment | WithTaxonomyTerms_VideoRevision_Fragment;

export const EntityInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"entityInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]} as unknown as DocumentNode<EntityInfoFragment, unknown>;
export const WithTaxonomyTermsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"withTaxonomyTerms"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<WithTaxonomyTermsFragment, unknown>;
export const GetNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"unread"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"emailSent"},"value":{"kind":"BooleanValue","value":false}},{"kind":"Argument","name":{"kind":"Name","value":"emailSubscribed"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"isActiveAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"isActiveDonor"}},{"kind":"Field","name":{"kind":"Name","value":"isActiveReviewer"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutRevisionNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"thread"},"name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"comment"},"name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityRevisionNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityRevision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaxonomyTermNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaxonomyLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateThreadNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"thread"},"name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RejectRevisionNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveEntityLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveTaxonomyLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetLicenseNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetTaxonomyParentNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousParent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"optionalParent"},"name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetTaxonomyTermNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetThreadStateNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archived"}},{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"thread"},"name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetUuidStateNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Solution"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exercise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GroupedExercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"exerciseGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trashed"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNotificationsQuery, GetNotificationsQueryVariables>;