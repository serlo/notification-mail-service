import { graphql } from '../gql'

// FIXME: For any reason (probably we have misconfigured it), codegen is not handling correctly graphql fragments
// If fixed, see https://github.com/serlo/frontend/blob/staging/src/fetcher/query-fragments.ts#L59-L280 for nice fragments
// We suppose there isn't any user that have more than 500 unseen notifications, but TODO: paginate
export const getNotifications = graphql(`
  query getNotifications($userId: Int!) {
    uuid(id: $userId) {
      __typename
      ... on User {
        language
      }
    }
    notifications(
      first: 500
      unread: true
      emailSent: false
      emailSubscribed: true
      userId: $userId
    ) {
      nodes {
        id
        event {
          ... on AbstractNotificationEvent {
            date
            id
            __typename
            actor {
              id
              username
              isActiveAuthor
              isActiveDonor
              isActiveReviewer
            }
            objectId
            ... on CheckoutRevisionNotificationEvent {
              revision {
                id
              }
              repository {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              reason
            }
            ... on CreateCommentNotificationEvent {
              comment {
                id
              }
              thread {
                id
                title
                thread: comments(first: 1) {
                  nodes {
                    id
                  }
                }
                comment: comments(last: 1) {
                  nodes {
                    id
                    content
                  }
                }
              }
            }
            ... on CreateEntityNotificationEvent {
              entity {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on CreateEntityLinkNotificationEvent {
              parent {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              child {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on CreateEntityRevisionNotificationEvent {
              entityRevision {
                id
              }
              entity {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on CreateTaxonomyTermNotificationEvent {
              taxonomyTerm {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on CreateTaxonomyLinkNotificationEvent {
              child {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              parent {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on CreateThreadNotificationEvent {
              thread {
                id
                thread: comments(first: 1) {
                  nodes {
                    id
                    content
                  }
                }
              }
              object {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on RejectRevisionNotificationEvent {
              repository {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              revision {
                id
                alias
              }
              reason
            }
            ... on RemoveEntityLinkNotificationEvent {
              parent {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              child {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on RemoveTaxonomyLinkNotificationEvent {
              child {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              parent {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on SetLicenseNotificationEvent {
              repository {
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on SetTaxonomyParentNotificationEvent {
              child {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              previousParent {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
              optionalParent: parent {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on SetTaxonomyTermNotificationEvent {
              taxonomyTerm {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
              }
            }
            ... on SetThreadStateNotificationEvent {
              archived
              thread {
                id
                thread: comments(first: 1) {
                  nodes {
                    id
                  }
                }
              }
            }
            ... on SetUuidStateNotificationEvent {
              object {
                ... on AbstractUuid {
                  __typename
                  id
                  title
                  alias
                }
                ... on AbstractUuid {
                  ... on Exercise {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on ExerciseGroup {
                    taxonomyTerms {
                      nodes {
                        type
                      }
                    }
                  }
                  ... on GroupedExercise {
                    exerciseGroup {
                      taxonomyTerms {
                        nodes {
                          type
                        }
                      }
                    }
                  }
                  ... on Solution {
                    exercise {
                      ... on Exercise {
                        __typename
                        taxonomyTerms {
                          nodes {
                            type
                          }
                        }
                      }
                      ... on GroupedExercise {
                        __typename
                        exerciseGroup {
                          taxonomyTerms {
                            nodes {
                              type
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              trashed
            }
          }
        }
      }
    }
  }
`)
