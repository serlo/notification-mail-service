import { GetNotificationsQuery } from '../src/gql/graphql'

// TODO: complete with other event types
export const getNotificationsQueryResponse = {
  notifications: {
    nodes: [
      {
        id: 287469,
        event: {
          date: '2022-12-20T10:08:33+01:00',
          id: 496148,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'qwer',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 263277,
          revision: {
            id: 263277,
          },
          repository: {
            __typename: 'Article',
            id: 41805,
            title: 'Runden einer Dezimalzahl',
            alias: '/mathe/41805/runden-einer-dezimalzahl',
          },
          reason: 'Gute Ergänzung',
        },
      },
      {
        id: 287461,
        event: {
          date: '2022-12-19T20:56:03+01:00',
          id: 496135,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 148701,
            username: 'zxcv',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263277,
          entityRevision: {
            id: 263277,
          },
          entity: {
            __typename: 'Article',
            id: 41805,
            title: 'Runden einer Dezimalzahl',
            alias: '/mathe/41805/runden-einer-dezimalzahl',
          },
        },
      },
      {
        id: 287025,
        event: {
          date: '2022-12-13T16:12:17+01:00',
          id: 495461,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 10,
            username: 'xcbvxc',
            isActiveAuthor: false,
            isActiveDonor: true,
            isActiveReviewer: false,
          },
          objectId: 220225,
          thread: {
            id: 'dDI2Mjg1MQ==',
            thread: {
              nodes: [
                {
                  id: 262851,
                  content:
                    'In der Aufgabenstellung heißt es "Begründe deine Antwort" aber das geht ja nicht bei einer Single-Choice-Aufgabe.. oder?',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 220225,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220225/220225',
          },
        },
      },
      {
        id: 286444,
        event: {
          date: '2022-12-05T16:43:21+01:00',
          id: 494628,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 262318,
            username: 'wertg',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 4597,
          thread: {
            id: 'dDI2MjMyMw==',
            thread: {
              nodes: [
                {
                  id: 262323,
                  content:
                    'Das zweite Potenzgesetz sieht ja eine Vereinfachung des Terms bei den gleichen Exponenten vor. Ich habe nicht ganz verstanden wie Sie das hier(also im letzten Schritt, bei der dritten Aufgabe) anwenden um den Logarithmus zu kürzen. Danke für die Hilfe!',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 4597,
            title: 'Aufgaben zum Rechnen mit Logarithmen',
            alias: '/mathe/4597/4597',
          },
        },
      },
      {
        id: 286334,
        event: {
          date: '2022-12-03T20:20:59+01:00',
          id: 494505,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'xcbv',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262219,
          repository: {
            exerciseGroup: {
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 173357,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/173357/173357',
          },
          revision: {
            id: 262219,
            alias: '/entity/repository/compare/173357/262219',
          },
          reason:
            'Hallo Bxrlan,\nwolltest du die Aufgabe lösen? Dann braiuchst du nicht auf "bearbeiten" zu klicken, sondern kannst die Lösung bei "Deine Antwort" eingeben.\n"bearbeiten" nimmt man, wenn man am Text der Aufgabe was abändern will.\nViele Grüße \nPeter\n',
        },
      },
      {
        id: 286017,
        event: {
          date: '2022-11-29T19:36:39+01:00',
          id: 493836,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'dfghdh',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260909,
          repository: {
            exerciseGroup: {
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 6429,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6429/6429',
          },
          revision: {
            id: 260909,
            alias: '/entity/repository/compare/6429/260909',
          },
          reason: 'siehe anderer Beitrag',
        },
      },
      {
        id: 285988,
        event: {
          date: '2022-11-29T18:54:48+01:00',
          id: 493825,
          __typename: 'CreateCommentNotificationEvent',
          actor: {
            id: 64900,
            username: 'poiu',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261859,
          comment: {
            id: 261859,
          },
          thread: {
            id: 'dDI1MDQ5Mg==',
            title: '',
            thread: {
              nodes: [
                {
                  id: 250492,
                },
              ],
            },
            comment: {
              nodes: [
                {
                  id: 261859,
                  content: 'Jetzt sind welche da.',
                },
              ],
            },
          },
        },
      },
      {
        id: 285976,
        event: {
          date: '2022-11-29T13:28:56+01:00',
          id: 493773,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'poiu',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261823,
          parent: {
            exerciseGroup: {
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 220530,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220530/220530',
          },
          child: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 261823,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261823/261823',
          },
        },
      },
      {
        id: 285973,
        event: {
          date: '2022-11-29T12:06:24+01:00',
          id: 493761,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'poiu',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261813,
          parent: {
            exerciseGroup: {
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 220529,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220529/220529',
          },
          child: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 261813,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261813/261813',
          },
        },
      },
      {
        id: 285809,
        event: {
          date: '2022-11-25T22:41:25+01:00',
          id: 493573,
          __typename: 'SetUuidStateNotificationEvent',
          actor: {
            id: 32543,
            username: 'erty',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 2173,
          object: {
            __typename: 'Article',
            id: 2173,
            title: 'Richtlinien Mathe Aufgaben Lösung',
            alias: '/mathe/2173/richtlinien-mathe-aufgaben-l%C3%B6sung',
          },
          trashed: true,
        },
      },
      {
        id: 285107,
        event: {
          date: '2022-11-16T14:52:46+01:00',
          id: 492165,
          __typename: 'CreateCommentNotificationEvent',
          actor: {
            id: 139662,
            username: 'dgh',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260872,
          comment: {
            id: 260872,
          },
          thread: {
            id: 'dDI0MjQwMA==',
            title: '',
            thread: {
              nodes: [
                {
                  id: 242400,
                },
              ],
            },
            comment: {
              nodes: [
                {
                  id: 260872,
                  content: 'Schicke Boxen! 😉',
                },
              ],
            },
          },
        },
      },
    ],
  } as GetNotificationsQuery['notifications'],
}
