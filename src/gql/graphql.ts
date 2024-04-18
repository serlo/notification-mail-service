/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type AbstractEntity = {
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<AbstractEntityRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: AbstractEntityRevisionConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type AbstractEntityEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AbstractEntityRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AbstractEntityConnection = {
  __typename?: 'AbstractEntityConnection';
  edges: Array<AbstractEntityCursor>;
  nodes: Array<AbstractEntity>;
  pageInfo: HasNextPageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AbstractEntityCursor = {
  __typename?: 'AbstractEntityCursor';
  cursor: Scalars['String']['output'];
  node: AbstractEntity;
};

export type AbstractEntityRevision = {
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  repository: AbstractEntity;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type AbstractEntityRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AbstractEntityRevisionConnection = {
  nodes: Array<AbstractEntityRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AbstractNotificationEvent = {
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
};

export type AbstractNotificationEventConnection = {
  __typename?: 'AbstractNotificationEventConnection';
  edges: Array<AbstractNotificationEventEdge>;
  nodes: Array<AbstractNotificationEvent>;
  pageInfo: HasNextPageInfo;
};

export type AbstractNotificationEventEdge = {
  __typename?: 'AbstractNotificationEventEdge';
  cursor: Scalars['String']['output'];
  node: AbstractNotificationEvent;
};

export type AbstractRepository = {
  alias: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type AbstractRepositoryEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AbstractRepositoryThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AbstractRevision = {
  alias: Scalars['String']['output'];
  author: User;
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type AbstractRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AbstractRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AbstractTaxonomyTermChild = {
  alias: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  taxonomyTerms: TaxonomyTermConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type AbstractTaxonomyTermChildEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AbstractTaxonomyTermChildTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AbstractUuid = {
  alias: Scalars['String']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type AbstractUuidEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AbstractUuidConnection = {
  __typename?: 'AbstractUuidConnection';
  nodes: Array<AbstractUuid>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AiQuery = {
  __typename?: 'AiQuery';
  executePrompt: ExecutePromptResponse;
};


export type AiQueryExecutePromptArgs = {
  messages: Array<ChatCompletionMessageParam>;
};

export type AliasInput = {
  instance: Instance;
  path: Scalars['String']['input'];
};

export type Applet = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Applet';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<AppletRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: AppletRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type AppletEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AppletRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AppletTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AppletThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AppletRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'AppletRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  repository: Applet;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};


export type AppletRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AppletRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AppletRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'AppletRevisionConnection';
  nodes: Array<AppletRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Article = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Article';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<ArticleRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: ArticleRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type ArticleEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticleTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'ArticleRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  repository: Article;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type ArticleRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'ArticleRevisionConnection';
  nodes: Array<ArticleRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CacheRemoveInput = {
  keys: Array<Scalars['String']['input']>;
};

export type ChatCompletionMessageParam = {
  content: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type CheckoutRevisionInput = {
  reason: Scalars['String']['input'];
  revisionId: Scalars['Int']['input'];
};

export type CheckoutRevisionNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CheckoutRevisionNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  reason: Scalars['String']['output'];
  repository: AbstractRepository;
  revision: AbstractRevision;
};

export type Comment = AbstractUuid & {
  __typename?: 'Comment';
  alias: Scalars['String']['output'];
  archived: Scalars['Boolean']['output'];
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  legacyObject: AbstractUuid;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type CommentEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum CommentStatus {
  Done = 'done',
  NoStatus = 'noStatus',
  Open = 'open'
}

export type Course = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Course';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<CourseRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  pages: Array<CoursePage>;
  revisions: CourseRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type CourseEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CoursePagesArgs = {
  hasCurrentRevision?: InputMaybe<Scalars['Boolean']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CourseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CourseTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoursePage = AbstractEntity & AbstractRepository & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'CoursePage';
  alias: Scalars['String']['output'];
  course: Course;
  currentRevision?: Maybe<CoursePageRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: CoursePageRevisionConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type CoursePageEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CoursePageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CoursePageThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoursePageRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'CoursePageRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  repository: CoursePage;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type CoursePageRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CoursePageRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoursePageRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'CoursePageRevisionConnection';
  nodes: Array<CoursePageRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CourseRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'CourseRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle?: Maybe<Scalars['String']['output']>;
  repository: Course;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type CourseRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'CourseRevisionConnection';
  nodes: Array<CourseRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateCommentNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateCommentNotificationEvent';
  actor: User;
  comment: Comment;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  thread: Thread;
};

export type CreateEntityLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateEntityLinkNotificationEvent';
  actor: User;
  child: AbstractEntity;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  parent: AbstractEntity;
};

export type CreateEntityNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateEntityNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  entity: AbstractEntity;
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
};

export type CreateEntityRevisionNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateEntityRevisionNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  entity: AbstractRepository;
  entityRevision: AbstractRevision;
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
};

export type CreatePageInput = {
  content: Scalars['String']['input'];
  discussionsEnabled: Scalars['Boolean']['input'];
  forumId?: InputMaybe<Scalars['Int']['input']>;
  instance: Instance;
  licenseId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateTaxonomyLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateTaxonomyLinkNotificationEvent';
  actor: User;
  child: AbstractUuid;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  parent: TaxonomyTerm;
};

export type CreateTaxonomyTermNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateTaxonomyTermNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  taxonomyTerm: TaxonomyTerm;
};

export type CreateThreadNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'CreateThreadNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  object: AbstractUuid;
  objectId: Scalars['Int']['output'];
  thread: Thread;
};

export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  query: Query;
  success: Scalars['Boolean']['output'];
};

export type DeletedEntity = {
  __typename?: 'DeletedEntity';
  dateOfDeletion?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<AbstractEntity>;
};

export type DeletedEntityConnection = {
  __typename?: 'DeletedEntityConnection';
  edges: Array<DeletedEntityCursor>;
  nodes: Array<DeletedEntity>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DeletedEntityCursor = {
  __typename?: 'DeletedEntityCursor';
  cursor: Scalars['String']['output'];
  node: DeletedEntity;
};

export type EntityMutation = {
  __typename?: 'EntityMutation';
  checkoutRevision: DefaultResponse;
  rejectRevision: DefaultResponse;
  setAbstractEntity: SetEntityResponse;
  sort: DefaultResponse;
  updateLicense: DefaultResponse;
};


export type EntityMutationCheckoutRevisionArgs = {
  input: CheckoutRevisionInput;
};


export type EntityMutationRejectRevisionArgs = {
  input: RejectRevisionInput;
};


export type EntityMutationSetAbstractEntityArgs = {
  input: SetAbstractEntityInput;
};


export type EntityMutationSortArgs = {
  input: EntitySortInput;
};


export type EntityMutationUpdateLicenseArgs = {
  input: EntityUpdateLicenseInput;
};

export type EntityQuery = {
  __typename?: 'EntityQuery';
  deletedEntities: DeletedEntityConnection;
};


export type EntityQueryDeletedEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
};

export type EntitySortInput = {
  childrenIds: Array<Scalars['Int']['input']>;
  entityId: Scalars['Int']['input'];
};

export type EntityUpdateLicenseInput = {
  entityId: Scalars['Int']['input'];
  licenseId: Scalars['Int']['input'];
};

export type Event = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Event';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<EventRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: EventRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type EventEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EventRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EventThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'EventRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  repository: Event;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type EventRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type EventRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'EventRevisionConnection';
  edges: Array<EventRevisionCursor>;
  nodes: Array<EventRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventRevisionCursor = {
  __typename?: 'EventRevisionCursor';
  cursor: Scalars['String']['output'];
  node: EventRevision;
};

export type ExecutePromptResponse = {
  __typename?: 'ExecutePromptResponse';
  record: Scalars['JSONObject']['output'];
  success: Scalars['Boolean']['output'];
};

export type Exercise = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Exercise';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<ExerciseRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: ExerciseRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type ExerciseEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ExerciseRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ExerciseTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ExerciseThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExerciseGroup = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'ExerciseGroup';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<ExerciseGroupRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: ExerciseGroupRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type ExerciseGroupEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ExerciseGroupRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ExerciseGroupTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ExerciseGroupThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExerciseGroupRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'ExerciseGroupRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  repository: ExerciseGroup;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type ExerciseGroupRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ExerciseGroupRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExerciseGroupRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'ExerciseGroupRevisionConnection';
  edges: Array<ExerciseGroupRevisionCursor>;
  nodes: Array<ExerciseGroupRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ExerciseGroupRevisionCursor = {
  __typename?: 'ExerciseGroupRevisionCursor';
  cursor: Scalars['String']['output'];
  node: ExerciseGroupRevision;
};

export type ExerciseRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'ExerciseRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  repository: Exercise;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type ExerciseRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ExerciseRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExerciseRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'ExerciseRevisionConnection';
  edges: Array<ExerciseRevisionCursor>;
  nodes: Array<ExerciseRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ExerciseRevisionCursor = {
  __typename?: 'ExerciseRevisionCursor';
  cursor: Scalars['String']['output'];
  node: ExerciseRevision;
};

export type ExerciseSubmissionInput = {
  entityId: Scalars['Int']['input'];
  path: Scalars['String']['input'];
  result: Scalars['String']['input'];
  revisionId: Scalars['Int']['input'];
  sessionId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ExperimentMutation = {
  __typename?: 'ExperimentMutation';
  createExerciseSubmission: DefaultResponse;
};


export type ExperimentMutationCreateExerciseSubmissionArgs = {
  input: ExerciseSubmissionInput;
};

export type HasNextPageInfo = {
  __typename?: 'HasNextPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
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
  uploadUrl: Scalars['String']['output'];
  urlAfterUpload: Scalars['String']['output'];
};

export type MetadataQuery = {
  __typename?: 'MetadataQuery';
  /** @deprecated Please use the `resources` field instead. This property will be deleted. */
  entities: ResourceMetadataConnection;
  publisher: Scalars['JSONObject']['output'];
  resources: ResourceMetadataConnection;
  version: Scalars['String']['output'];
};


export type MetadataQueryEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  modifiedAfter?: InputMaybe<Scalars['String']['input']>;
};


export type MetadataQueryResourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  modifiedAfter?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _cache: _CacheMutation;
  entity: EntityMutation;
  experiment: ExperimentMutation;
  notification: NotificationMutation;
  oauth: OauthMutation;
  page: PageMutation;
  subscription: SubscriptionMutation;
  taxonomyTerm: TaxonomyTermMutation;
  thread: ThreadMutation;
  user: UserMutation;
  uuid: UuidMutation;
};

export type Notification = {
  __typename?: 'Notification';
  email: Scalars['Boolean']['output'];
  emailSent: Scalars['Boolean']['output'];
  event?: Maybe<AbstractNotificationEvent>;
  id: Scalars['Int']['output'];
  unread: Scalars['Boolean']['output'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type NotificationMutation = {
  __typename?: 'NotificationMutation';
  setState?: Maybe<DefaultResponse>;
};


export type NotificationMutationSetStateArgs = {
  input: NotificationSetStateInput;
};

export type NotificationSetStateInput = {
  id: Array<Scalars['Int']['input']>;
  unread: Scalars['Boolean']['input'];
};

export type OauthAcceptInput = {
  challenge: Scalars['String']['input'];
  session: Scalars['JSON']['input'];
};

export type OauthAcceptResponse = {
  __typename?: 'OauthAcceptResponse';
  redirectUri: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
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
  challenge: Scalars['String']['input'];
};

export type Page = AbstractRepository & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Page';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<PageRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: PageRevisionConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type PageEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageAddRevisionInput = {
  content: Scalars['String']['input'];
  pageId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageMutation = {
  __typename?: 'PageMutation';
  addRevision: DefaultResponse;
  checkoutRevision: DefaultResponse;
  create: DefaultResponse;
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

export type PageQuery = {
  __typename?: 'PageQuery';
  pages: Array<Page>;
};


export type PageQueryPagesArgs = {
  instance?: InputMaybe<Instance>;
};

export type PageRevision = AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'PageRevision';
  alias: Scalars['String']['output'];
  author: User;
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  repository: Page;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type PageRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PageRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageRevisionConnection = {
  __typename?: 'PageRevisionConnection';
  edges: Array<PageRevisionCursor>;
  nodes: Array<PageRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageRevisionCursor = {
  __typename?: 'PageRevisionCursor';
  cursor: Scalars['String']['output'];
  node: PageRevision;
};

export type Query = {
  __typename?: 'Query';
  ai: AiQuery;
  authorization: Scalars['JSON']['output'];
  entity?: Maybe<EntityQuery>;
  events: AbstractNotificationEventConnection;
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
  version: Scalars['String']['output'];
};


export type QueryEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotificationEventArgs = {
  id: Scalars['Int']['input'];
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  emailSent?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unread?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUuidArgs = {
  alias?: InputMaybe<AliasInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type RejectRevisionInput = {
  reason: Scalars['String']['input'];
  revisionId: Scalars['Int']['input'];
};

export type RejectRevisionNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'RejectRevisionNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  reason: Scalars['String']['output'];
  repository: AbstractRepository;
  revision: AbstractRevision;
};

export type RemoveEntityLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'RemoveEntityLinkNotificationEvent';
  actor: User;
  child: AbstractEntity;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  parent: AbstractEntity;
};

export type RemoveTaxonomyLinkNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'RemoveTaxonomyLinkNotificationEvent';
  actor: User;
  child: AbstractUuid;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  parent: TaxonomyTerm;
};

export type ResourceMetadataConnection = {
  __typename?: 'ResourceMetadataConnection';
  nodes: Array<Scalars['JSONObject']['output']>;
  pageInfo: HasNextPageInfo;
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
  scope?: Maybe<Scalars['String']['output']>;
};

export type ScopedRoleConnection = {
  __typename?: 'ScopedRoleConnection';
  edges: Array<ScopedRoleCursor>;
  nodes: Array<ScopedRole>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScopedRoleCursor = {
  __typename?: 'ScopedRoleCursor';
  cursor: Scalars['String']['output'];
  node: ScopedRole;
};

export type SetAbstractEntityInput = {
  changes: Scalars['String']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: Scalars['String']['input'];
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  needsReview: Scalars['Boolean']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  subscribeThis: Scalars['Boolean']['input'];
  subscribeThisByEmail: Scalars['Boolean']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SetEntityResponse = {
  __typename?: 'SetEntityResponse';
  query: Query;
  record?: Maybe<AbstractEntity>;
  success: Scalars['Boolean']['output'];
};

export type SetLicenseNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetLicenseNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  repository: AbstractRepository;
};

export type SetTaxonomyParentNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetTaxonomyParentNotificationEvent';
  actor: User;
  child: TaxonomyTerm;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  parent?: Maybe<TaxonomyTerm>;
  previousParent?: Maybe<TaxonomyTerm>;
};

export type SetTaxonomyTermNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetTaxonomyTermNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  taxonomyTerm: TaxonomyTerm;
};

export type SetThreadStateNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetThreadStateNotificationEvent';
  actor: User;
  archived: Scalars['Boolean']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  objectId: Scalars['Int']['output'];
  thread: Thread;
};

export type SetUuidStateNotificationEvent = AbstractNotificationEvent & InstanceAware & {
  __typename?: 'SetUuidStateNotificationEvent';
  actor: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  instance: Instance;
  object: AbstractUuid;
  objectId: Scalars['Int']['output'];
  trashed: Scalars['Boolean']['output'];
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['String']['output'];
  taxonomyTerm: TaxonomyTerm;
  unrevisedEntities: AbstractEntityConnection;
};


export type SubjectUnrevisedEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SubjectQuery = {
  __typename?: 'SubjectQuery';
  subjects: Array<Subject>;
};


export type SubjectQuerySubjectsArgs = {
  instance: Instance;
};

export type SubscriptionCursor = {
  __typename?: 'SubscriptionCursor';
  cursor: Scalars['String']['output'];
  node: SubscriptionInfo;
};

export type SubscriptionInfo = {
  __typename?: 'SubscriptionInfo';
  object: AbstractUuid;
  sendEmail: Scalars['Boolean']['output'];
};

export type SubscriptionInfoConnection = {
  __typename?: 'SubscriptionInfoConnection';
  edges: Array<SubscriptionCursor>;
  nodes: Array<SubscriptionInfo>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SubscriptionMutation = {
  __typename?: 'SubscriptionMutation';
  set: DefaultResponse;
};


export type SubscriptionMutationSetArgs = {
  input: SubscriptionSetInput;
};

export type SubscriptionQuery = {
  __typename?: 'SubscriptionQuery';
  currentUserHasSubscribed: Scalars['Boolean']['output'];
  getSubscriptions: SubscriptionInfoConnection;
};


export type SubscriptionQueryCurrentUserHasSubscribedArgs = {
  id: Scalars['Int']['input'];
};


export type SubscriptionQueryGetSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscriptionSetInput = {
  id: Array<Scalars['Int']['input']>;
  sendEmail: Scalars['Boolean']['input'];
  subscribe: Scalars['Boolean']['input'];
};

export type TaxonomyEntityLinksInput = {
  entityIds: Array<Scalars['Int']['input']>;
  taxonomyTermId: Scalars['Int']['input'];
};

export type TaxonomyTerm = AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'TaxonomyTerm';
  alias: Scalars['String']['output'];
  children: AbstractUuidConnection;
  description?: Maybe<Scalars['String']['output']>;
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  name: Scalars['String']['output'];
  parent?: Maybe<TaxonomyTerm>;
  path: Array<Maybe<TaxonomyTerm>>;
  taxonomyId: Scalars['Int']['output'];
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  type: TaxonomyTermType;
  weight: Scalars['Int']['output'];
};


export type TaxonomyTermChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TaxonomyTermEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TaxonomyTermThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaxonomyTermConnection = {
  __typename?: 'TaxonomyTermConnection';
  edges?: Maybe<Array<Maybe<TaxonomyTermEdge>>>;
  nodes: Array<TaxonomyTerm>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TaxonomyTermCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId: Scalars['Int']['input'];
  taxonomyType: TaxonomyTypeCreateOptions;
};

export type TaxonomyTermEdge = {
  __typename?: 'TaxonomyTermEdge';
  cursor: Scalars['String']['output'];
  node: TaxonomyTerm;
};

export type TaxonomyTermMutation = {
  __typename?: 'TaxonomyTermMutation';
  create: DefaultResponse;
  createEntityLinks: DefaultResponse;
  deleteEntityLinks: DefaultResponse;
  setNameAndDescription: DefaultResponse;
  sort: DefaultResponse;
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
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type TaxonomyTermSortInput = {
  childrenIds: Array<Scalars['Int']['input']>;
  taxonomyTermId: Scalars['Int']['input'];
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
  archived: Scalars['Boolean']['output'];
  comments: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  object: AbstractUuid;
  status: CommentStatus;
  title?: Maybe<Scalars['String']['output']>;
  trashed: Scalars['Boolean']['output'];
};


export type ThreadCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadAware = {
  threads: ThreadConnection;
};


export type ThreadAwareThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ThreadConnection = {
  __typename?: 'ThreadConnection';
  edges: Array<ThreadCursor>;
  nodes: Array<Thread>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ThreadCreateCommentInput = {
  content: Scalars['String']['input'];
  sendEmail: Scalars['Boolean']['input'];
  subscribe: Scalars['Boolean']['input'];
  threadId: Scalars['String']['input'];
};

export type ThreadCreateThreadInput = {
  content: Scalars['String']['input'];
  objectId: Scalars['Int']['input'];
  sendEmail: Scalars['Boolean']['input'];
  subscribe: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type ThreadCursor = {
  __typename?: 'ThreadCursor';
  cursor: Scalars['String']['output'];
  node: Thread;
};

export type ThreadEditCommentInput = {
  commentId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
};

export type ThreadMutation = {
  __typename?: 'ThreadMutation';
  createComment: DefaultResponse;
  createThread: DefaultResponse;
  editComment: DefaultResponse;
  setCommentState: DefaultResponse;
  setThreadArchived: DefaultResponse;
  setThreadState: DefaultResponse;
  setThreadStatus: DefaultResponse;
};


export type ThreadMutationCreateCommentArgs = {
  input: ThreadCreateCommentInput;
};


export type ThreadMutationCreateThreadArgs = {
  input: ThreadCreateThreadInput;
};


export type ThreadMutationEditCommentArgs = {
  input: ThreadEditCommentInput;
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


export type ThreadMutationSetThreadStatusArgs = {
  input: ThreadSetThreadStatusInput;
};

export type ThreadQuery = {
  __typename?: 'ThreadQuery';
  allThreads: ThreadConnection;
};


export type ThreadQueryAllThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  status?: InputMaybe<CommentStatus>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
};

export type ThreadSetCommentStateInput = {
  id: Array<Scalars['Int']['input']>;
  trashed: Scalars['Boolean']['input'];
};

export type ThreadSetThreadArchivedInput = {
  archived: Scalars['Boolean']['input'];
  id: Array<Scalars['String']['input']>;
};

export type ThreadSetThreadStateInput = {
  id: Array<Scalars['String']['input']>;
  trashed: Scalars['Boolean']['input'];
};

export type ThreadSetThreadStatusInput = {
  id: Array<Scalars['String']['input']>;
  status: CommentStatus;
};

export type User = AbstractUuid & ThreadAware & {
  __typename?: 'User';
  activityByType: UserActivityByType;
  alias: Scalars['String']['output'];
  chatUrl?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  events: AbstractNotificationEventConnection;
  eventsByUser: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  isActiveAuthor: Scalars['Boolean']['output'];
  isActiveDonor: Scalars['Boolean']['output'];
  isActiveReviewer: Scalars['Boolean']['output'];
  isNewAuthor: Scalars['Boolean']['output'];
  language?: Maybe<Instance>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  motivation?: Maybe<Scalars['String']['output']>;
  roles: ScopedRoleConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  unrevisedEntities: AbstractEntityConnection;
  username: Scalars['String']['output'];
};


export type UserEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserEventsByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserUnrevisedEntitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type UserActivityByType = {
  __typename?: 'UserActivityByType';
  comments: Scalars['Int']['output'];
  edits: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  taxonomy: Scalars['Int']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserDeleteBotsInput = {
  botIds: Array<Scalars['Int']['input']>;
};

export type UserDeleteRegularUsersInput = {
  id: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type UserDeleteRegularUsersResponse = {
  __typename?: 'UserDeleteRegularUsersResponse';
  reason?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  addRole: DefaultResponse;
  deleteBots: DefaultResponse;
  deleteRegularUser: DefaultResponse;
  removeRole: DefaultResponse;
  setDescription: DefaultResponse;
  setEmail: DefaultResponse;
};


export type UserMutationAddRoleArgs = {
  input: UserRoleInput;
};


export type UserMutationDeleteBotsArgs = {
  input: UserDeleteBotsInput;
};


export type UserMutationDeleteRegularUserArgs = {
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
  userByUsername?: Maybe<User>;
  usersByRole: UserConnection;
};


export type UserQueryPotentialSpamUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type UserQueryUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type UserQueryUsersByRoleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  role: Role;
};

export type UserRoleInput = {
  instance?: InputMaybe<Instance>;
  role: Role;
  username: Scalars['String']['input'];
};

export type UserSetDescriptionInput = {
  description: Scalars['String']['input'];
};

export type UserSetEmailInput = {
  email: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type UuidMutation = {
  __typename?: 'UuidMutation';
  setState: DefaultResponse;
};


export type UuidMutationSetStateArgs = {
  input: UuidSetStateInput;
};

export type UuidSetStateInput = {
  id: Array<Scalars['Int']['input']>;
  trashed: Scalars['Boolean']['input'];
};

export type Video = AbstractEntity & AbstractRepository & AbstractTaxonomyTermChild & AbstractUuid & InstanceAware & ThreadAware & {
  __typename?: 'Video';
  alias: Scalars['String']['output'];
  currentRevision?: Maybe<VideoRevision>;
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  instance: Instance;
  licenseId: Scalars['Int']['output'];
  revisions: VideoRevisionConnection;
  taxonomyTerms: TaxonomyTermConnection;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
};


export type VideoEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoRevisionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  unrevised?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VideoTaxonomyTermsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoRevision = AbstractEntityRevision & AbstractRevision & AbstractUuid & ThreadAware & {
  __typename?: 'VideoRevision';
  alias: Scalars['String']['output'];
  author: User;
  changes: Scalars['String']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  events: AbstractNotificationEventConnection;
  id: Scalars['Int']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  repository: Video;
  threads: ThreadConnection;
  title: Scalars['String']['output'];
  trashed: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};


export type VideoRevisionEventsArgs = {
  actorId?: InputMaybe<Scalars['Int']['input']>;
  actorUsername?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Instance>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoRevisionThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoRevisionConnection = AbstractEntityRevisionConnection & {
  __typename?: 'VideoRevisionConnection';
  edges: Array<VideoRevisionCursor>;
  nodes: Array<VideoRevision>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VideoRevisionCursor = {
  __typename?: 'VideoRevisionCursor';
  cursor: Scalars['String']['output'];
  node: VideoRevision;
};

export type _CacheMutation = {
  __typename?: '_cacheMutation';
  remove: DefaultResponse;
};


export type _CacheMutationRemoveArgs = {
  input: CacheRemoveInput;
};

export type GetNotificationsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetNotificationsQuery = { __typename?: 'Query', uuid?: { __typename: 'Applet' } | { __typename: 'AppletRevision' } | { __typename: 'Article' } | { __typename: 'ArticleRevision' } | { __typename: 'Comment' } | { __typename: 'Course' } | { __typename: 'CoursePage' } | { __typename: 'CoursePageRevision' } | { __typename: 'CourseRevision' } | { __typename: 'Event' } | { __typename: 'EventRevision' } | { __typename: 'Exercise' } | { __typename: 'ExerciseGroup' } | { __typename: 'ExerciseGroupRevision' } | { __typename: 'ExerciseRevision' } | { __typename: 'Page' } | { __typename: 'PageRevision' } | { __typename: 'TaxonomyTerm' } | { __typename: 'User', language?: Instance | null } | { __typename: 'Video' } | { __typename: 'VideoRevision' } | null, notifications: { __typename?: 'NotificationConnection', nodes: Array<{ __typename?: 'Notification', id: number, event?: { __typename: 'CheckoutRevisionNotificationEvent', date: any, id: number, objectId: number, reason: string, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean }, revision: { __typename?: 'AppletRevision', id: number } | { __typename?: 'ArticleRevision', id: number } | { __typename?: 'CoursePageRevision', id: number } | { __typename?: 'CourseRevision', id: number } | { __typename?: 'EventRevision', id: number } | { __typename?: 'ExerciseGroupRevision', id: number } | { __typename?: 'ExerciseRevision', id: number } | { __typename?: 'PageRevision', id: number } | { __typename?: 'VideoRevision', id: number }, repository: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } } | { __typename: 'CreateCommentNotificationEvent', date: any, id: number, objectId: number, comment: { __typename?: 'Comment', id: number }, thread: { __typename?: 'Thread', id: string, title?: string | null, comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number, content: string }> } }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateEntityLinkNotificationEvent', date: any, id: number, objectId: number, parent: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateEntityNotificationEvent', date: any, id: number, objectId: number, entity: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateEntityRevisionNotificationEvent', date: any, id: number, objectId: number, entityRevision: { __typename?: 'AppletRevision', changes: string, id: number } | { __typename?: 'ArticleRevision', changes: string, id: number } | { __typename?: 'CoursePageRevision', changes: string, id: number } | { __typename?: 'CourseRevision', changes: string, id: number } | { __typename?: 'EventRevision', changes: string, id: number } | { __typename?: 'ExerciseGroupRevision', changes: string, id: number } | { __typename?: 'ExerciseRevision', changes: string, id: number } | { __typename?: 'PageRevision', id: number } | { __typename?: 'VideoRevision', changes: string, id: number }, entity: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateTaxonomyLinkNotificationEvent', date: any, id: number, objectId: number, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, parent: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateTaxonomyTermNotificationEvent', date: any, id: number, objectId: number, taxonomyTerm: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'CreateThreadNotificationEvent', date: any, id: number, objectId: number, thread: { __typename?: 'Thread', id: string, comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number, content: string }> } }, object: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'RejectRevisionNotificationEvent', reason: string, date: any, id: number, objectId: number, repository: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, revision: { __typename?: 'AppletRevision', id: number, alias: string } | { __typename?: 'ArticleRevision', id: number, alias: string } | { __typename?: 'CoursePageRevision', id: number, alias: string } | { __typename?: 'CourseRevision', id: number, alias: string } | { __typename?: 'EventRevision', id: number, alias: string } | { __typename?: 'ExerciseGroupRevision', id: number, alias: string } | { __typename?: 'ExerciseRevision', id: number, alias: string } | { __typename?: 'PageRevision', id: number, alias: string } | { __typename?: 'VideoRevision', id: number, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'RemoveEntityLinkNotificationEvent', date: any, id: number, objectId: number, parent: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'RemoveTaxonomyLinkNotificationEvent', date: any, id: number, objectId: number, child: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, parent: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetLicenseNotificationEvent', date: any, id: number, objectId: number, repository: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetTaxonomyParentNotificationEvent', date: any, id: number, objectId: number, child: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, previousParent?: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | null, optionalParent?: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | null, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetTaxonomyTermNotificationEvent', date: any, id: number, objectId: number, taxonomyTerm: { __typename: 'TaxonomyTerm', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetThreadStateNotificationEvent', archived: boolean, date: any, id: number, objectId: number, thread: { __typename?: 'Thread', id: string, comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: number }> } }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | { __typename: 'SetUuidStateNotificationEvent', trashed: boolean, date: any, id: number, objectId: number, object: { __typename: 'Applet', id: number, title: string, alias: string } | { __typename: 'AppletRevision', id: number, title: string, alias: string } | { __typename: 'Article', id: number, title: string, alias: string } | { __typename: 'ArticleRevision', id: number, title: string, alias: string } | { __typename: 'Comment', id: number, title: string, alias: string } | { __typename: 'Course', id: number, title: string, alias: string } | { __typename: 'CoursePage', id: number, title: string, alias: string } | { __typename: 'CoursePageRevision', id: number, title: string, alias: string } | { __typename: 'CourseRevision', id: number, title: string, alias: string } | { __typename: 'Event', id: number, title: string, alias: string } | { __typename: 'EventRevision', id: number, title: string, alias: string } | { __typename: 'Exercise', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroup', id: number, title: string, alias: string, taxonomyTerms: { __typename?: 'TaxonomyTermConnection', nodes: Array<{ __typename?: 'TaxonomyTerm', type: TaxonomyTermType }> } } | { __typename: 'ExerciseGroupRevision', id: number, title: string, alias: string } | { __typename: 'ExerciseRevision', id: number, title: string, alias: string } | { __typename: 'Page', id: number, title: string, alias: string } | { __typename: 'PageRevision', id: number, title: string, alias: string } | { __typename: 'TaxonomyTerm', id: number, title: string, alias: string } | { __typename: 'User', id: number, title: string, alias: string } | { __typename: 'Video', id: number, title: string, alias: string } | { __typename: 'VideoRevision', id: number, title: string, alias: string }, actor: { __typename?: 'User', id: number, username: string, isActiveAuthor: boolean, isActiveDonor: boolean, isActiveReviewer: boolean } } | null }> } };


export const GetNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"500"}},{"kind":"Argument","name":{"kind":"Name","value":"unread"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"emailSent"},"value":{"kind":"BooleanValue","value":false}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"BooleanValue","value":true}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"isActiveAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"isActiveDonor"}},{"kind":"Field","name":{"kind":"Name","value":"isActiveReviewer"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objectId"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutRevisionNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityRevisionNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityRevision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AppletRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CourseRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CoursePageRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroupRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoRevision"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changes"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaxonomyTermNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaxonomyLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CreateThreadNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RejectRevisionNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revision"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveEntityLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveTaxonomyLinkNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetLicenseNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetTaxonomyParentNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"child"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousParent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"optionalParent"},"name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetTaxonomyTermNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetThreadStateNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archived"}},{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SetUuidStateNotificationEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractUuid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Exercise"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExerciseGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taxonomyTerms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trashed"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNotificationsQuery, GetNotificationsQueryVariables>;