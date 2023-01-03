import { GetNotificationsQuery } from '../src/gql/graphql'

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
            username: 'Peter',
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
            username: 'Sascha_Lill_95',
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
        id: 287448,
        event: {
          date: '2022-12-19T11:50:09+01:00',
          id: 496111,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 139662,
            username: 'Paul_',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 263151,
          revision: {
            id: 263151,
          },
          repository: {
            __typename: 'Article',
            id: 145470,
            title: 'Veranstaltungsübersicht',
            alias: '/community/145470/veranstaltungs%C3%BCbersicht',
          },
          reason:
            'Habe auch die Infos für den neuen Redaktionstag freigeschaltet :)',
        },
      },
      {
        id: 287425,
        event: {
          date: '2022-12-18T11:41:41+01:00',
          id: 496051,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 263131,
          revision: {
            id: 263131,
          },
          repository: {
            __typename: 'Article',
            id: 129708,
            title: 'Kongruenz von Zahlen ',
            alias: '/mathe/129708/kongruenz-von-zahlen',
          },
          reason: '',
        },
      },
      {
        id: 287398,
        event: {
          date: '2022-12-18T11:13:42+01:00',
          id: 496035,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262913,
          revision: {
            id: 262913,
          },
          repository: {
            __typename: 'Article',
            id: 1505,
            title: 'Ereignis',
            alias: '/mathe/1505/ereignis',
          },
          reason: '',
        },
      },
      {
        id: 287369,
        event: {
          date: '2022-12-16T21:12:44+01:00',
          id: 496008,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146880,
            username: 'Larisa_J',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 263151,
          entityRevision: {
            id: 263151,
          },
          entity: {
            __typename: 'Article',
            id: 145470,
            title: 'Veranstaltungsübersicht',
            alias: '/community/145470/veranstaltungs%C3%BCbersicht',
          },
        },
      },
      {
        id: 287344,
        event: {
          date: '2022-12-16T15:25:34+01:00',
          id: 495970,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 121863,
            username: 'hwlang',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: false,
          },
          objectId: 263131,
          entityRevision: {
            id: 263131,
          },
          entity: {
            __typename: 'Article',
            id: 129708,
            title: 'Kongruenz von Zahlen ',
            alias: '/mathe/129708/kongruenz-von-zahlen',
          },
        },
      },
      {
        id: 287327,
        event: {
          date: '2022-12-16T13:08:39+01:00',
          id: 495885,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263079,
          revision: {
            id: 263079,
          },
          repository: {
            __typename: 'Event',
            id: 196426,
            title: 'Online Redaktionstag (Alt)',
            alias: '/community/196426/online-redaktionstag-alt',
          },
          reason: '',
        },
      },
      {
        id: 287324,
        event: {
          date: '2022-12-16T13:08:38+01:00',
          id: 495884,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263079,
          entityRevision: {
            id: 263079,
          },
          entity: {
            __typename: 'Event',
            id: 196426,
            title: 'Online Redaktionstag (Alt)',
            alias: '/community/196426/online-redaktionstag-alt',
          },
        },
      },
      {
        id: 287320,
        event: {
          date: '2022-12-16T13:07:25+01:00',
          id: 495871,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263070,
          revision: {
            id: 263070,
          },
          repository: {
            __typename: 'Event',
            id: 147713,
            title: 'Tamil Redaktionssitzung (Alt)',
            alias: '/community/147713/tamil-redaktionssitzung-alt',
          },
          reason: '',
        },
      },
      {
        id: 287319,
        event: {
          date: '2022-12-16T13:07:25+01:00',
          id: 495870,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263070,
          entityRevision: {
            id: 263070,
          },
          entity: {
            __typename: 'Event',
            id: 147713,
            title: 'Tamil Redaktionssitzung (Alt)',
            alias: '/community/147713/tamil-redaktionssitzung-alt',
          },
        },
      },
      {
        id: 287317,
        event: {
          date: '2022-12-16T13:04:53+01:00',
          id: 495869,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263069,
          revision: {
            id: 263069,
          },
          repository: {
            __typename: 'Event',
            id: 150501,
            title: 'Redaktionssitzung in Dresden (2020)',
            alias: '/community/150501/redaktionssitzung-in-dresden-2020',
          },
          reason: '',
        },
      },
      {
        id: 287315,
        event: {
          date: '2022-12-16T13:04:53+01:00',
          id: 495868,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263069,
          entityRevision: {
            id: 263069,
          },
          entity: {
            __typename: 'Event',
            id: 150501,
            title: 'Redaktionssitzung in Dresden (2020)',
            alias: '/community/150501/redaktionssitzung-in-dresden-2020',
          },
        },
      },
      {
        id: 287310,
        event: {
          date: '2022-12-16T12:52:20+01:00',
          id: 495866,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263066,
          revision: {
            id: 263066,
          },
          repository: {
            __typename: 'Article',
            id: 135687,
            title: 'Triff deine Serlo-Community in Dresden (2020)',
            alias:
              '/community/135687/triff-deine-serlo-community-in-dresden-2020',
          },
          reason: '',
        },
      },
      {
        id: 287308,
        event: {
          date: '2022-12-16T12:52:20+01:00',
          id: 495865,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263066,
          entityRevision: {
            id: 263066,
          },
          entity: {
            __typename: 'Article',
            id: 135687,
            title: 'Triff deine Serlo-Community in Dresden (2020)',
            alias:
              '/community/135687/triff-deine-serlo-community-in-dresden-2020',
          },
        },
      },
      {
        id: 287305,
        event: {
          date: '2022-12-16T12:50:53+01:00',
          id: 495864,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263065,
          revision: {
            id: 263065,
          },
          repository: {
            __typename: 'Article',
            id: 146759,
            title: 'Triff deine Serlo Community in München (2020)',
            alias:
              '/community/146759/triff-deine-serlo-community-in-m%C3%BCnchen-2020',
          },
          reason: '',
        },
      },
      {
        id: 287301,
        event: {
          date: '2022-12-16T12:50:53+01:00',
          id: 495863,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263065,
          entityRevision: {
            id: 263065,
          },
          entity: {
            __typename: 'Article',
            id: 146759,
            title: 'Triff deine Serlo Community in München (2020)',
            alias:
              '/community/146759/triff-deine-serlo-community-in-m%C3%BCnchen-2020',
          },
        },
      },
      {
        id: 287298,
        event: {
          date: '2022-12-16T12:49:47+01:00',
          id: 495862,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263064,
          revision: {
            id: 263064,
          },
          repository: {
            __typename: 'Article',
            id: 141989,
            title: 'Triff deine Serlo Community in Berlin (2020)',
            alias:
              '/community/141989/triff-deine-serlo-community-in-berlin-2020',
          },
          reason: '',
        },
      },
      {
        id: 287292,
        event: {
          date: '2022-12-16T12:49:46+01:00',
          id: 495861,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263064,
          entityRevision: {
            id: 263064,
          },
          entity: {
            __typename: 'Article',
            id: 141989,
            title: 'Triff deine Serlo Community in Berlin (2020)',
            alias:
              '/community/141989/triff-deine-serlo-community-in-berlin-2020',
          },
        },
      },
      {
        id: 287288,
        event: {
          date: '2022-12-16T12:48:31+01:00',
          id: 495860,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263063,
          revision: {
            id: 263063,
          },
          repository: {
            __typename: 'Article',
            id: 141975,
            title: 'Triff deine Serlo Community in Münster (2020)',
            alias:
              '/community/141975/triff-deine-serlo-community-in-m%C3%BCnster-2020',
          },
          reason: '',
        },
      },
      {
        id: 287284,
        event: {
          date: '2022-12-16T12:48:31+01:00',
          id: 495859,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263063,
          entityRevision: {
            id: 263063,
          },
          entity: {
            __typename: 'Article',
            id: 141975,
            title: 'Triff deine Serlo Community in Münster (2020)',
            alias:
              '/community/141975/triff-deine-serlo-community-in-m%C3%BCnster-2020',
          },
        },
      },
      {
        id: 287283,
        event: {
          date: '2022-12-16T12:44:15+01:00',
          id: 495856,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263060,
          revision: {
            id: 263060,
          },
          repository: {
            __typename: 'Event',
            id: 146512,
            title: 'Redaktionssitzung in Berlin (Mockup)',
            alias: '/community/146512/redaktionssitzung-in-berlin-mockup',
          },
          reason: '',
        },
      },
      {
        id: 287281,
        event: {
          date: '2022-12-16T12:44:15+01:00',
          id: 495855,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263060,
          entityRevision: {
            id: 263060,
          },
          entity: {
            __typename: 'Event',
            id: 146512,
            title: 'Redaktionssitzung in Berlin (Mockup)',
            alias: '/community/146512/redaktionssitzung-in-berlin-mockup',
          },
        },
      },
      {
        id: 287278,
        event: {
          date: '2022-12-16T12:41:02+01:00',
          id: 495854,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263059,
          revision: {
            id: 263059,
          },
          repository: {
            __typename: 'Event',
            id: 146498,
            title: 'Redaktionssitzung in Münster (Mockup)',
            alias: '/community/146498/redaktionssitzung-in-m%C3%BCnster-mockup',
          },
          reason: '',
        },
      },
      {
        id: 287275,
        event: {
          date: '2022-12-16T12:41:02+01:00',
          id: 495853,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263059,
          entityRevision: {
            id: 263059,
          },
          entity: {
            __typename: 'Event',
            id: 146498,
            title: 'Redaktionssitzung in Münster (Mockup)',
            alias: '/community/146498/redaktionssitzung-in-m%C3%BCnster-mockup',
          },
        },
      },
      {
        id: 287272,
        event: {
          date: '2022-12-16T12:38:36+01:00',
          id: 495852,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263058,
          revision: {
            id: 263058,
          },
          repository: {
            __typename: 'Event',
            id: 146500,
            title: 'Redaktionssitzung in München (Mockup)',
            alias: '/community/146500/redaktionssitzung-in-m%C3%BCnchen-mockup',
          },
          reason: '',
        },
      },
      {
        id: 287271,
        event: {
          date: '2022-12-16T12:38:36+01:00',
          id: 495851,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263058,
          entityRevision: {
            id: 263058,
          },
          entity: {
            __typename: 'Event',
            id: 146500,
            title: 'Redaktionssitzung in München (Mockup)',
            alias: '/community/146500/redaktionssitzung-in-m%C3%BCnchen-mockup',
          },
        },
      },
      {
        id: 287268,
        event: {
          date: '2022-12-16T12:35:49+01:00',
          id: 495848,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263056,
          revision: {
            id: 263056,
          },
          repository: {
            __typename: 'Article',
            id: 146759,
            title: 'Triff deine Serlo Community in München (2020)',
            alias:
              '/community/146759/triff-deine-serlo-community-in-m%C3%BCnchen-2020',
          },
          reason: '',
        },
      },
      {
        id: 287264,
        event: {
          date: '2022-12-16T12:35:49+01:00',
          id: 495847,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263056,
          entityRevision: {
            id: 263056,
          },
          entity: {
            __typename: 'Article',
            id: 146759,
            title: 'Triff deine Serlo Community in München (2020)',
            alias:
              '/community/146759/triff-deine-serlo-community-in-m%C3%BCnchen-2020',
          },
        },
      },
      {
        id: 287262,
        event: {
          date: '2022-12-16T12:34:24+01:00',
          id: 495846,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263055,
          revision: {
            id: 263055,
          },
          repository: {
            __typename: 'Article',
            id: 141989,
            title: 'Triff deine Serlo Community in Berlin (2020)',
            alias:
              '/community/141989/triff-deine-serlo-community-in-berlin-2020',
          },
          reason: '',
        },
      },
      {
        id: 287256,
        event: {
          date: '2022-12-16T12:34:24+01:00',
          id: 495845,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263055,
          entityRevision: {
            id: 263055,
          },
          entity: {
            __typename: 'Article',
            id: 141989,
            title: 'Triff deine Serlo Community in Berlin (2020)',
            alias:
              '/community/141989/triff-deine-serlo-community-in-berlin-2020',
          },
        },
      },
      {
        id: 287254,
        event: {
          date: '2022-12-16T12:31:53+01:00',
          id: 495842,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263053,
          revision: {
            id: 263053,
          },
          repository: {
            __typename: 'Article',
            id: 141975,
            title: 'Triff deine Serlo Community in Münster (2020)',
            alias:
              '/community/141975/triff-deine-serlo-community-in-m%C3%BCnster-2020',
          },
          reason: '',
        },
      },
      {
        id: 287251,
        event: {
          date: '2022-12-16T12:31:53+01:00',
          id: 495841,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263053,
          entityRevision: {
            id: 263053,
          },
          entity: {
            __typename: 'Article',
            id: 141975,
            title: 'Triff deine Serlo Community in Münster (2020)',
            alias:
              '/community/141975/triff-deine-serlo-community-in-m%C3%BCnster-2020',
          },
        },
      },
      {
        id: 287210,
        event: {
          date: '2022-12-16T10:37:41+01:00',
          id: 495756,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263025,
          revision: {
            id: 263025,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 161092,
            title: 'Aufgaben zu SQL-Abfragen',
            alias: '/informatik/161092/161092',
          },
          reason: '',
        },
      },
      {
        id: 287209,
        event: {
          date: '2022-12-16T10:37:40+01:00',
          id: 495755,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 263025,
          entityRevision: {
            id: 263025,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 161092,
            title: 'Aufgaben zu SQL-Abfragen',
            alias: '/informatik/161092/161092',
          },
        },
      },
      {
        id: 287157,
        event: {
          date: '2022-12-15T16:43:00+01:00',
          id: 495638,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262988,
          revision: {
            id: 262988,
          },
          repository: {
            __typename: 'Article',
            id: 1701,
            title: 'Monotonieverhalten berechnen',
            alias: '/mathe/1701/monotonieverhalten-berechnen',
          },
          reason: '',
        },
      },
      {
        id: 287144,
        event: {
          date: '2022-12-15T16:43:00+01:00',
          id: 495637,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262988,
          entityRevision: {
            id: 262988,
          },
          entity: {
            __typename: 'Article',
            id: 1701,
            title: 'Monotonieverhalten berechnen',
            alias: '/mathe/1701/monotonieverhalten-berechnen',
          },
        },
      },
      {
        id: 287063,
        event: {
          date: '2022-12-14T18:49:37+01:00',
          id: 495540,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262913,
          entityRevision: {
            id: 262913,
          },
          entity: {
            __typename: 'Article',
            id: 1505,
            title: 'Ereignis',
            alias: '/mathe/1505/ereignis',
          },
        },
      },
      {
        id: 287052,
        event: {
          date: '2022-12-14T13:32:06+01:00',
          id: 495521,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262889,
          revision: {
            id: 262889,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'Exercise',
            id: 183381,
            title: 'Geometrie, Teil B, Aufgabengruppe 2',
            alias: '/mathe/183381/183381',
          },
          reason: '',
        },
      },
      {
        id: 287051,
        event: {
          date: '2022-12-14T13:32:06+01:00',
          id: 495520,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262889,
          entityRevision: {
            id: 262889,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'Exercise',
            id: 183381,
            title: 'Geometrie, Teil B, Aufgabengruppe 2',
            alias: '/mathe/183381/183381',
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
            username: 'Simon',
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
        id: 287020,
        event: {
          date: '2022-12-13T15:07:27+01:00',
          id: 495458,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262845,
          entityRevision: {
            id: 262845,
          },
          entity: {
            __typename: 'Article',
            id: 1505,
            title: 'Ereignis',
            alias: '/mathe/1505/ereignis',
          },
        },
      },
      {
        id: 286974,
        event: {
          date: '2022-12-13T07:34:35+01:00',
          id: 495415,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262781,
          revision: {
            id: 262781,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 5159,
            title: 'Aufgaben zum Belegen von Termvariablen',
            alias: '/mathe/5159/5159',
          },
          reason: 'Hörte sich vorher lebendiger an :)',
        },
      },
      {
        id: 286969,
        event: {
          date: '2022-12-12T23:57:18+01:00',
          id: 495414,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 262810,
            username: 'botho2',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262811,
          revision: {
            id: 262811,
          },
          repository: {
            __typename: 'Article',
            id: 206397,
            title: 'Testseite für Tabellen',
            alias: '/community/206397/testseite-f%C3%BCr-tabellen',
          },
          reason: '',
        },
      },
      {
        id: 286968,
        event: {
          date: '2022-12-12T23:57:18+01:00',
          id: 495413,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 262810,
            username: 'botho2',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262811,
          entityRevision: {
            id: 262811,
          },
          entity: {
            __typename: 'Article',
            id: 206397,
            title: 'Testseite für Tabellen',
            alias: '/community/206397/testseite-f%C3%BCr-tabellen',
          },
        },
      },
      {
        id: 286928,
        event: {
          date: '2022-12-12T15:30:44+01:00',
          id: 495379,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262781,
          entityRevision: {
            id: 262781,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 5159,
            title: 'Aufgaben zum Belegen von Termvariablen',
            alias: '/mathe/5159/5159',
          },
        },
      },
      {
        id: 286926,
        event: {
          date: '2022-12-12T13:01:02+01:00',
          id: 495354,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262765,
          revision: {
            id: 262765,
          },
          repository: {
            __typename: 'Article',
            id: 1599,
            title: 'Grenzwertbetrachtung',
            alias: '/mathe/1599/grenzwertbetrachtung',
          },
          reason: '',
        },
      },
      {
        id: 286922,
        event: {
          date: '2022-12-12T13:01:02+01:00',
          id: 495353,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262765,
          entityRevision: {
            id: 262765,
          },
          entity: {
            __typename: 'Article',
            id: 1599,
            title: 'Grenzwertbetrachtung',
            alias: '/mathe/1599/grenzwertbetrachtung',
          },
        },
      },
      {
        id: 286848,
        event: {
          date: '2022-12-09T18:22:45+01:00',
          id: 495247,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262677,
          revision: {
            id: 262677,
          },
          repository: {
            __typename: 'Article',
            id: 1993,
            title: 'Ungleichung',
            alias: '/mathe/1993/ungleichung',
          },
          reason: '',
        },
      },
      {
        id: 286840,
        event: {
          date: '2022-12-09T18:22:44+01:00',
          id: 495246,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262677,
          entityRevision: {
            id: 262677,
          },
          entity: {
            __typename: 'Article',
            id: 1993,
            title: 'Ungleichung',
            alias: '/mathe/1993/ungleichung',
          },
        },
      },
      {
        id: 286821,
        event: {
          date: '2022-12-09T14:51:10+01:00',
          id: 495175,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262588,
          revision: {
            id: 262588,
          },
          repository: {
            exercise: {
              __typename: 'Exercise',
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
            __typename: 'Solution',
            id: 61519,
            title:
              'Aufgaben zu Volumenberechnung bei geraden Prismen und Zylindern',
            alias: '/mathe/61519/61519',
          },
          reason: '',
        },
      },
      {
        id: 286788,
        event: {
          date: '2022-12-09T10:09:58+01:00',
          id: 495047,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262588,
          entityRevision: {
            id: 262588,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
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
            __typename: 'Solution',
            id: 61519,
            title:
              'Aufgaben zu Volumenberechnung bei geraden Prismen und Zylindern',
            alias: '/mathe/61519/61519',
          },
        },
      },
      {
        id: 286760,
        event: {
          date: '2022-12-08T17:32:22+01:00',
          id: 494984,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262565,
          revision: {
            id: 262565,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 13785,
            title: 'Aufgaben zur Bestimmung von Wertebereichen',
            alias: '/mathe/13785/13785',
          },
          reason: '',
        },
      },
      {
        id: 286759,
        event: {
          date: '2022-12-08T17:32:22+01:00',
          id: 494983,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262565,
          entityRevision: {
            id: 262565,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 13785,
            title: 'Aufgaben zur Bestimmung von Wertebereichen',
            alias: '/mathe/13785/13785',
          },
        },
      },
      {
        id: 286756,
        event: {
          date: '2022-12-08T17:25:58+01:00',
          id: 494982,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262564,
          revision: {
            id: 262564,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 13777,
            title: 'Aufgaben zur Bestimmung von Wertebereichen',
            alias: '/mathe/13777/13777',
          },
          reason: '',
        },
      },
      {
        id: 286755,
        event: {
          date: '2022-12-08T17:25:57+01:00',
          id: 494981,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262564,
          entityRevision: {
            id: 262564,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 13777,
            title: 'Aufgaben zur Bestimmung von Wertebereichen',
            alias: '/mathe/13777/13777',
          },
        },
      },
      {
        id: 286694,
        event: {
          date: '2022-12-07T16:38:27+01:00',
          id: 494900,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262516,
          revision: {
            id: 262516,
          },
          repository: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
          reason: '',
        },
      },
      {
        id: 286693,
        event: {
          date: '2022-12-07T16:38:26+01:00',
          id: 494899,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262516,
          entityRevision: {
            id: 262516,
          },
          entity: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
        },
      },
      {
        id: 286692,
        event: {
          date: '2022-12-07T16:34:06+01:00',
          id: 494898,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262515,
          revision: {
            id: 262515,
          },
          repository: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
          reason: '',
        },
      },
      {
        id: 286691,
        event: {
          date: '2022-12-07T16:34:06+01:00',
          id: 494897,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262515,
          entityRevision: {
            id: 262515,
          },
          entity: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
        },
      },
      {
        id: 286690,
        event: {
          date: '2022-12-07T16:27:48+01:00',
          id: 494896,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262514,
          revision: {
            id: 262514,
          },
          repository: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
          reason: '',
        },
      },
      {
        id: 286689,
        event: {
          date: '2022-12-07T16:27:48+01:00',
          id: 494895,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262514,
          entityRevision: {
            id: 262514,
          },
          entity: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
        },
      },
      {
        id: 286686,
        event: {
          date: '2022-12-07T16:23:05+01:00',
          id: 494892,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262512,
          revision: {
            id: 262512,
          },
          repository: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
          reason: '',
        },
      },
      {
        id: 286685,
        event: {
          date: '2022-12-07T16:23:05+01:00',
          id: 494891,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262512,
          entityRevision: {
            id: 262512,
          },
          entity: {
            __typename: 'Applet',
            id: 262309,
            title: 'Test',
            alias: '/community/262309/test',
          },
        },
      },
      {
        id: 286603,
        event: {
          date: '2022-12-07T08:49:13+01:00',
          id: 494798,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262419,
          revision: {
            id: 262419,
          },
          repository: {
            exercise: {
              __typename: 'Exercise',
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
                ],
              },
            },
            __typename: 'Solution',
            id: 5133,
            title: 'Aufgaben zu Dreiecken',
            alias: '/mathe/5133/5133',
          },
          reason: '',
        },
      },
      {
        id: 286596,
        event: {
          date: '2022-12-07T08:48:13+01:00',
          id: 494797,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262430,
          revision: {
            id: 262430,
          },
          repository: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
          reason:
            'Überarbeitungen dieser Größenordnung würde ich einfach selbst freigeben :)',
        },
      },
      {
        id: 286566,
        event: {
          date: '2022-12-06T18:28:39+01:00',
          id: 494780,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262430,
          entityRevision: {
            id: 262430,
          },
          entity: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
        },
      },
      {
        id: 286551,
        event: {
          date: '2022-12-06T15:51:02+01:00',
          id: 494775,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262419,
          entityRevision: {
            id: 262419,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
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
                ],
              },
            },
            __typename: 'Solution',
            id: 5133,
            title: 'Aufgaben zu Dreiecken',
            alias: '/mathe/5133/5133',
          },
        },
      },
      {
        id: 286538,
        event: {
          date: '2022-12-06T15:43:46+01:00',
          id: 494773,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262418,
          entityRevision: {
            id: 262418,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
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
                ],
              },
            },
            __typename: 'Solution',
            id: 5133,
            title: 'Aufgaben zu Dreiecken',
            alias: '/mathe/5133/5133',
          },
        },
      },
      {
        id: 286529,
        event: {
          date: '2022-12-06T15:29:22+01:00',
          id: 494767,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262414,
          entityRevision: {
            id: 262414,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
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
                ],
              },
            },
            __typename: 'Solution',
            id: 5133,
            title: 'Aufgaben zu Dreiecken',
            alias: '/mathe/5133/5133',
          },
        },
      },
      {
        id: 286522,
        event: {
          date: '2022-12-06T15:18:06+01:00',
          id: 494763,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262412,
          revision: {
            id: 262412,
          },
          repository: {
            __typename: 'Article',
            id: 1639,
            title: 'Multiplikation',
            alias: '/mathe/1639/multiplikation',
          },
          reason: '',
        },
      },
      {
        id: 286517,
        event: {
          date: '2022-12-06T15:18:06+01:00',
          id: 494762,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262412,
          entityRevision: {
            id: 262412,
          },
          entity: {
            __typename: 'Article',
            id: 1639,
            title: 'Multiplikation',
            alias: '/mathe/1639/multiplikation',
          },
        },
      },
      {
        id: 286501,
        event: {
          date: '2022-12-06T14:28:54+01:00',
          id: 494749,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 262169,
          revision: {
            id: 262169,
          },
          repository: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
          reason: 'Gute Idee mit den Symbolen!',
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
            username: 'JeremyWB',
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
        id: 286428,
        event: {
          date: '2022-12-05T12:54:18+01:00',
          id: 494595,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 139662,
            username: 'Paul_',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262295,
          revision: {
            id: 262295,
          },
          repository: {
            __typename: 'Article',
            id: 145470,
            title: 'Veranstaltungsübersicht',
            alias: '/community/145470/veranstaltungs%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 286425,
        event: {
          date: '2022-12-05T12:54:17+01:00',
          id: 494594,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 139662,
            username: 'Paul_',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262295,
          entityRevision: {
            id: 262295,
          },
          entity: {
            __typename: 'Article',
            id: 145470,
            title: 'Veranstaltungsübersicht',
            alias: '/community/145470/veranstaltungs%C3%BCbersicht',
          },
        },
      },
      {
        id: 286404,
        event: {
          date: '2022-12-05T01:37:50+01:00',
          id: 494566,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262271,
          revision: {
            id: 262271,
          },
          repository: {
            __typename: 'Article',
            id: 126371,
            title: 'Lerntipps - Eine Übersicht',
            alias: '/lerntipps/126371/lerntipps-eine-%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 286403,
        event: {
          date: '2022-12-05T01:37:50+01:00',
          id: 494565,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262271,
          entityRevision: {
            id: 262271,
          },
          entity: {
            __typename: 'Article',
            id: 126371,
            title: 'Lerntipps - Eine Übersicht',
            alias: '/lerntipps/126371/lerntipps-eine-%C3%BCbersicht',
          },
        },
      },
      {
        id: 286389,
        event: {
          date: '2022-12-04T16:01:47+01:00',
          id: 494546,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262252,
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
            id: 245222,
            title: 'Aufgaben zur Ableitung von Polynomfunktionen',
            alias: '/mathe/245222/245222',
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
            id: 262252,
            title: 'Aufgaben zur Ableitung von Polynomfunktionen',
            alias: '/mathe/262252/262252',
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
            username: 'Peter',
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
        id: 286328,
        event: {
          date: '2022-12-03T19:43:50+01:00',
          id: 494498,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 262218,
            username: 'Bxrlan',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 262219,
          entityRevision: {
            id: 262219,
          },
          entity: {
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
        },
      },
      {
        id: 286283,
        event: {
          date: '2022-12-03T09:55:25+01:00',
          id: 494400,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262169,
          entityRevision: {
            id: 262169,
          },
          entity: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
        },
      },
      {
        id: 286267,
        event: {
          date: '2022-12-03T09:42:24+01:00',
          id: 494399,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262168,
          revision: {
            id: 262168,
          },
          repository: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
          reason: '',
        },
      },
      {
        id: 286259,
        event: {
          date: '2022-12-03T09:42:24+01:00',
          id: 494398,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 262168,
          entityRevision: {
            id: 262168,
          },
          entity: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
        },
      },
      {
        id: 286249,
        event: {
          date: '2022-12-03T09:40:04+01:00',
          id: 494397,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261940,
          revision: {
            id: 261940,
          },
          repository: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
          reason: '',
        },
      },
      {
        id: 286245,
        event: {
          date: '2022-12-03T09:33:49+01:00',
          id: 494396,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261897,
          revision: {
            id: 261897,
          },
          repository: {
            exercise: {
              __typename: 'Exercise',
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 261724,
            title: '2015',
            alias: '/mathe/261724/261724',
          },
          reason: '',
        },
      },
      {
        id: 286196,
        event: {
          date: '2022-12-02T11:25:11+01:00',
          id: 494022,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 261891,
          revision: {
            id: 261891,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 14919,
            title: 'Aufgaben zu den binomischen Formeln',
            alias: '/mathe/14919/14919',
          },
          reason: '',
        },
      },
      {
        id: 286142,
        event: {
          date: '2022-12-01T18:51:58+01:00',
          id: 493919,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 261940,
          entityRevision: {
            id: 261940,
          },
          entity: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
        },
      },
      {
        id: 286095,
        event: {
          date: '2022-11-30T20:41:32+01:00',
          id: 493875,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261897,
          entityRevision: {
            id: 261897,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 261724,
            title: '2015',
            alias: '/mathe/261724/261724',
          },
        },
      },
      {
        id: 286094,
        event: {
          date: '2022-11-30T20:06:52+01:00',
          id: 493874,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261693,
            username: 'Powerjoko',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261896,
          entityRevision: {
            id: 261896,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 261724,
            title: '2015',
            alias: '/mathe/261724/261724',
          },
        },
      },
      {
        id: 286092,
        event: {
          date: '2022-11-30T18:00:15+01:00',
          id: 493872,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261894,
          revision: {
            id: 261894,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
            },
            __typename: 'Solution',
            id: 10971,
            title: 'Aufgaben zu linearen Ungleichungen',
            alias: '/mathe/10971/10971',
          },
          reason: '',
        },
      },
      {
        id: 286091,
        event: {
          date: '2022-11-30T18:00:15+01:00',
          id: 493871,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261894,
          entityRevision: {
            id: 261894,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
            },
            __typename: 'Solution',
            id: 10971,
            title: 'Aufgaben zu linearen Ungleichungen',
            alias: '/mathe/10971/10971',
          },
        },
      },
      {
        id: 286081,
        event: {
          date: '2022-11-30T17:45:24+01:00',
          id: 493867,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261891,
          entityRevision: {
            id: 261891,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 14919,
            title: 'Aufgaben zu den binomischen Formeln',
            alias: '/mathe/14919/14919',
          },
        },
      },
      {
        id: 286062,
        event: {
          date: '2022-11-30T17:22:08+01:00',
          id: 493861,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 261869,
            username: 'daskraut',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 14919,
          thread: {
            id: 'dDI2MTg4Nw==',
            thread: {
              nodes: [
                {
                  id: 261887,
                  content:
                    'ist wahrscheinlich falsch, aber ich glaub, da könnte man noch 1,5 ausklammern und die 2. bf rückwärts anwenden, da käme dann 1,5(4a-b)² raus. ',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 14919,
            title: 'Aufgaben zu den binomischen Formeln',
            alias: '/mathe/14919/14919',
          },
        },
      },
      {
        id: 286060,
        event: {
          date: '2022-11-30T15:52:47+01:00',
          id: 493860,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 242747,
            username: 'GG-Jup',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 10971,
          thread: {
            id: 'dDI2MTg4Ng==',
            thread: {
              nodes: [
                {
                  id: 261886,
                  content:
                    'Bei der Lösungsmenge am Ende müsste doch eigentlich 2,55 als kleinster Wert angenommen werden und nicht 2.25, oder?',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 10971,
            title: 'Aufgaben zu linearen Ungleichungen',
            alias: '/mathe/10971/10971',
          },
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
            username: 'Peter',
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
        id: 286016,
        event: {
          date: '2022-11-29T19:36:26+01:00',
          id: 493835,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260908,
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
            id: 6425,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6425/6425',
          },
          revision: {
            id: 260908,
            alias: '/entity/repository/compare/6425/260908',
          },
          reason: 'siehe anderer Beitrag',
        },
      },
      {
        id: 286013,
        event: {
          date: '2022-11-29T19:36:15+01:00',
          id: 493834,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260907,
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
            id: 6421,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6421/6421',
          },
          revision: {
            id: 260907,
            alias: '/entity/repository/compare/6421/260907',
          },
          reason: 'siehe anderer Beitrag',
        },
      },
      {
        id: 286011,
        event: {
          date: '2022-11-29T19:35:38+01:00',
          id: 493833,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260906,
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
            id: 6417,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6417/6417',
          },
          revision: {
            id: 260906,
            alias: '/entity/repository/compare/6417/260906',
          },
          reason:
            'Hallo, du hast hier versucht, die Lösung aufzuschreiben.  Die steht schon bei der Aufgabe mit dabei, darum werden deine Beiträge abgelehnt (obwohl es richtig ist). Wenn du Lust hast, Inhalte zu erstellen, komm in den Chat, damit wir etwas passendes finden können :)\nViele Grüße \nPeter ',
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
            username: 'Kowalsky',
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
            username: 'Kowalsky',
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
        id: 285975,
        event: {
          date: '2022-11-29T13:28:56+01:00',
          id: 493772,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261822,
          revision: {
            id: 261822,
          },
          repository: {
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
          reason: '',
        },
      },
      {
        id: 285974,
        event: {
          date: '2022-11-29T13:28:56+01:00',
          id: 493771,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261822,
          entityRevision: {
            id: 261822,
          },
          entity: {
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
            username: 'Kowalsky',
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
        id: 285972,
        event: {
          date: '2022-11-29T11:19:34+01:00',
          id: 493757,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261811,
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
            id: 220528,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220528/220528',
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
            id: 261811,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261811/261811',
          },
        },
      },
      {
        id: 285971,
        event: {
          date: '2022-11-29T11:05:04+01:00',
          id: 493753,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261809,
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
            id: 220527,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220527/220527',
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
            id: 261809,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261809/261809',
          },
        },
      },
      {
        id: 285928,
        event: {
          date: '2022-11-28T14:21:05+01:00',
          id: 493711,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261775,
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
            id: 220526,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220526/220526',
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
            id: 261775,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261775/261775',
          },
        },
      },
      {
        id: 285927,
        event: {
          date: '2022-11-28T14:01:49+01:00',
          id: 493705,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261772,
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
            id: 220525,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220525/220525',
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
            id: 261772,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261772/261772',
          },
        },
      },
      {
        id: 285926,
        event: {
          date: '2022-11-28T13:50:25+01:00',
          id: 493701,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261770,
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
            id: 220524,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220524/220524',
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
            id: 261770,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261770/261770',
          },
        },
      },
      {
        id: 285925,
        event: {
          date: '2022-11-28T11:50:32+01:00',
          id: 493695,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261766,
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
            id: 220523,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220523/220523',
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
            id: 261766,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261766/261766',
          },
        },
      },
      {
        id: 285924,
        event: {
          date: '2022-11-28T11:39:21+01:00',
          id: 493691,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261764,
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
            id: 220522,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/220522/220522',
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
            id: 261764,
            title: 'Aufgaben zu quadratischen Gleichungen',
            alias: '/mathe/261764/261764',
          },
        },
      },
      {
        id: 285909,
        event: {
          date: '2022-11-27T13:44:46+01:00',
          id: 493669,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261688,
          revision: {
            id: 261688,
          },
          repository: {
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
            id: 117417,
            title: 'Aufgaben zum Ableiten von Wurzelfunktionen',
            alias: '/mathe/117417/117417',
          },
          reason: '',
        },
      },
      {
        id: 285907,
        event: {
          date: '2022-11-27T13:43:47+01:00',
          id: 493668,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261686,
          revision: {
            id: 261686,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 14977,
            title: 'Aufgaben zu den binomischen Formeln',
            alias: '/mathe/14977/14977',
          },
          reason: '',
        },
      },
      {
        id: 285900,
        event: {
          date: '2022-11-27T13:43:27+01:00',
          id: 493667,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261684,
          revision: {
            id: 261684,
          },
          repository: {
            __typename: 'Article',
            id: 1619,
            title: 'Brüche addieren und subtrahieren',
            alias: '/mathe/1619/br%C3%BCche-addieren-und-subtrahieren',
          },
          reason: '',
        },
      },
      {
        id: 285898,
        event: {
          date: '2022-11-27T13:42:18+01:00',
          id: 493666,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261683,
          revision: {
            id: 261683,
          },
          repository: {
            __typename: 'Article',
            id: 1531,
            title: 'Nullstellen berechnen',
            alias: '/mathe/1531/nullstellen-berechnen',
          },
          reason: '',
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
            username: 'botho',
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
        id: 285789,
        event: {
          date: '2022-11-25T22:03:10+01:00',
          id: 493561,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261688,
          entityRevision: {
            id: 261688,
          },
          entity: {
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
            id: 117417,
            title: 'Aufgaben zum Ableiten von Wurzelfunktionen',
            alias: '/mathe/117417/117417',
          },
        },
      },
      {
        id: 285782,
        event: {
          date: '2022-11-25T21:41:46+01:00',
          id: 493556,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261686,
          entityRevision: {
            id: 261686,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 14977,
            title: 'Aufgaben zu den binomischen Formeln',
            alias: '/mathe/14977/14977',
          },
        },
      },
      {
        id: 285778,
        event: {
          date: '2022-11-25T21:31:07+01:00',
          id: 493554,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261684,
          entityRevision: {
            id: 261684,
          },
          entity: {
            __typename: 'Article',
            id: 1619,
            title: 'Brüche addieren und subtrahieren',
            alias: '/mathe/1619/br%C3%BCche-addieren-und-subtrahieren',
          },
        },
      },
      {
        id: 285769,
        event: {
          date: '2022-11-25T21:22:13+01:00',
          id: 493553,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261683,
          entityRevision: {
            id: 261683,
          },
          entity: {
            __typename: 'Article',
            id: 1531,
            title: 'Nullstellen berechnen',
            alias: '/mathe/1531/nullstellen-berechnen',
          },
        },
      },
      {
        id: 285741,
        event: {
          date: '2022-11-25T10:57:07+01:00',
          id: 493035,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261413,
          revision: {
            id: 261413,
          },
          repository: {
            __typename: 'Article',
            id: 1595,
            title: 'Das Integral',
            alias: '/mathe/1595/das-integral',
          },
          reason: '',
        },
      },
      {
        id: 285732,
        event: {
          date: '2022-11-25T10:57:07+01:00',
          id: 493034,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261413,
          entityRevision: {
            id: 261413,
          },
          entity: {
            __typename: 'Article',
            id: 1595,
            title: 'Das Integral',
            alias: '/mathe/1595/das-integral',
          },
        },
      },
      {
        id: 285717,
        event: {
          date: '2022-11-25T10:27:41+01:00',
          id: 493027,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261406,
          revision: {
            id: 261406,
          },
          repository: {
            __typename: 'Article',
            id: 1559,
            title: 'Die Mantellinie',
            alias: '/mathe/1559/die-mantellinie',
          },
          reason: '',
        },
      },
      {
        id: 285714,
        event: {
          date: '2022-11-25T10:27:41+01:00',
          id: 493026,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261406,
          entityRevision: {
            id: 261406,
          },
          entity: {
            __typename: 'Article',
            id: 1559,
            title: 'Die Mantellinie',
            alias: '/mathe/1559/die-mantellinie',
          },
        },
      },
      {
        id: 285708,
        event: {
          date: '2022-11-25T10:20:04+01:00',
          id: 493025,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 261171,
          revision: {
            id: 261171,
          },
          repository: {
            __typename: 'Article',
            id: 50583,
            title: 'Unechter Bruch',
            alias: '/mathe/50583/unechter-bruch',
          },
          reason: '',
        },
      },
      {
        id: 285695,
        event: {
          date: '2022-11-25T09:37:35+01:00',
          id: 493017,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261403,
          revision: {
            id: 261403,
          },
          repository: {
            __typename: 'Article',
            id: 1559,
            title: 'Die Mantellinie',
            alias: '/mathe/1559/die-mantellinie',
          },
          reason: '',
        },
      },
      {
        id: 285693,
        event: {
          date: '2022-11-25T09:37:34+01:00',
          id: 493016,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261403,
          entityRevision: {
            id: 261403,
          },
          entity: {
            __typename: 'Article',
            id: 1559,
            title: 'Die Mantellinie',
            alias: '/mathe/1559/die-mantellinie',
          },
        },
      },
      {
        id: 285547,
        event: {
          date: '2022-11-24T12:46:11+01:00',
          id: 492913,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 261169,
          revision: {
            id: 261169,
          },
          repository: {
            exercise: {
              __typename: 'Exercise',
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 145731,
            title: '2017',
            alias: '/mathe/145731/145731',
          },
          reason: '',
        },
      },
      {
        id: 285341,
        event: {
          date: '2022-11-22T17:54:44+01:00',
          id: 492620,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261175,
          revision: {
            id: 261175,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'Exercise',
            id: 137054,
            title: '2017',
            alias: '/mathe/137054/137054',
          },
          reason: 'passt',
        },
      },
      {
        id: 285338,
        event: {
          date: '2022-11-22T17:54:22+01:00',
          id: 492619,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261175,
          entityRevision: {
            id: 261175,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'Exercise',
            id: 137054,
            title: '2017',
            alias: '/mathe/137054/137054',
          },
        },
      },
      {
        id: 285335,
        event: {
          date: '2022-11-22T15:53:38+01:00',
          id: 492618,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 261170,
            username: 'skranz',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 261171,
          entityRevision: {
            id: 261171,
          },
          entity: {
            __typename: 'Article',
            id: 50583,
            title: 'Unechter Bruch',
            alias: '/mathe/50583/unechter-bruch',
          },
        },
      },
      {
        id: 285332,
        event: {
          date: '2022-11-22T15:18:05+01:00',
          id: 492617,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261169,
          entityRevision: {
            id: 261169,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
              taxonomyTerms: {
                nodes: [
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 145731,
            title: '2017',
            alias: '/mathe/145731/145731',
          },
        },
      },
      {
        id: 285330,
        event: {
          date: '2022-11-22T15:12:49+01:00',
          id: 492616,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 261168,
          entityRevision: {
            id: 261168,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'Exercise',
            id: 137054,
            title: '2017',
            alias: '/mathe/137054/137054',
          },
        },
      },
      {
        id: 285292,
        event: {
          date: '2022-11-20T13:19:03+01:00',
          id: 492486,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 145731,
          thread: {
            id: 'dDI2MTA3Mw==',
            thread: {
              nodes: [
                {
                  id: 261073,
                  content:
                    'Sind es nicht die Geraden h und k die parallel sind?',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 145731,
            title: '2017',
            alias: '/mathe/145731/145731',
          },
        },
      },
      {
        id: 285226,
        event: {
          date: '2022-11-18T11:27:12+01:00',
          id: 492261,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260810,
          revision: {
            id: 260810,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
            },
            __typename: 'Solution',
            id: 10095,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/10095/10095',
          },
          reason: '',
        },
      },
      {
        id: 285220,
        event: {
          date: '2022-11-18T11:20:00+01:00',
          id: 492258,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260809,
          revision: {
            id: 260809,
          },
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
            id: 10093,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/10093/10093',
          },
          reason: '',
        },
      },
      {
        id: 285194,
        event: {
          date: '2022-11-17T09:35:12+01:00',
          id: 492234,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 260904,
            username: 'mohammad22',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260912,
          parent: {
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
            __typename: 'ExerciseGroup',
            id: 6415,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6415/6415',
          },
          child: {
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
            id: 260912,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/260912/260912',
          },
        },
      },
      {
        id: 285193,
        event: {
          date: '2022-11-17T09:35:09+01:00',
          id: 492231,
          __typename: 'CreateEntityLinkNotificationEvent',
          actor: {
            id: 260904,
            username: 'mohammad22',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260910,
          parent: {
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
            __typename: 'ExerciseGroup',
            id: 6415,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6415/6415',
          },
          child: {
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
            id: 260910,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/260910/260910',
          },
        },
      },
      {
        id: 285192,
        event: {
          date: '2022-11-17T09:35:08+01:00',
          id: 492230,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 260904,
            username: 'mohammad22',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260909,
          entityRevision: {
            id: 260909,
          },
          entity: {
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
        },
      },
      {
        id: 285191,
        event: {
          date: '2022-11-17T09:35:06+01:00',
          id: 492229,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 260904,
            username: 'mohammad22',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260908,
          entityRevision: {
            id: 260908,
          },
          entity: {
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
            id: 6425,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6425/6425',
          },
        },
      },
      {
        id: 285189,
        event: {
          date: '2022-11-17T09:35:05+01:00',
          id: 492228,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 260904,
            username: 'mohammad22',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260907,
          entityRevision: {
            id: 260907,
          },
          entity: {
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
            id: 6421,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6421/6421',
          },
        },
      },
      {
        id: 285188,
        event: {
          date: '2022-11-17T09:35:04+01:00',
          id: 492227,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 260904,
            username: 'mohammad22',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260906,
          entityRevision: {
            id: 260906,
          },
          entity: {
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
            id: 6417,
            title: 'Aufgaben zum Rechnen mit Überschlag',
            alias: '/mathe/6417/6417',
          },
        },
      },
      {
        id: 285171,
        event: {
          date: '2022-11-16T21:32:23+01:00',
          id: 492219,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260808,
          revision: {
            id: 260808,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
            },
            __typename: 'Solution',
            id: 18430,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/18430/18430',
          },
          reason: '',
        },
      },
      {
        id: 285168,
        event: {
          date: '2022-11-16T21:31:20+01:00',
          id: 492218,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260807,
          revision: {
            id: 260807,
          },
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
            id: 18421,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/18421/18421',
          },
          reason: '',
        },
      },
      {
        id: 285123,
        event: {
          date: '2022-11-16T21:04:39+01:00',
          id: 492202,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260838,
          revision: {
            id: 260838,
          },
          repository: {
            __typename: 'Article',
            id: 1549,
            title: 'Mitternachtsformel (Quadratische Lösungsformel)',
            alias:
              '/mathe/1549/mitternachtsformel-quadratische-l%C3%B6sungsformel',
          },
          reason:
            'Hallo Friedrich,\ntoll, dass du den Fehler gleich selbst verbessert hast:)\nViele Grüße \nPeter ',
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
            username: 'Paul_',
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
      {
        id: 285084,
        event: {
          date: '2022-11-16T09:18:35+01:00',
          id: 492119,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 260837,
            username: 'friedrich_loparev',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260838,
          entityRevision: {
            id: 260838,
          },
          entity: {
            __typename: 'Article',
            id: 1549,
            title: 'Mitternachtsformel (Quadratische Lösungsformel)',
            alias:
              '/mathe/1549/mitternachtsformel-quadratische-l%C3%B6sungsformel',
          },
        },
      },
      {
        id: 285035,
        event: {
          date: '2022-11-15T14:50:08+01:00',
          id: 492082,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260810,
          entityRevision: {
            id: 260810,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
            },
            __typename: 'Solution',
            id: 10095,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/10095/10095',
          },
        },
      },
      {
        id: 285034,
        event: {
          date: '2022-11-15T14:50:08+01:00',
          id: 492081,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260809,
          entityRevision: {
            id: 260809,
          },
          entity: {
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
            id: 10093,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/10093/10093',
          },
        },
      },
      {
        id: 285033,
        event: {
          date: '2022-11-15T14:49:01+01:00',
          id: 492080,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260808,
          entityRevision: {
            id: 260808,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
            },
            __typename: 'Solution',
            id: 18430,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/18430/18430',
          },
        },
      },
      {
        id: 285030,
        event: {
          date: '2022-11-15T14:49:00+01:00',
          id: 492079,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260807,
          entityRevision: {
            id: 260807,
          },
          entity: {
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
            id: 18421,
            title: 'Aufgaben zu Brüchen',
            alias: '/mathe/18421/18421',
          },
        },
      },
      {
        id: 284943,
        event: {
          date: '2022-11-13T11:42:13+01:00',
          id: 491928,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260690,
          revision: {
            id: 260690,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284941,
        event: {
          date: '2022-11-13T11:42:13+01:00',
          id: 491927,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260690,
          entityRevision: {
            id: 260690,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284885,
        event: {
          date: '2022-11-11T21:07:54+01:00',
          id: 491887,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260507,
          revision: {
            id: 260507,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 5159,
            title: 'Aufgaben zum Belegen von Termvariablen',
            alias: '/mathe/5159/5159',
          },
          reason: '',
        },
      },
      {
        id: 284848,
        event: {
          date: '2022-11-11T20:14:10+01:00',
          id: 491865,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260629,
          revision: {
            id: 260629,
          },
          repository: {
            __typename: 'Article',
            id: 1555,
            title: 'Zylinder',
            alias: '/mathe/1555/zylinder',
          },
          reason: '',
        },
      },
      {
        id: 284831,
        event: {
          date: '2022-11-11T13:22:21+01:00',
          id: 491820,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260629,
          entityRevision: {
            id: 260629,
          },
          entity: {
            __typename: 'Article',
            id: 1555,
            title: 'Zylinder',
            alias: '/mathe/1555/zylinder',
          },
        },
      },
      {
        id: 284729,
        event: {
          date: '2022-11-09T10:34:43+01:00',
          id: 491720,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260543,
          revision: {
            id: 260543,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284728,
        event: {
          date: '2022-11-09T10:34:43+01:00',
          id: 491719,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260543,
          entityRevision: {
            id: 260543,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284726,
        event: {
          date: '2022-11-09T10:32:47+01:00',
          id: 491718,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260542,
          revision: {
            id: 260542,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284723,
        event: {
          date: '2022-11-09T10:32:47+01:00',
          id: 491717,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260542,
          entityRevision: {
            id: 260542,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284683,
        event: {
          date: '2022-11-07T20:18:45+01:00',
          id: 491682,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260507,
          entityRevision: {
            id: 260507,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 5159,
            title: 'Aufgaben zum Belegen von Termvariablen',
            alias: '/mathe/5159/5159',
          },
        },
      },
      {
        id: 284654,
        event: {
          date: '2022-11-06T15:03:31+01:00',
          id: 491650,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260473,
          revision: {
            id: 260473,
          },
          repository: {
            __typename: 'Article',
            id: 90410,
            title: 'Formeln erstellen mit LaTeX ',
            alias: '/community/90410/formeln-erstellen-mit-latex',
          },
          reason: '',
        },
      },
      {
        id: 284649,
        event: {
          date: '2022-11-06T15:03:30+01:00',
          id: 491649,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260473,
          entityRevision: {
            id: 260473,
          },
          entity: {
            __typename: 'Article',
            id: 90410,
            title: 'Formeln erstellen mit LaTeX ',
            alias: '/community/90410/formeln-erstellen-mit-latex',
          },
        },
      },
      {
        id: 284636,
        event: {
          date: '2022-11-06T14:49:43+01:00',
          id: 491648,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260471,
          revision: {
            id: 260471,
          },
          repository: {
            __typename: 'Article',
            id: 90410,
            title: 'Formeln erstellen mit LaTeX ',
            alias: '/community/90410/formeln-erstellen-mit-latex',
          },
          reason:
            'Habe ein paar kleine Schreibfehler korrigiert, ansonsten sehr schöne Zusammenfassung, die sehr hilfreich ist!!!',
        },
      },
      {
        id: 284632,
        event: {
          date: '2022-11-06T14:48:23+01:00',
          id: 491647,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260471,
          entityRevision: {
            id: 260471,
          },
          entity: {
            __typename: 'Article',
            id: 90410,
            title: 'Formeln erstellen mit LaTeX ',
            alias: '/community/90410/formeln-erstellen-mit-latex',
          },
        },
      },
      {
        id: 284607,
        event: {
          date: '2022-11-05T14:51:45+01:00',
          id: 491630,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260454,
          revision: {
            id: 260454,
          },
          repository: {
            __typename: 'CoursePage',
            id: 97760,
            title: 'Addition, Subtraktion, Multiplikation mit einem Skalar',
            alias:
              '/mathe/97760/addition-subtraktion-multiplikation-mit-einem-skalar',
          },
          reason: '',
        },
      },
      {
        id: 284606,
        event: {
          date: '2022-11-05T14:51:44+01:00',
          id: 491629,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260454,
          entityRevision: {
            id: 260454,
          },
          entity: {
            __typename: 'CoursePage',
            id: 97760,
            title: 'Addition, Subtraktion, Multiplikation mit einem Skalar',
            alias:
              '/mathe/97760/addition-subtraktion-multiplikation-mit-einem-skalar',
          },
        },
      },
      {
        id: 284596,
        event: {
          date: '2022-11-05T13:13:59+01:00',
          id: 491618,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 260442,
            username: 'Gerrit_Casper',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 2643,
          thread: {
            id: 'dDI2MDQ0NA==',
            thread: {
              nodes: [
                {
                  id: 260444,
                  content:
                    'Andererseits kann man e^x hier bei der Lösung noch kürzen',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 2643,
            title: 'Gemischte Aufgaben zum Ableiten von Funktionen',
            alias: '/mathe/2643/2643',
          },
        },
      },
      {
        id: 284594,
        event: {
          date: '2022-11-05T13:12:04+01:00',
          id: 491617,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 260442,
            username: 'Gerrit_Casper',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 2643,
          thread: {
            id: 'dDI2MDQ0Mw==',
            thread: {
              nodes: [
                {
                  id: 260443,
                  content:
                    'Ich verstehe nicht wieso die 2 aus dem Argument beim ableiten verschwindet',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 2643,
            title: 'Gemischte Aufgaben zum Ableiten von Funktionen',
            alias: '/mathe/2643/2643',
          },
        },
      },
      {
        id: 284588,
        event: {
          date: '2022-11-04T18:40:06+01:00',
          id: 491602,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260430,
          revision: {
            id: 260430,
          },
          repository: {
            __typename: 'CoursePage',
            id: 146663,
            title: 'in Arbeit: Die Frage nach dem Gehalt',
            alias:
              '/f%C3%A4cher-im-aufbau/146663/in-arbeit-die-frage-nach-dem-gehalt',
          },
          reason: '',
        },
      },
      {
        id: 284586,
        event: {
          date: '2022-11-04T18:40:06+01:00',
          id: 491601,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260430,
          entityRevision: {
            id: 260430,
          },
          entity: {
            __typename: 'CoursePage',
            id: 146663,
            title: 'in Arbeit: Die Frage nach dem Gehalt',
            alias:
              '/f%C3%A4cher-im-aufbau/146663/in-arbeit-die-frage-nach-dem-gehalt',
          },
        },
      },
      {
        id: 284483,
        event: {
          date: '2022-11-04T13:23:47+01:00',
          id: 491537,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260392,
          revision: {
            id: 260392,
          },
          repository: {
            __typename: 'CoursePage',
            id: 30192,
            title: 'Was ist ein Vektor? (1/2)',
            alias: '/mathe/30192/was-ist-ein-vektor-1-2',
          },
          reason: '',
        },
      },
      {
        id: 284478,
        event: {
          date: '2022-11-04T13:23:47+01:00',
          id: 491536,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260392,
          entityRevision: {
            id: 260392,
          },
          entity: {
            __typename: 'CoursePage',
            id: 30192,
            title: 'Was ist ein Vektor? (1/2)',
            alias: '/mathe/30192/was-ist-ein-vektor-1-2',
          },
        },
      },
      {
        id: 284470,
        event: {
          date: '2022-11-04T11:28:51+01:00',
          id: 491520,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260382,
          revision: {
            id: 260382,
          },
          repository: {
            __typename: 'Article',
            id: 1703,
            title: 'Griechisches Alphabet',
            alias: '/mathe/1703/griechisches-alphabet',
          },
          reason: '',
        },
      },
      {
        id: 284468,
        event: {
          date: '2022-11-04T11:28:50+01:00',
          id: 491519,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260382,
          entityRevision: {
            id: 260382,
          },
          entity: {
            __typename: 'Article',
            id: 1703,
            title: 'Griechisches Alphabet',
            alias: '/mathe/1703/griechisches-alphabet',
          },
        },
      },
      {
        id: 284466,
        event: {
          date: '2022-11-04T11:23:01+01:00',
          id: 491518,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260381,
          revision: {
            id: 260381,
          },
          repository: {
            __typename: 'Article',
            id: 1703,
            title: 'Griechisches Alphabet',
            alias: '/mathe/1703/griechisches-alphabet',
          },
          reason: '',
        },
      },
      {
        id: 284464,
        event: {
          date: '2022-11-04T11:23:01+01:00',
          id: 491517,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260381,
          entityRevision: {
            id: 260381,
          },
          entity: {
            __typename: 'Article',
            id: 1703,
            title: 'Griechisches Alphabet',
            alias: '/mathe/1703/griechisches-alphabet',
          },
        },
      },
      {
        id: 284463,
        event: {
          date: '2022-11-04T11:16:29+01:00',
          id: 491516,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260380,
          revision: {
            id: 260380,
          },
          repository: {
            __typename: 'Article',
            id: 1703,
            title: 'Griechisches Alphabet',
            alias: '/mathe/1703/griechisches-alphabet',
          },
          reason: '',
        },
      },
      {
        id: 284460,
        event: {
          date: '2022-11-04T11:15:33+01:00',
          id: 491515,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 260380,
          entityRevision: {
            id: 260380,
          },
          entity: {
            __typename: 'Article',
            id: 1703,
            title: 'Griechisches Alphabet',
            alias: '/mathe/1703/griechisches-alphabet',
          },
        },
      },
      {
        id: 284450,
        event: {
          date: '2022-11-03T16:08:03+01:00',
          id: 491482,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260350,
          revision: {
            id: 260350,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284448,
        event: {
          date: '2022-11-03T16:08:03+01:00',
          id: 491481,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260350,
          entityRevision: {
            id: 260350,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284446,
        event: {
          date: '2022-11-03T15:34:27+01:00',
          id: 491480,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260349,
          revision: {
            id: 260349,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284443,
        event: {
          date: '2022-11-03T15:34:27+01:00',
          id: 491479,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260349,
          entityRevision: {
            id: 260349,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284442,
        event: {
          date: '2022-11-03T11:53:37+01:00',
          id: 491448,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260329,
          revision: {
            id: 260329,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284440,
        event: {
          date: '2022-11-03T11:53:36+01:00',
          id: 491447,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260329,
          entityRevision: {
            id: 260329,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284432,
        event: {
          date: '2022-11-02T19:04:31+01:00',
          id: 491439,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260320,
          revision: {
            id: 260320,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284431,
        event: {
          date: '2022-11-02T19:04:31+01:00',
          id: 491438,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260320,
          entityRevision: {
            id: 260320,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284429,
        event: {
          date: '2022-11-02T18:30:18+01:00',
          id: 491437,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260319,
          revision: {
            id: 260319,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284427,
        event: {
          date: '2022-11-02T18:30:18+01:00',
          id: 491436,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260319,
          entityRevision: {
            id: 260319,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284424,
        event: {
          date: '2022-11-02T18:23:34+01:00',
          id: 491435,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260318,
          revision: {
            id: 260318,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 284422,
        event: {
          date: '2022-11-02T18:23:34+01:00',
          id: 491434,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260318,
          entityRevision: {
            id: 260318,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 284412,
        event: {
          date: '2022-11-02T12:25:32+01:00',
          id: 491421,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 229663,
            username: 'vsievybyky',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 12295,
          thread: {
            id: 'dDI2MDMwNQ==',
            thread: {
              nodes: [
                {
                  id: 260305,
                  content: 'Müsste da nicht = -6 stehen?',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 12295,
            title: 'Aufgaben zur Umwandlung der Ebenendarstellung',
            alias: '/mathe/12295/12295',
          },
        },
      },
      {
        id: 284410,
        event: {
          date: '2022-11-02T11:27:02+01:00',
          id: 491420,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260296,
          revision: {
            id: 260296,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 72172,
            title: 'Aufgaben mit zwei Unbekannten',
            alias: '/mathe/72172/72172',
          },
          reason: '',
        },
      },
      {
        id: 284394,
        event: {
          date: '2022-11-01T23:36:22+01:00',
          id: 491410,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260296,
          entityRevision: {
            id: 260296,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 72172,
            title: 'Aufgaben mit zwei Unbekannten',
            alias: '/mathe/72172/72172',
          },
        },
      },
      {
        id: 284020,
        event: {
          date: '2022-10-30T13:24:39+01:00',
          id: 491066,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260102,
          entityRevision: {
            id: 260102,
          },
          entity: {
            __typename: 'Article',
            id: 90410,
            title: 'Formeln erstellen mit LaTeX ',
            alias: '/community/90410/formeln-erstellen-mit-latex',
          },
        },
      },
      {
        id: 283872,
        event: {
          date: '2022-10-28T09:06:32+02:00',
          id: 490887,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 260010,
          revision: {
            id: 260010,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 60965,
            title: 'Aufgaben mit zwei Unbekannten',
            alias: '/mathe/60965/60965',
          },
          reason: '',
        },
      },
      {
        id: 283865,
        event: {
          date: '2022-10-28T07:54:24+02:00',
          id: 490886,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 260010,
          entityRevision: {
            id: 260010,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 60965,
            title: 'Aufgaben mit zwei Unbekannten',
            alias: '/mathe/60965/60965',
          },
        },
      },
      {
        id: 283840,
        event: {
          date: '2022-10-27T14:04:28+02:00',
          id: 490866,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 259989,
            username: 'Lokiloveslive',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 60965,
          thread: {
            id: 'dDI1OTk5MA==',
            thread: {
              nodes: [
                {
                  id: 259990,
                  content: 'Mein Ergebnis war P (1|6), warum ist es anders?',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 60965,
            title: 'Aufgaben mit zwei Unbekannten',
            alias: '/mathe/60965/60965',
          },
        },
      },
      {
        id: 283806,
        event: {
          date: '2022-10-26T17:16:12+02:00',
          id: 490758,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259929,
          revision: {
            id: 259929,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283801,
        event: {
          date: '2022-10-26T17:16:12+02:00',
          id: 490757,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259929,
          entityRevision: {
            id: 259929,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283798,
        event: {
          date: '2022-10-26T17:03:46+02:00',
          id: 490756,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259928,
          revision: {
            id: 259928,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283793,
        event: {
          date: '2022-10-26T17:03:46+02:00',
          id: 490755,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259928,
          entityRevision: {
            id: 259928,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283790,
        event: {
          date: '2022-10-26T17:01:18+02:00',
          id: 490751,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259925,
          revision: {
            id: 259925,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283786,
        event: {
          date: '2022-10-26T17:01:18+02:00',
          id: 490750,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259925,
          entityRevision: {
            id: 259925,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283779,
        event: {
          date: '2022-10-26T16:59:20+02:00',
          id: 490749,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259924,
          revision: {
            id: 259924,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283776,
        event: {
          date: '2022-10-26T16:59:20+02:00',
          id: 490748,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259924,
          entityRevision: {
            id: 259924,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283774,
        event: {
          date: '2022-10-26T16:40:12+02:00',
          id: 490745,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259922,
          revision: {
            id: 259922,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283769,
        event: {
          date: '2022-10-26T16:40:11+02:00',
          id: 490744,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259922,
          entityRevision: {
            id: 259922,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283765,
        event: {
          date: '2022-10-26T16:16:07+02:00',
          id: 490743,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259921,
          revision: {
            id: 259921,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283761,
        event: {
          date: '2022-10-26T16:16:07+02:00',
          id: 490742,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259921,
          entityRevision: {
            id: 259921,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283755,
        event: {
          date: '2022-10-26T16:14:40+02:00',
          id: 490741,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259920,
          revision: {
            id: 259920,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283751,
        event: {
          date: '2022-10-26T16:14:40+02:00',
          id: 490740,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259920,
          entityRevision: {
            id: 259920,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283748,
        event: {
          date: '2022-10-26T15:45:55+02:00',
          id: 490739,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259918,
          revision: {
            id: 259918,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283743,
        event: {
          date: '2022-10-26T15:45:55+02:00',
          id: 490738,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259918,
          entityRevision: {
            id: 259918,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283741,
        event: {
          date: '2022-10-26T15:07:24+02:00',
          id: 490737,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259916,
          revision: {
            id: 259916,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283738,
        event: {
          date: '2022-10-26T15:07:24+02:00',
          id: 490736,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 258048,
            username: 'yanncloud',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259916,
          entityRevision: {
            id: 259916,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283512,
        event: {
          date: '2022-10-25T16:05:36+02:00',
          id: 490635,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259782,
          revision: {
            id: 259782,
          },
          repository: {
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
            id: 13885,
            title: 'Gemischte Aufgaben zu Funktionen',
            alias: '/mathe/13885/13885',
          },
          reason: '',
        },
      },
      {
        id: 283503,
        event: {
          date: '2022-10-25T14:48:35+02:00',
          id: 490616,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259825,
          revision: {
            id: 259825,
          },
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
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 2819,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2819/2819',
          },
          reason: '',
        },
      },
      {
        id: 283501,
        event: {
          date: '2022-10-25T14:48:06+02:00',
          id: 490615,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259824,
          revision: {
            id: 259824,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 2817,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2817/2817',
          },
          reason: '',
        },
      },
      {
        id: 283499,
        event: {
          date: '2022-10-25T14:47:52+02:00',
          id: 490614,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259823,
          revision: {
            id: 259823,
          },
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
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 2815,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2815/2815',
          },
          reason: '',
        },
      },
      {
        id: 283498,
        event: {
          date: '2022-10-25T14:47:32+02:00',
          id: 490611,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259852,
          revision: {
            id: 259852,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 2813,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2813/2813',
          },
          reason: '',
        },
      },
      {
        id: 283495,
        event: {
          date: '2022-10-25T14:47:32+02:00',
          id: 490610,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259852,
          entityRevision: {
            id: 259852,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 2813,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2813/2813',
          },
        },
      },
      {
        id: 283490,
        event: {
          date: '2022-10-25T14:47:00+02:00',
          id: 490609,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259820,
          revision: {
            id: 259820,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 2809,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2809/2809',
          },
          reason: '',
        },
      },
      {
        id: 283487,
        event: {
          date: '2022-10-25T14:46:26+02:00',
          id: 490608,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259819,
          revision: {
            id: 259819,
          },
          repository: {
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
              ],
            },
            __typename: 'ExerciseGroup',
            id: 2805,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2805/2805',
          },
          reason: '',
        },
      },
      {
        id: 283476,
        event: {
          date: '2022-10-25T12:53:21+02:00',
          id: 490603,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259826,
          revision: {
            id: 259826,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 2821,
            title: 'Aufgaben zum Thema Ergebnisraum oder Ergebnismenge',
            alias: '/mathe/2821/2821',
          },
          reason: '',
        },
      },
      {
        id: 283468,
        event: {
          date: '2022-10-25T09:29:05+02:00',
          id: 490592,
          __typename: 'CreateCommentNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259842,
          comment: {
            id: 259842,
          },
          thread: {
            id: 'dDE5NjQxNg==',
            title: null,
            thread: {
              nodes: [
                {
                  id: 196416,
                },
              ],
            },
            comment: {
              nodes: [
                {
                  id: 259842,
                  content:
                    'Dann haben wir bei Teil c) einen Ergebnisraum mit 27 Möglichkeiten. ',
                },
              ],
            },
          },
        },
      },
      {
        id: 283426,
        event: {
          date: '2022-10-24T10:18:24+02:00',
          id: 490549,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259805,
          revision: {
            id: 259805,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283423,
        event: {
          date: '2022-10-24T10:18:24+02:00',
          id: 490548,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259805,
          entityRevision: {
            id: 259805,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283404,
        event: {
          date: '2022-10-24T00:27:42+02:00',
          id: 490534,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259797,
          revision: {
            id: 259797,
          },
          repository: {
            __typename: 'Article',
            id: 126371,
            title: 'Lerntipps - Eine Übersicht',
            alias: '/lerntipps/126371/lerntipps-eine-%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 283403,
        event: {
          date: '2022-10-24T00:27:42+02:00',
          id: 490533,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259797,
          entityRevision: {
            id: 259797,
          },
          entity: {
            __typename: 'Article',
            id: 126371,
            title: 'Lerntipps - Eine Übersicht',
            alias: '/lerntipps/126371/lerntipps-eine-%C3%BCbersicht',
          },
        },
      },
      {
        id: 283395,
        event: {
          date: '2022-10-24T00:01:54+02:00',
          id: 490527,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259794,
          revision: {
            id: 259794,
          },
          repository: {
            __typename: 'Article',
            id: 126371,
            title: 'Lerntipps - Eine Übersicht',
            alias: '/lerntipps/126371/lerntipps-eine-%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 283394,
        event: {
          date: '2022-10-24T00:01:54+02:00',
          id: 490526,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259794,
          entityRevision: {
            id: 259794,
          },
          entity: {
            __typename: 'Article',
            id: 126371,
            title: 'Lerntipps - Eine Übersicht',
            alias: '/lerntipps/126371/lerntipps-eine-%C3%BCbersicht',
          },
        },
      },
      {
        id: 283392,
        event: {
          date: '2022-10-23T14:08:22+02:00',
          id: 490521,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259789,
          revision: {
            id: 259789,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283390,
        event: {
          date: '2022-10-23T14:08:21+02:00',
          id: 490520,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259789,
          entityRevision: {
            id: 259789,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283386,
        event: {
          date: '2022-10-23T10:02:14+02:00',
          id: 490513,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259782,
          entityRevision: {
            id: 259782,
          },
          entity: {
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
            id: 13885,
            title: 'Gemischte Aufgaben zu Funktionen',
            alias: '/mathe/13885/13885',
          },
        },
      },
      {
        id: 283384,
        event: {
          date: '2022-10-22T17:24:24+02:00',
          id: 490512,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259777,
          revision: {
            id: 259777,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283383,
        event: {
          date: '2022-10-22T17:24:24+02:00',
          id: 490511,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259777,
          entityRevision: {
            id: 259777,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283371,
        event: {
          date: '2022-10-22T13:28:43+02:00',
          id: 490502,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259772,
          revision: {
            id: 259772,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283369,
        event: {
          date: '2022-10-22T13:28:43+02:00',
          id: 490501,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259772,
          entityRevision: {
            id: 259772,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283367,
        event: {
          date: '2022-10-22T13:25:12+02:00',
          id: 490500,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259771,
          revision: {
            id: 259771,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283365,
        event: {
          date: '2022-10-22T13:25:12+02:00',
          id: 490499,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259771,
          entityRevision: {
            id: 259771,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283343,
        event: {
          date: '2022-10-21T16:33:23+02:00',
          id: 490463,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259749,
          revision: {
            id: 259749,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283341,
        event: {
          date: '2022-10-21T16:33:23+02:00',
          id: 490462,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259749,
          entityRevision: {
            id: 259749,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283339,
        event: {
          date: '2022-10-21T13:17:40+02:00',
          id: 490453,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259742,
          revision: {
            id: 259742,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283336,
        event: {
          date: '2022-10-21T13:17:39+02:00',
          id: 490452,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259742,
          entityRevision: {
            id: 259742,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283240,
        event: {
          date: '2022-10-20T16:57:12+02:00',
          id: 490269,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259650,
          revision: {
            id: 259650,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283238,
        event: {
          date: '2022-10-20T16:57:12+02:00',
          id: 490268,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259650,
          entityRevision: {
            id: 259650,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283235,
        event: {
          date: '2022-10-20T15:15:46+02:00',
          id: 490267,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259649,
          revision: {
            id: 259649,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283233,
        event: {
          date: '2022-10-20T15:15:45+02:00',
          id: 490266,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259649,
          entityRevision: {
            id: 259649,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283226,
        event: {
          date: '2022-10-20T10:43:13+02:00',
          id: 490259,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259232,
          revision: {
            id: 259232,
          },
          repository: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
          reason: '',
        },
      },
      {
        id: 283215,
        event: {
          date: '2022-10-19T18:51:15+02:00',
          id: 490244,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259627,
          revision: {
            id: 259627,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 283214,
        event: {
          date: '2022-10-19T18:51:15+02:00',
          id: 490243,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259627,
          entityRevision: {
            id: 259627,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 283163,
        event: {
          date: '2022-10-19T14:30:16+02:00',
          id: 490184,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259602,
          revision: {
            id: 259602,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 283160,
        event: {
          date: '2022-10-19T14:30:16+02:00',
          id: 490183,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259602,
          entityRevision: {
            id: 259602,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 283093,
        event: {
          date: '2022-10-18T15:08:47+02:00',
          id: 490123,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 163773,
            username: 'LinaMaria',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259386,
          revision: {
            id: 259386,
          },
          repository: {
            __typename: 'Event',
            id: 147713,
            title: 'Tamil Redaktionssitzung (Alt)',
            alias: '/community/147713/tamil-redaktionssitzung-alt',
          },
          reason: 'Danke Menuja!',
        },
      },
      {
        id: 283087,
        event: {
          date: '2022-10-17T18:41:23+02:00',
          id: 489786,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 81950,
            username: 'Menuja',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259386,
          entityRevision: {
            id: 259386,
          },
          entity: {
            __typename: 'Event',
            id: 147713,
            title: 'Tamil Redaktionssitzung (Alt)',
            alias: '/community/147713/tamil-redaktionssitzung-alt',
          },
        },
      },
      {
        id: 283086,
        event: {
          date: '2022-10-17T18:40:16+02:00',
          id: 489785,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 81950,
            username: 'Menuja',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259385,
          entityRevision: {
            id: 259385,
          },
          entity: {
            __typename: 'Event',
            id: 147713,
            title: 'Tamil Redaktionssitzung (Alt)',
            alias: '/community/147713/tamil-redaktionssitzung-alt',
          },
        },
      },
      {
        id: 282989,
        event: {
          date: '2022-10-14T14:30:14+02:00',
          id: 489631,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259269,
          revision: {
            id: 259269,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 282988,
        event: {
          date: '2022-10-14T14:30:14+02:00',
          id: 489630,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 259269,
          entityRevision: {
            id: 259269,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 282964,
        event: {
          date: '2022-10-14T10:09:33+02:00',
          id: 489616,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259258,
          revision: {
            id: 259258,
          },
          repository: {
            __typename: 'Article',
            id: 1527,
            title: 'Brüche multiplizieren',
            alias: '/mathe/1527/br%C3%BCche-multiplizieren',
          },
          reason: '',
        },
      },
      {
        id: 282961,
        event: {
          date: '2022-10-14T10:09:33+02:00',
          id: 489615,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259258,
          entityRevision: {
            id: 259258,
          },
          entity: {
            __typename: 'Article',
            id: 1527,
            title: 'Brüche multiplizieren',
            alias: '/mathe/1527/br%C3%BCche-multiplizieren',
          },
        },
      },
      {
        id: 282949,
        event: {
          date: '2022-10-14T10:06:25+02:00',
          id: 489612,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259256,
          revision: {
            id: 259256,
          },
          repository: {
            __typename: 'Article',
            id: 1517,
            title: 'Das zweidimensionale kartesische Koordinatensystem',
            alias:
              '/mathe/1517/das-zweidimensionale-kartesische-koordinatensystem',
          },
          reason: '',
        },
      },
      {
        id: 282943,
        event: {
          date: '2022-10-14T10:06:24+02:00',
          id: 489611,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259256,
          entityRevision: {
            id: 259256,
          },
          entity: {
            __typename: 'Article',
            id: 1517,
            title: 'Das zweidimensionale kartesische Koordinatensystem',
            alias:
              '/mathe/1517/das-zweidimensionale-kartesische-koordinatensystem',
          },
        },
      },
      {
        id: 282921,
        event: {
          date: '2022-10-14T10:03:03+02:00',
          id: 489608,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259254,
          revision: {
            id: 259254,
          },
          repository: {
            __typename: 'Article',
            id: 1507,
            title: 'Subtraktion',
            alias: '/mathe/1507/subtraktion',
          },
          reason: '',
        },
      },
      {
        id: 282916,
        event: {
          date: '2022-10-14T10:03:03+02:00',
          id: 489607,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259254,
          entityRevision: {
            id: 259254,
          },
          entity: {
            __typename: 'Article',
            id: 1507,
            title: 'Subtraktion',
            alias: '/mathe/1507/subtraktion',
          },
        },
      },
      {
        id: 282908,
        event: {
          date: '2022-10-14T10:02:14+02:00',
          id: 489606,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259253,
          revision: {
            id: 259253,
          },
          repository: {
            __typename: 'Article',
            id: 1505,
            title: 'Ereignis',
            alias: '/mathe/1505/ereignis',
          },
          reason: '',
        },
      },
      {
        id: 282899,
        event: {
          date: '2022-10-14T10:02:14+02:00',
          id: 489605,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259253,
          entityRevision: {
            id: 259253,
          },
          entity: {
            __typename: 'Article',
            id: 1505,
            title: 'Ereignis',
            alias: '/mathe/1505/ereignis',
          },
        },
      },
      {
        id: 282876,
        event: {
          date: '2022-10-14T09:56:33+02:00',
          id: 489602,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259251,
          revision: {
            id: 259251,
          },
          repository: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
          reason: '',
        },
      },
      {
        id: 282867,
        event: {
          date: '2022-10-14T09:56:32+02:00',
          id: 489601,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259251,
          entityRevision: {
            id: 259251,
          },
          entity: {
            __typename: 'Article',
            id: 1501,
            title: 'Ergebnismenge',
            alias: '/mathe/1501/ergebnismenge',
          },
        },
      },
      {
        id: 282863,
        event: {
          date: '2022-10-14T09:25:47+02:00',
          id: 489600,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259250,
          revision: {
            id: 259250,
          },
          repository: {
            __typename: 'Article',
            id: 1497,
            title: 'Kleinstes gemeinsames Vielfaches',
            alias: '/mathe/1497/kleinstes-gemeinsames-vielfaches',
          },
          reason: '',
        },
      },
      {
        id: 282856,
        event: {
          date: '2022-10-14T09:25:47+02:00',
          id: 489599,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 197401,
            username: 'Annika-Hemlein',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259250,
          entityRevision: {
            id: 259250,
          },
          entity: {
            __typename: 'Article',
            id: 1497,
            title: 'Kleinstes gemeinsames Vielfaches',
            alias: '/mathe/1497/kleinstes-gemeinsames-vielfaches',
          },
        },
      },
      {
        id: 282842,
        event: {
          date: '2022-10-13T16:01:47+02:00',
          id: 489576,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 253695,
            username: 'Hager',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259232,
          entityRevision: {
            id: 259232,
          },
          entity: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
        },
      },
      {
        id: 282836,
        event: {
          date: '2022-10-13T15:33:44+02:00',
          id: 489568,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259227,
          revision: {
            id: 259227,
          },
          repository: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
          reason: '',
        },
      },
      {
        id: 282835,
        event: {
          date: '2022-10-13T15:33:44+02:00',
          id: 489567,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259227,
          entityRevision: {
            id: 259227,
          },
          entity: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
        },
      },
      {
        id: 282735,
        event: {
          date: '2022-10-12T11:50:43+02:00',
          id: 489399,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259140,
          revision: {
            id: 259140,
          },
          repository: {
            __typename: 'Article',
            id: 1759,
            title: 'Vektoren addieren und subtrahieren',
            alias: '/mathe/1759/vektoren-addieren-und-subtrahieren',
          },
          reason: '',
        },
      },
      {
        id: 282732,
        event: {
          date: '2022-10-12T11:50:43+02:00',
          id: 489398,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259140,
          entityRevision: {
            id: 259140,
          },
          entity: {
            __typename: 'Article',
            id: 1759,
            title: 'Vektoren addieren und subtrahieren',
            alias: '/mathe/1759/vektoren-addieren-und-subtrahieren',
          },
        },
      },
      {
        id: 282726,
        event: {
          date: '2022-10-12T11:44:48+02:00',
          id: 489395,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259137,
          revision: {
            id: 259137,
          },
          repository: {
            __typename: 'CoursePage',
            id: 43227,
            title: 'Repräsentant',
            alias: '/mathe/43227/repr%C3%A4sentant',
          },
          reason: '',
        },
      },
      {
        id: 282721,
        event: {
          date: '2022-10-12T11:44:48+02:00',
          id: 489394,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259137,
          entityRevision: {
            id: 259137,
          },
          entity: {
            __typename: 'CoursePage',
            id: 43227,
            title: 'Repräsentant',
            alias: '/mathe/43227/repr%C3%A4sentant',
          },
        },
      },
      {
        id: 282668,
        event: {
          date: '2022-10-11T11:41:49+02:00',
          id: 489277,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 259081,
          revision: {
            id: 259081,
          },
          repository: {
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
              ],
            },
            __typename: 'ExerciseGroup',
            id: 3383,
            title: 'Aufgaben zur Kombinatorik im typischen Sinn',
            alias: '/mathe/3383/3383',
          },
          reason: 'passt',
        },
      },
      {
        id: 282666,
        event: {
          date: '2022-10-11T10:46:13+02:00',
          id: 489276,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 259081,
          entityRevision: {
            id: 259081,
          },
          entity: {
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
              ],
            },
            __typename: 'ExerciseGroup',
            id: 3383,
            title: 'Aufgaben zur Kombinatorik im typischen Sinn',
            alias: '/mathe/3383/3383',
          },
        },
      },
      {
        id: 282658,
        event: {
          date: '2022-10-10T17:37:46+02:00',
          id: 489262,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 259072,
            username: 'bjxrn_63',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 3403,
          thread: {
            id: 'dDI1OTA3Mw==',
            thread: {
              nodes: [
                {
                  id: 259073,
                  content:
                    'Hallo, ich finde, dass die Lösung zu dieser Frage nicht ganz richtig ist, da ja auch niemand (0 Jungs/0 Mädchen) oder jeweils ein Kind (1 Junge/1 Mädchen) spielen könnte. Meiner Meinung nach wäre die richtige Lösung dann also: 6über2 x 6über2 + 6über1 x 6über1 + 6über0 x 6über0 = 261. \n\nLiebe Grüße B',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 3403,
            title: 'Aufgaben zur Kombinatorik im typischen Sinn',
            alias: '/mathe/3403/3403',
          },
        },
      },
      {
        id: 282396,
        event: {
          date: '2022-10-06T19:17:47+02:00',
          id: 488029,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 258420,
          revision: {
            id: 258420,
          },
          repository: {
            exercise: {
              __typename: 'Exercise',
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
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 5479,
            title: 'Gemischte Aufgaben zu Bruchgleichungen',
            alias: '/mathe/5479/5479',
          },
          reason: '',
        },
      },
      {
        id: 282394,
        event: {
          date: '2022-10-06T19:17:46+02:00',
          id: 488028,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 258420,
          entityRevision: {
            id: 258420,
          },
          entity: {
            exercise: {
              __typename: 'Exercise',
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
                  {
                    type: 'exerciseFolder',
                  },
                ],
              },
            },
            __typename: 'Solution',
            id: 5479,
            title: 'Gemischte Aufgaben zu Bruchgleichungen',
            alias: '/mathe/5479/5479',
          },
        },
      },
      {
        id: 282376,
        event: {
          date: '2022-10-06T16:58:43+02:00',
          id: 487892,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 70932,
            username: 'metzgaria',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 258283,
          revision: {
            id: 258283,
          },
          repository: {
            __typename: 'Article',
            id: 1571,
            title: 'Stammfunktion finden',
            alias: '/mathe/1571/stammfunktion-finden',
          },
          reason: '',
        },
      },
      {
        id: 282348,
        event: {
          date: '2022-10-06T12:20:24+02:00',
          id: 487763,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 598,
            username: 'aschreiber',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 258283,
          entityRevision: {
            id: 258283,
          },
          entity: {
            __typename: 'Article',
            id: 1571,
            title: 'Stammfunktion finden',
            alias: '/mathe/1571/stammfunktion-finden',
          },
        },
      },
      {
        id: 281732,
        event: {
          date: '2022-10-05T09:28:31+02:00',
          id: 487384,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 258079,
          revision: {
            id: 258079,
          },
          repository: {
            __typename: 'CoursePage',
            id: 44562,
            title: 'Spiegelung an besonderen Geraden',
            alias: '/mathe/44562/spiegelung-an-besonderen-geraden',
          },
          reason: '',
        },
      },
      {
        id: 281728,
        event: {
          date: '2022-10-05T09:28:30+02:00',
          id: 487383,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 258079,
          entityRevision: {
            id: 258079,
          },
          entity: {
            __typename: 'CoursePage',
            id: 44562,
            title: 'Spiegelung an besonderen Geraden',
            alias: '/mathe/44562/spiegelung-an-besonderen-geraden',
          },
        },
      },
      {
        id: 281643,
        event: {
          date: '2022-10-04T16:20:19+02:00',
          id: 487332,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256695,
          repository: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
          revision: {
            id: 256695,
            alias: '/entity/repository/compare/255220/256695',
          },
          reason: 'Kein Inhalt',
        },
      },
      {
        id: 281638,
        event: {
          date: '2022-10-04T15:57:20+02:00',
          id: 487328,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255721,
          revision: {
            id: 255721,
          },
          repository: {
            __typename: 'Article',
            id: 224234,
            title: 'Rechnen mit Uhrzeiten und Kalendertagen',
            alias: '/mathe/224234/rechnen-mit-uhrzeiten-und-kalendertagen',
          },
          reason: '',
        },
      },
      {
        id: 281316,
        event: {
          date: '2022-10-03T17:25:49+02:00',
          id: 487106,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257945,
          revision: {
            id: 257945,
          },
          repository: {
            __typename: 'CoursePage',
            id: 52448,
            title: '2. Ausklammern von Faktoren (2|2)',
            alias: '/mathe/52448/2.-ausklammern-von-faktoren-2-2',
          },
          reason: '',
        },
      },
      {
        id: 281312,
        event: {
          date: '2022-10-03T17:25:48+02:00',
          id: 487105,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257945,
          entityRevision: {
            id: 257945,
          },
          entity: {
            __typename: 'CoursePage',
            id: 52448,
            title: '2. Ausklammern von Faktoren (2|2)',
            alias: '/mathe/52448/2.-ausklammern-von-faktoren-2-2',
          },
        },
      },
      {
        id: 281249,
        event: {
          date: '2022-10-03T15:23:08+02:00',
          id: 487069,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 257926,
          revision: {
            id: 257926,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 12087,
            title: 'Gemischte Aufgaben zu Dezimalzahlen',
            alias: '/mathe/12087/12087',
          },
          reason: '',
        },
      },
      {
        id: 281247,
        event: {
          date: '2022-10-03T15:23:07+02:00',
          id: 487068,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 257926,
          entityRevision: {
            id: 257926,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 12087,
            title: 'Gemischte Aufgaben zu Dezimalzahlen',
            alias: '/mathe/12087/12087',
          },
        },
      },
      {
        id: 281245,
        event: {
          date: '2022-10-03T15:08:28+02:00',
          id: 487067,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 257925,
          revision: {
            id: 257925,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 12083,
            title: 'Gemischte Aufgaben zu Dezimalzahlen',
            alias: '/mathe/12083/12083',
          },
          reason: '',
        },
      },
      {
        id: 281240,
        event: {
          date: '2022-10-03T15:08:27+02:00',
          id: 487066,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 257925,
          entityRevision: {
            id: 257925,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 12083,
            title: 'Gemischte Aufgaben zu Dezimalzahlen',
            alias: '/mathe/12083/12083',
          },
        },
      },
      {
        id: 281075,
        event: {
          date: '2022-10-03T13:29:30+02:00',
          id: 486961,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257871,
          revision: {
            id: 257871,
          },
          repository: {
            __typename: 'CoursePage',
            id: 62226,
            title: 'Division ganzer Zahlen',
            alias: '/mathe/62226/division-ganzer-zahlen',
          },
          reason: '',
        },
      },
      {
        id: 281070,
        event: {
          date: '2022-10-03T13:29:30+02:00',
          id: 486960,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257871,
          entityRevision: {
            id: 257871,
          },
          entity: {
            __typename: 'CoursePage',
            id: 62226,
            title: 'Division ganzer Zahlen',
            alias: '/mathe/62226/division-ganzer-zahlen',
          },
        },
      },
      {
        id: 280749,
        event: {
          date: '2022-10-03T12:34:43+02:00',
          id: 486703,
          __typename: 'CreateThreadNotificationEvent',
          actor: {
            id: 254777,
            username: 'pouria',
            isActiveAuthor: false,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 12087,
          thread: {
            id: 'dDI1Nzc0MA==',
            thread: {
              nodes: [
                {
                  id: 257740,
                  content: 'Wieso fällt die Potenz (2´3) im ersten Term weg?',
                },
              ],
            },
          },
          object: {
            __typename: 'Solution',
            id: 12087,
            title: 'Gemischte Aufgaben zu Dezimalzahlen',
            alias: '/mathe/12087/12087',
          },
        },
      },
      {
        id: 280205,
        event: {
          date: '2022-10-03T09:16:53+02:00',
          id: 486363,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257571,
          revision: {
            id: 257571,
          },
          repository: {
            __typename: 'CoursePage',
            id: 102408,
            title: 'Tipps zur Verwendung',
            alias: '/nachhaltigkeit/102408/tipps-zur-verwendung',
          },
          reason: '',
        },
      },
      {
        id: 280202,
        event: {
          date: '2022-10-03T09:16:53+02:00',
          id: 486362,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257571,
          entityRevision: {
            id: 257571,
          },
          entity: {
            __typename: 'CoursePage',
            id: 102408,
            title: 'Tipps zur Verwendung',
            alias: '/nachhaltigkeit/102408/tipps-zur-verwendung',
          },
        },
      },
      {
        id: 280198,
        event: {
          date: '2022-10-03T09:16:52+02:00',
          id: 486361,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257570,
          revision: {
            id: 257570,
          },
          repository: {
            __typename: 'CoursePage',
            id: 102402,
            title: 'Herstellung in Schritten',
            alias: '/nachhaltigkeit/102402/herstellung-in-schritten',
          },
          reason: '',
        },
      },
      {
        id: 280194,
        event: {
          date: '2022-10-03T09:16:52+02:00',
          id: 486360,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257570,
          entityRevision: {
            id: 257570,
          },
          entity: {
            __typename: 'CoursePage',
            id: 102402,
            title: 'Herstellung in Schritten',
            alias: '/nachhaltigkeit/102402/herstellung-in-schritten',
          },
        },
      },
      {
        id: 280193,
        event: {
          date: '2022-10-03T09:16:52+02:00',
          id: 486359,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257569,
          revision: {
            id: 257569,
          },
          repository: {
            __typename: 'CoursePage',
            id: 102396,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/102396/vorbereitung',
          },
          reason: '',
        },
      },
      {
        id: 280187,
        event: {
          date: '2022-10-03T09:16:51+02:00',
          id: 486358,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257569,
          entityRevision: {
            id: 257569,
          },
          entity: {
            __typename: 'CoursePage',
            id: 102396,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/102396/vorbereitung',
          },
        },
      },
      {
        id: 280183,
        event: {
          date: '2022-10-03T09:16:51+02:00',
          id: 486357,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257568,
          revision: {
            id: 257568,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140980,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/140980/%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 280182,
        event: {
          date: '2022-10-03T09:16:51+02:00',
          id: 486356,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257568,
          entityRevision: {
            id: 257568,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140980,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/140980/%C3%BCbersicht',
          },
        },
      },
      {
        id: 280033,
        event: {
          date: '2022-10-02T21:54:20+02:00',
          id: 486155,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257467,
          revision: {
            id: 257467,
          },
          repository: {
            __typename: 'CoursePage',
            id: 108701,
            title: 'Faden durch den Deckel',
            alias: '/nachhaltigkeit/108701/faden-durch-den-deckel',
          },
          reason: '',
        },
      },
      {
        id: 280031,
        event: {
          date: '2022-10-02T21:54:20+02:00',
          id: 486154,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257467,
          entityRevision: {
            id: 257467,
          },
          entity: {
            __typename: 'CoursePage',
            id: 108701,
            title: 'Faden durch den Deckel',
            alias: '/nachhaltigkeit/108701/faden-durch-den-deckel',
          },
        },
      },
      {
        id: 280029,
        event: {
          date: '2022-10-02T21:54:18+02:00',
          id: 486153,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257466,
          revision: {
            id: 257466,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140989,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/140989/vorbereitung',
          },
          reason: '',
        },
      },
      {
        id: 280028,
        event: {
          date: '2022-10-02T21:54:17+02:00',
          id: 486152,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257466,
          entityRevision: {
            id: 257466,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140989,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/140989/vorbereitung',
          },
        },
      },
      {
        id: 280025,
        event: {
          date: '2022-10-02T21:54:17+02:00',
          id: 486151,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257465,
          revision: {
            id: 257465,
          },
          repository: {
            __typename: 'CoursePage',
            id: 108873,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/108873/%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 280023,
        event: {
          date: '2022-10-02T21:54:17+02:00',
          id: 486150,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257465,
          entityRevision: {
            id: 257465,
          },
          entity: {
            __typename: 'CoursePage',
            id: 108873,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/108873/%C3%BCbersicht',
          },
        },
      },
      {
        id: 279727,
        event: {
          date: '2022-10-02T19:35:02+02:00',
          id: 485903,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257346,
          revision: {
            id: 257346,
          },
          repository: {
            __typename: 'CoursePage',
            id: 130446,
            title: 'Beutel verzieren',
            alias: '/nachhaltigkeit/130446/beutel-verzieren',
          },
          reason: '',
        },
      },
      {
        id: 279725,
        event: {
          date: '2022-10-02T19:35:02+02:00',
          id: 485902,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257346,
          entityRevision: {
            id: 257346,
          },
          entity: {
            __typename: 'CoursePage',
            id: 130446,
            title: 'Beutel verzieren',
            alias: '/nachhaltigkeit/130446/beutel-verzieren',
          },
        },
      },
      {
        id: 279722,
        event: {
          date: '2022-10-02T19:35:02+02:00',
          id: 485901,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257345,
          revision: {
            id: 257345,
          },
          repository: {
            __typename: 'CoursePage',
            id: 130441,
            title: 'Kordel einziehen',
            alias: '/nachhaltigkeit/130441/kordel-einziehen',
          },
          reason: '',
        },
      },
      {
        id: 279721,
        event: {
          date: '2022-10-02T19:35:01+02:00',
          id: 485900,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257345,
          entityRevision: {
            id: 257345,
          },
          entity: {
            __typename: 'CoursePage',
            id: 130441,
            title: 'Kordel einziehen',
            alias: '/nachhaltigkeit/130441/kordel-einziehen',
          },
        },
      },
      {
        id: 279719,
        event: {
          date: '2022-10-02T19:35:01+02:00',
          id: 485899,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257344,
          revision: {
            id: 257344,
          },
          repository: {
            __typename: 'CoursePage',
            id: 130436,
            title: 'Tunnelzug feststecken und nähen',
            alias:
              '/nachhaltigkeit/130436/tunnelzug-feststecken-und-n%C3%A4hen',
          },
          reason: '',
        },
      },
      {
        id: 279716,
        event: {
          date: '2022-10-02T19:35:01+02:00',
          id: 485898,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257344,
          entityRevision: {
            id: 257344,
          },
          entity: {
            __typename: 'CoursePage',
            id: 130436,
            title: 'Tunnelzug feststecken und nähen',
            alias:
              '/nachhaltigkeit/130436/tunnelzug-feststecken-und-n%C3%A4hen',
          },
        },
      },
      {
        id: 279714,
        event: {
          date: '2022-10-02T19:35:00+02:00',
          id: 485897,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257343,
          revision: {
            id: 257343,
          },
          repository: {
            __typename: 'CoursePage',
            id: 130432,
            title: 'Feststecken und Nähen',
            alias: '/nachhaltigkeit/130432/feststecken-und-n%C3%A4hen',
          },
          reason: '',
        },
      },
      {
        id: 279712,
        event: {
          date: '2022-10-02T19:35:00+02:00',
          id: 485896,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257343,
          entityRevision: {
            id: 257343,
          },
          entity: {
            __typename: 'CoursePage',
            id: 130432,
            title: 'Feststecken und Nähen',
            alias: '/nachhaltigkeit/130432/feststecken-und-n%C3%A4hen',
          },
        },
      },
      {
        id: 279708,
        event: {
          date: '2022-10-02T19:34:58+02:00',
          id: 485893,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257341,
          revision: {
            id: 257341,
          },
          repository: {
            __typename: 'CoursePage',
            id: 130424,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/130424/vorbereitung',
          },
          reason: '',
        },
      },
      {
        id: 279706,
        event: {
          date: '2022-10-02T19:34:57+02:00',
          id: 485892,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257341,
          entityRevision: {
            id: 257341,
          },
          entity: {
            __typename: 'CoursePage',
            id: 130424,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/130424/vorbereitung',
          },
        },
      },
      {
        id: 279705,
        event: {
          date: '2022-10-02T19:34:57+02:00',
          id: 485891,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257340,
          revision: {
            id: 257340,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140996,
            title: 'Überblick',
            alias: '/nachhaltigkeit/140996/%C3%BCberblick',
          },
          reason: '',
        },
      },
      {
        id: 279704,
        event: {
          date: '2022-10-02T19:34:57+02:00',
          id: 485890,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257340,
          entityRevision: {
            id: 257340,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140996,
            title: 'Überblick',
            alias: '/nachhaltigkeit/140996/%C3%BCberblick',
          },
        },
      },
      {
        id: 279693,
        event: {
          date: '2022-10-02T19:27:51+02:00',
          id: 485879,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257334,
          revision: {
            id: 257334,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131394,
            title: 'Smoothie-Variante',
            alias: '/nachhaltigkeit/131394/smoothie-variante',
          },
          reason: '',
        },
      },
      {
        id: 279691,
        event: {
          date: '2022-10-02T19:27:51+02:00',
          id: 485878,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257334,
          entityRevision: {
            id: 257334,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131394,
            title: 'Smoothie-Variante',
            alias: '/nachhaltigkeit/131394/smoothie-variante',
          },
        },
      },
      {
        id: 279688,
        event: {
          date: '2022-10-02T19:27:49+02:00',
          id: 485877,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257333,
          revision: {
            id: 257333,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131390,
            title: 'Loch in den Deckel schneiden',
            alias: '/nachhaltigkeit/131390/loch-in-den-deckel-schneiden',
          },
          reason: '',
        },
      },
      {
        id: 279687,
        event: {
          date: '2022-10-02T19:27:49+02:00',
          id: 485876,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257333,
          entityRevision: {
            id: 257333,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131390,
            title: 'Loch in den Deckel schneiden',
            alias: '/nachhaltigkeit/131390/loch-in-den-deckel-schneiden',
          },
        },
      },
      {
        id: 279685,
        event: {
          date: '2022-10-02T19:27:48+02:00',
          id: 485875,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257332,
          revision: {
            id: 257332,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131385,
            title: 'To-Go-Variante',
            alias: '/nachhaltigkeit/131385/to-go-variante',
          },
          reason: '',
        },
      },
      {
        id: 279683,
        event: {
          date: '2022-10-02T19:27:48+02:00',
          id: 485874,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257332,
          entityRevision: {
            id: 257332,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131385,
            title: 'To-Go-Variante',
            alias: '/nachhaltigkeit/131385/to-go-variante',
          },
        },
      },
      {
        id: 279681,
        event: {
          date: '2022-10-02T19:27:47+02:00',
          id: 485873,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257331,
          revision: {
            id: 257331,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131381,
            title: 'Coffee-Sleeve nähen',
            alias: '/nachhaltigkeit/131381/coffee-sleeve-n%C3%A4hen',
          },
          reason: '',
        },
      },
      {
        id: 279678,
        event: {
          date: '2022-10-02T19:27:47+02:00',
          id: 485872,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257331,
          entityRevision: {
            id: 257331,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131381,
            title: 'Coffee-Sleeve nähen',
            alias: '/nachhaltigkeit/131381/coffee-sleeve-n%C3%A4hen',
          },
        },
      },
      {
        id: 279675,
        event: {
          date: '2022-10-02T19:27:45+02:00',
          id: 485869,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257329,
          revision: {
            id: 257329,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131371,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/131371/vorbereitung',
          },
          reason: '',
        },
      },
      {
        id: 279673,
        event: {
          date: '2022-10-02T19:27:45+02:00',
          id: 485868,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257329,
          entityRevision: {
            id: 257329,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131371,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/131371/vorbereitung',
          },
        },
      },
      {
        id: 279671,
        event: {
          date: '2022-10-02T19:27:44+02:00',
          id: 485867,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257328,
          revision: {
            id: 257328,
          },
          repository: {
            __typename: 'CoursePage',
            id: 141006,
            title: 'Überblick',
            alias: '/nachhaltigkeit/141006/%C3%BCberblick',
          },
          reason: '',
        },
      },
      {
        id: 279670,
        event: {
          date: '2022-10-02T19:27:44+02:00',
          id: 485866,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257328,
          entityRevision: {
            id: 257328,
          },
          entity: {
            __typename: 'CoursePage',
            id: 141006,
            title: 'Überblick',
            alias: '/nachhaltigkeit/141006/%C3%BCberblick',
          },
        },
      },
      {
        id: 279667,
        event: {
          date: '2022-10-02T19:25:08+02:00',
          id: 485863,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257326,
          revision: {
            id: 257326,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131425,
            title: 'Fertig!',
            alias: '/nachhaltigkeit/131425/fertig',
          },
          reason: '',
        },
      },
      {
        id: 279665,
        event: {
          date: '2022-10-02T19:25:08+02:00',
          id: 485862,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257326,
          entityRevision: {
            id: 257326,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131425,
            title: 'Fertig!',
            alias: '/nachhaltigkeit/131425/fertig',
          },
        },
      },
      {
        id: 279661,
        event: {
          date: '2022-10-02T19:25:07+02:00',
          id: 485859,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257324,
          revision: {
            id: 257324,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131411,
            title: 'Schritt 2',
            alias: '/nachhaltigkeit/131411/schritt-2',
          },
          reason: '',
        },
      },
      {
        id: 279659,
        event: {
          date: '2022-10-02T19:25:07+02:00',
          id: 485858,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257324,
          entityRevision: {
            id: 257324,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131411,
            title: 'Schritt 2',
            alias: '/nachhaltigkeit/131411/schritt-2',
          },
        },
      },
      {
        id: 279654,
        event: {
          date: '2022-10-02T19:25:04+02:00',
          id: 485855,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257322,
          revision: {
            id: 257322,
          },
          repository: {
            __typename: 'CoursePage',
            id: 131404,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/131404/vorbereitung',
          },
          reason: '',
        },
      },
      {
        id: 279652,
        event: {
          date: '2022-10-02T19:25:04+02:00',
          id: 485854,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257322,
          entityRevision: {
            id: 257322,
          },
          entity: {
            __typename: 'CoursePage',
            id: 131404,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/131404/vorbereitung',
          },
        },
      },
      {
        id: 279651,
        event: {
          date: '2022-10-02T19:25:04+02:00',
          id: 485853,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257321,
          revision: {
            id: 257321,
          },
          repository: {
            __typename: 'CoursePage',
            id: 141019,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/141019/%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 279650,
        event: {
          date: '2022-10-02T19:25:03+02:00',
          id: 485852,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257321,
          entityRevision: {
            id: 257321,
          },
          entity: {
            __typename: 'CoursePage',
            id: 141019,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/141019/%C3%BCbersicht',
          },
        },
      },
      {
        id: 279617,
        event: {
          date: '2022-10-02T18:23:18+02:00',
          id: 485783,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257286,
          revision: {
            id: 257286,
          },
          repository: {
            __typename: 'CoursePage',
            id: 135625,
            title: 'Fertig!',
            alias: '/nachhaltigkeit/135625/fertig',
          },
          reason: '',
        },
      },
      {
        id: 279615,
        event: {
          date: '2022-10-02T18:23:17+02:00',
          id: 485782,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257286,
          entityRevision: {
            id: 257286,
          },
          entity: {
            __typename: 'CoursePage',
            id: 135625,
            title: 'Fertig!',
            alias: '/nachhaltigkeit/135625/fertig',
          },
        },
      },
      {
        id: 279608,
        event: {
          date: '2022-10-02T18:23:14+02:00',
          id: 485777,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257283,
          revision: {
            id: 257283,
          },
          repository: {
            __typename: 'CoursePage',
            id: 135604,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/135604/vorbereitung',
          },
          reason: '',
        },
      },
      {
        id: 279607,
        event: {
          date: '2022-10-02T18:23:14+02:00',
          id: 485776,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257283,
          entityRevision: {
            id: 257283,
          },
          entity: {
            __typename: 'CoursePage',
            id: 135604,
            title: 'Vorbereitung',
            alias: '/nachhaltigkeit/135604/vorbereitung',
          },
        },
      },
      {
        id: 279605,
        event: {
          date: '2022-10-02T18:23:13+02:00',
          id: 485775,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257282,
          revision: {
            id: 257282,
          },
          repository: {
            __typename: 'CoursePage',
            id: 141039,
            title: 'Überblick',
            alias: '/nachhaltigkeit/141039/%C3%BCberblick',
          },
          reason: '',
        },
      },
      {
        id: 279602,
        event: {
          date: '2022-10-02T18:23:13+02:00',
          id: 485774,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257282,
          entityRevision: {
            id: 257282,
          },
          entity: {
            __typename: 'CoursePage',
            id: 141039,
            title: 'Überblick',
            alias: '/nachhaltigkeit/141039/%C3%BCberblick',
          },
        },
      },
      {
        id: 279559,
        event: {
          date: '2022-10-02T17:57:23+02:00',
          id: 485707,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257248,
          revision: {
            id: 257248,
          },
          repository: {
            __typename: 'CoursePage',
            id: 139934,
            title: 'Nachfrage',
            alias: '/f%C3%A4cher-im-aufbau/139934/nachfrage',
          },
          reason: '',
        },
      },
      {
        id: 279556,
        event: {
          date: '2022-10-02T17:57:23+02:00',
          id: 485706,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257248,
          entityRevision: {
            id: 257248,
          },
          entity: {
            __typename: 'CoursePage',
            id: 139934,
            title: 'Nachfrage',
            alias: '/f%C3%A4cher-im-aufbau/139934/nachfrage',
          },
        },
      },
      {
        id: 279541,
        event: {
          date: '2022-10-02T17:50:40+02:00',
          id: 485691,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257240,
          revision: {
            id: 257240,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140192,
            title: 'Badewannenfüllung im Zeitverlauf',
            alias: '/mathe/140192/badewannenf%C3%BCllung-im-zeitverlauf',
          },
          reason: '',
        },
      },
      {
        id: 279540,
        event: {
          date: '2022-10-02T17:50:40+02:00',
          id: 485690,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257240,
          entityRevision: {
            id: 257240,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140192,
            title: 'Badewannenfüllung im Zeitverlauf',
            alias: '/mathe/140192/badewannenf%C3%BCllung-im-zeitverlauf',
          },
        },
      },
      {
        id: 279539,
        event: {
          date: '2022-10-02T17:50:40+02:00',
          id: 485689,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257239,
          revision: {
            id: 257239,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140181,
            title: 'Telefonanruf mit Folgen (2/2)',
            alias: '/mathe/140181/telefonanruf-mit-folgen-2-2',
          },
          reason: '',
        },
      },
      {
        id: 279538,
        event: {
          date: '2022-10-02T17:50:40+02:00',
          id: 485688,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257239,
          entityRevision: {
            id: 257239,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140181,
            title: 'Telefonanruf mit Folgen (2/2)',
            alias: '/mathe/140181/telefonanruf-mit-folgen-2-2',
          },
        },
      },
      {
        id: 279535,
        event: {
          date: '2022-10-02T17:48:19+02:00',
          id: 485679,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257234,
          revision: {
            id: 257234,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140263,
            title: 'Plastikfrei zu Hause',
            alias: '/nachhaltigkeit/140263/plastikfrei-zu-hause',
          },
          reason: '',
        },
      },
      {
        id: 279532,
        event: {
          date: '2022-10-02T17:48:18+02:00',
          id: 485678,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257234,
          entityRevision: {
            id: 257234,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140263,
            title: 'Plastikfrei zu Hause',
            alias: '/nachhaltigkeit/140263/plastikfrei-zu-hause',
          },
        },
      },
      {
        id: 279529,
        event: {
          date: '2022-10-02T17:48:18+02:00',
          id: 485677,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257233,
          revision: {
            id: 257233,
          },
          repository: {
            __typename: 'CoursePage',
            id: 141140,
            title: ' Plastikmüll - ein Problem',
            alias: '/nachhaltigkeit/141140/plastikm%C3%BCll-ein-problem',
          },
          reason: '',
        },
      },
      {
        id: 279527,
        event: {
          date: '2022-10-02T17:48:17+02:00',
          id: 485676,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257233,
          entityRevision: {
            id: 257233,
          },
          entity: {
            __typename: 'CoursePage',
            id: 141140,
            title: ' Plastikmüll - ein Problem',
            alias: '/nachhaltigkeit/141140/plastikm%C3%BCll-ein-problem',
          },
        },
      },
      {
        id: 279525,
        event: {
          date: '2022-10-02T17:48:17+02:00',
          id: 485675,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257232,
          revision: {
            id: 257232,
          },
          repository: {
            __typename: 'CoursePage',
            id: 140272,
            title: 'Überblick',
            alias: '/nachhaltigkeit/140272/%C3%BCberblick',
          },
          reason: '',
        },
      },
      {
        id: 279522,
        event: {
          date: '2022-10-02T17:48:17+02:00',
          id: 485674,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257232,
          entityRevision: {
            id: 257232,
          },
          entity: {
            __typename: 'CoursePage',
            id: 140272,
            title: 'Überblick',
            alias: '/nachhaltigkeit/140272/%C3%BCberblick',
          },
        },
      },
      {
        id: 279469,
        event: {
          date: '2022-10-02T17:27:18+02:00',
          id: 485645,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257217,
          revision: {
            id: 257217,
          },
          repository: {
            __typename: 'CoursePage',
            id: 22074,
            title: 'Division: Brucht geteilt durch Bruch',
            alias: '/mathe/22074/division-brucht-geteilt-durch-bruch',
          },
          reason: '',
        },
      },
      {
        id: 279467,
        event: {
          date: '2022-10-02T17:27:18+02:00',
          id: 485644,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257217,
          entityRevision: {
            id: 257217,
          },
          entity: {
            __typename: 'CoursePage',
            id: 22074,
            title: 'Division: Brucht geteilt durch Bruch',
            alias: '/mathe/22074/division-brucht-geteilt-durch-bruch',
          },
        },
      },
      {
        id: 279465,
        event: {
          date: '2022-10-02T17:27:17+02:00',
          id: 485643,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257216,
          revision: {
            id: 257216,
          },
          repository: {
            __typename: 'CoursePage',
            id: 20329,
            title: 'Division:  Bruch geteilt durch ganze Zahl ',
            alias: '/mathe/20329/division-bruch-geteilt-durch-ganze-zahl',
          },
          reason: '',
        },
      },
      {
        id: 279464,
        event: {
          date: '2022-10-02T17:27:17+02:00',
          id: 485642,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257216,
          entityRevision: {
            id: 257216,
          },
          entity: {
            __typename: 'CoursePage',
            id: 20329,
            title: 'Division:  Bruch geteilt durch ganze Zahl ',
            alias: '/mathe/20329/division-bruch-geteilt-durch-ganze-zahl',
          },
        },
      },
      {
        id: 279463,
        event: {
          date: '2022-10-02T17:27:17+02:00',
          id: 485641,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257215,
          revision: {
            id: 257215,
          },
          repository: {
            __typename: 'CoursePage',
            id: 21729,
            title: 'Multiplikation: Bruch mal Bruch',
            alias: '/mathe/21729/multiplikation-bruch-mal-bruch',
          },
          reason: '',
        },
      },
      {
        id: 279460,
        event: {
          date: '2022-10-02T17:27:16+02:00',
          id: 485640,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257215,
          entityRevision: {
            id: 257215,
          },
          entity: {
            __typename: 'CoursePage',
            id: 21729,
            title: 'Multiplikation: Bruch mal Bruch',
            alias: '/mathe/21729/multiplikation-bruch-mal-bruch',
          },
        },
      },
      {
        id: 279457,
        event: {
          date: '2022-10-02T17:27:16+02:00',
          id: 485639,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257214,
          revision: {
            id: 257214,
          },
          repository: {
            __typename: 'CoursePage',
            id: 21725,
            title: 'Multiplikation: Bruch mal natürliche Zahl',
            alias: '/mathe/21725/multiplikation-bruch-mal-nat%C3%BCrliche-zahl',
          },
          reason: '',
        },
      },
      {
        id: 279454,
        event: {
          date: '2022-10-02T17:27:16+02:00',
          id: 485638,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257214,
          entityRevision: {
            id: 257214,
          },
          entity: {
            __typename: 'CoursePage',
            id: 21725,
            title: 'Multiplikation: Bruch mal natürliche Zahl',
            alias: '/mathe/21725/multiplikation-bruch-mal-nat%C3%BCrliche-zahl',
          },
        },
      },
      {
        id: 279452,
        event: {
          date: '2022-10-02T17:27:15+02:00',
          id: 485637,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257213,
          revision: {
            id: 257213,
          },
          repository: {
            __typename: 'CoursePage',
            id: 20326,
            title: 'Multiplikation: natürliche Zahl mal Bruch',
            alias: '/mathe/20326/multiplikation-nat%C3%BCrliche-zahl-mal-bruch',
          },
          reason: '',
        },
      },
      {
        id: 279450,
        event: {
          date: '2022-10-02T17:27:15+02:00',
          id: 485636,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257213,
          entityRevision: {
            id: 257213,
          },
          entity: {
            __typename: 'CoursePage',
            id: 20326,
            title: 'Multiplikation: natürliche Zahl mal Bruch',
            alias: '/mathe/20326/multiplikation-nat%C3%BCrliche-zahl-mal-bruch',
          },
        },
      },
      {
        id: 279449,
        event: {
          date: '2022-10-02T17:27:14+02:00',
          id: 485635,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257212,
          revision: {
            id: 257212,
          },
          repository: {
            __typename: 'Course',
            id: 20314,
            title: 'Rechnen mit Brüchen',
            alias: '/mathe/20314/rechnen-mit-br%C3%BCchen',
          },
          reason: '',
        },
      },
      {
        id: 279446,
        event: {
          date: '2022-10-02T17:27:13+02:00',
          id: 485634,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257212,
          entityRevision: {
            id: 257212,
          },
          entity: {
            __typename: 'Course',
            id: 20314,
            title: 'Rechnen mit Brüchen',
            alias: '/mathe/20314/rechnen-mit-br%C3%BCchen',
          },
        },
      },
      {
        id: 279442,
        event: {
          date: '2022-10-02T17:13:16+02:00',
          id: 485633,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257211,
          revision: {
            id: 257211,
          },
          repository: {
            __typename: 'CoursePage',
            id: 44185,
            title: 'Drehung mit besonderen Winkelmaßen',
            alias: '/mathe/44185/drehung-mit-besonderen-winkelma%C3%9Fen',
          },
          reason: '',
        },
      },
      {
        id: 279438,
        event: {
          date: '2022-10-02T17:13:15+02:00',
          id: 485632,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257211,
          entityRevision: {
            id: 257211,
          },
          entity: {
            __typename: 'CoursePage',
            id: 44185,
            title: 'Drehung mit besonderen Winkelmaßen',
            alias: '/mathe/44185/drehung-mit-besonderen-winkelma%C3%9Fen',
          },
        },
      },
      {
        id: 279431,
        event: {
          date: '2022-10-02T17:13:15+02:00',
          id: 485631,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257210,
          revision: {
            id: 257210,
          },
          repository: {
            __typename: 'CoursePage',
            id: 43645,
            title:
              'Beispiel: Multiplikation einer 2x2 Matrix mit einem Vektor ',
            alias:
              '/mathe/43645/beispiel-multiplikation-einer-2x2-matrix-mit-einem-vektor',
          },
          reason: '',
        },
      },
      {
        id: 279428,
        event: {
          date: '2022-10-02T17:13:15+02:00',
          id: 485630,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257210,
          entityRevision: {
            id: 257210,
          },
          entity: {
            __typename: 'CoursePage',
            id: 43645,
            title:
              'Beispiel: Multiplikation einer 2x2 Matrix mit einem Vektor ',
            alias:
              '/mathe/43645/beispiel-multiplikation-einer-2x2-matrix-mit-einem-vektor',
          },
        },
      },
      {
        id: 279423,
        event: {
          date: '2022-10-02T17:13:14+02:00',
          id: 485629,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257209,
          revision: {
            id: 257209,
          },
          repository: {
            __typename: 'CoursePage',
            id: 43189,
            title: 'Die Matrix',
            alias: '/mathe/43189/die-matrix',
          },
          reason: '',
        },
      },
      {
        id: 279418,
        event: {
          date: '2022-10-02T17:13:14+02:00',
          id: 485628,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257209,
          entityRevision: {
            id: 257209,
          },
          entity: {
            __typename: 'CoursePage',
            id: 43189,
            title: 'Die Matrix',
            alias: '/mathe/43189/die-matrix',
          },
        },
      },
      {
        id: 279415,
        event: {
          date: '2022-10-02T17:13:13+02:00',
          id: 485627,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257208,
          revision: {
            id: 257208,
          },
          repository: {
            __typename: 'Course',
            id: 43185,
            title: 'Drehung mittels Matrizen',
            alias: '/mathe/43185/drehung-mittels-matrizen',
          },
          reason: '',
        },
      },
      {
        id: 279412,
        event: {
          date: '2022-10-02T17:13:12+02:00',
          id: 485626,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257208,
          entityRevision: {
            id: 257208,
          },
          entity: {
            __typename: 'Course',
            id: 43185,
            title: 'Drehung mittels Matrizen',
            alias: '/mathe/43185/drehung-mittels-matrizen',
          },
        },
      },
      {
        id: 279399,
        event: {
          date: '2022-10-02T17:04:28+02:00',
          id: 485623,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257206,
          revision: {
            id: 257206,
          },
          repository: {
            __typename: 'CoursePage',
            id: 58154,
            title: 'Gegenseitige Lage  von Geraden und Geraden',
            alias: '/mathe/58154/gegenseitige-lage-von-geraden-und-geraden',
          },
          reason: '',
        },
      },
      {
        id: 279398,
        event: {
          date: '2022-10-02T17:04:28+02:00',
          id: 485622,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257206,
          entityRevision: {
            id: 257206,
          },
          entity: {
            __typename: 'CoursePage',
            id: 58154,
            title: 'Gegenseitige Lage  von Geraden und Geraden',
            alias: '/mathe/58154/gegenseitige-lage-von-geraden-und-geraden',
          },
        },
      },
      {
        id: 279386,
        event: {
          date: '2022-10-02T17:04:27+02:00',
          id: 485619,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257204,
          revision: {
            id: 257204,
          },
          repository: {
            __typename: 'CoursePage',
            id: 58150,
            title: 'Geraden',
            alias: '/mathe/58150/geraden',
          },
          reason: '',
        },
      },
      {
        id: 279376,
        event: {
          date: '2022-10-02T17:04:27+02:00',
          id: 485618,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257204,
          entityRevision: {
            id: 257204,
          },
          entity: {
            __typename: 'CoursePage',
            id: 58150,
            title: 'Geraden',
            alias: '/mathe/58150/geraden',
          },
        },
      },
      {
        id: 279367,
        event: {
          date: '2022-10-02T17:04:25+02:00',
          id: 485615,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257202,
          revision: {
            id: 257202,
          },
          repository: {
            __typename: 'CoursePage',
            id: 58178,
            title: 'Lineare (Un)abhängigkeit (1/2)',
            alias: '/mathe/58178/lineare-un-abh%C3%A4ngigkeit-1-2',
          },
          reason: '',
        },
      },
      {
        id: 279363,
        event: {
          date: '2022-10-02T17:04:25+02:00',
          id: 485614,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257202,
          entityRevision: {
            id: 257202,
          },
          entity: {
            __typename: 'CoursePage',
            id: 58178,
            title: 'Lineare (Un)abhängigkeit (1/2)',
            alias: '/mathe/58178/lineare-un-abh%C3%A4ngigkeit-1-2',
          },
        },
      },
      {
        id: 279355,
        event: {
          date: '2022-10-02T17:04:23+02:00',
          id: 485611,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257200,
          revision: {
            id: 257200,
          },
          repository: {
            __typename: 'CoursePage',
            id: 58144,
            title: 'Vektoren',
            alias: '/mathe/58144/vektoren',
          },
          reason: '',
        },
      },
      {
        id: 279351,
        event: {
          date: '2022-10-02T17:04:23+02:00',
          id: 485610,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257200,
          entityRevision: {
            id: 257200,
          },
          entity: {
            __typename: 'CoursePage',
            id: 58144,
            title: 'Vektoren',
            alias: '/mathe/58144/vektoren',
          },
        },
      },
      {
        id: 279180,
        event: {
          date: '2022-10-02T16:30:43+02:00',
          id: 485548,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 257167,
          revision: {
            id: 257167,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 279178,
        event: {
          date: '2022-10-02T16:30:43+02:00',
          id: 485547,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 257167,
          entityRevision: {
            id: 257167,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 278696,
        event: {
          date: '2022-10-02T14:49:34+02:00',
          id: 485289,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257035,
          revision: {
            id: 257035,
          },
          repository: {
            __typename: 'CoursePage',
            id: 135591,
            title: 'Müll vermeiden',
            alias: '/nachhaltigkeit/135591/m%C3%BCll-vermeiden',
          },
          reason: '',
        },
      },
      {
        id: 278693,
        event: {
          date: '2022-10-02T14:49:34+02:00',
          id: 485288,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257035,
          entityRevision: {
            id: 257035,
          },
          entity: {
            __typename: 'CoursePage',
            id: 135591,
            title: 'Müll vermeiden',
            alias: '/nachhaltigkeit/135591/m%C3%BCll-vermeiden',
          },
        },
      },
      {
        id: 278689,
        event: {
          date: '2022-10-02T14:49:33+02:00',
          id: 485287,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257034,
          revision: {
            id: 257034,
          },
          repository: {
            __typename: 'CoursePage',
            id: 135589,
            title: 'Auswertung',
            alias: '/nachhaltigkeit/135589/auswertung',
          },
          reason: '',
        },
      },
      {
        id: 278685,
        event: {
          date: '2022-10-02T14:49:33+02:00',
          id: 485286,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257034,
          entityRevision: {
            id: 257034,
          },
          entity: {
            __typename: 'CoursePage',
            id: 135589,
            title: 'Auswertung',
            alias: '/nachhaltigkeit/135589/auswertung',
          },
        },
      },
      {
        id: 278683,
        event: {
          date: '2022-10-02T14:49:32+02:00',
          id: 485285,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257033,
          revision: {
            id: 257033,
          },
          repository: {
            __typename: 'CoursePage',
            id: 135576,
            title: 'Vorgehen',
            alias: '/nachhaltigkeit/135576/vorgehen',
          },
          reason: '',
        },
      },
      {
        id: 278680,
        event: {
          date: '2022-10-02T14:49:32+02:00',
          id: 485284,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257033,
          entityRevision: {
            id: 257033,
          },
          entity: {
            __typename: 'CoursePage',
            id: 135576,
            title: 'Vorgehen',
            alias: '/nachhaltigkeit/135576/vorgehen',
          },
        },
      },
      {
        id: 278676,
        event: {
          date: '2022-10-02T14:49:31+02:00',
          id: 485283,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257032,
          revision: {
            id: 257032,
          },
          repository: {
            __typename: 'CoursePage',
            id: 135569,
            title: 'Hintergrund und Material',
            alias: '/nachhaltigkeit/135569/hintergrund-und-material',
          },
          reason: '',
        },
      },
      {
        id: 278674,
        event: {
          date: '2022-10-02T14:49:31+02:00',
          id: 485282,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257032,
          entityRevision: {
            id: 257032,
          },
          entity: {
            __typename: 'CoursePage',
            id: 135569,
            title: 'Hintergrund und Material',
            alias: '/nachhaltigkeit/135569/hintergrund-und-material',
          },
        },
      },
      {
        id: 278671,
        event: {
          date: '2022-10-02T14:49:30+02:00',
          id: 485281,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257031,
          revision: {
            id: 257031,
          },
          repository: {
            __typename: 'CoursePage',
            id: 141361,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/141361/%C3%BCbersicht',
          },
          reason: '',
        },
      },
      {
        id: 278669,
        event: {
          date: '2022-10-02T14:49:30+02:00',
          id: 485280,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257031,
          entityRevision: {
            id: 257031,
          },
          entity: {
            __typename: 'CoursePage',
            id: 141361,
            title: 'Übersicht',
            alias: '/nachhaltigkeit/141361/%C3%BCbersicht',
          },
        },
      },
      {
        id: 278662,
        event: {
          date: '2022-10-02T14:37:50+02:00',
          id: 485277,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257029,
          revision: {
            id: 257029,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136991,
            title: 'Tag 7: Zeit für eine Belohnung',
            alias: '/nachhaltigkeit/136991/tag-7-zeit-f%C3%BCr-eine-belohnung',
          },
          reason: '',
        },
      },
      {
        id: 278659,
        event: {
          date: '2022-10-02T14:37:50+02:00',
          id: 485276,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257029,
          entityRevision: {
            id: 257029,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136991,
            title: 'Tag 7: Zeit für eine Belohnung',
            alias: '/nachhaltigkeit/136991/tag-7-zeit-f%C3%BCr-eine-belohnung',
          },
        },
      },
      {
        id: 278658,
        event: {
          date: '2022-10-02T14:37:49+02:00',
          id: 485275,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257028,
          revision: {
            id: 257028,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136989,
            title: 'Tag 6: Spieleabend',
            alias: '/nachhaltigkeit/136989/tag-6-spieleabend',
          },
          reason: '',
        },
      },
      {
        id: 278654,
        event: {
          date: '2022-10-02T14:37:49+02:00',
          id: 485274,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257028,
          entityRevision: {
            id: 257028,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136989,
            title: 'Tag 6: Spieleabend',
            alias: '/nachhaltigkeit/136989/tag-6-spieleabend',
          },
        },
      },
      {
        id: 278651,
        event: {
          date: '2022-10-02T14:37:48+02:00',
          id: 485273,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257027,
          revision: {
            id: 257027,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136984,
            title: 'Tag 5: Unverpackt ',
            alias: '/nachhaltigkeit/136984/tag-5-unverpackt',
          },
          reason: '',
        },
      },
      {
        id: 278649,
        event: {
          date: '2022-10-02T14:37:48+02:00',
          id: 485272,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257027,
          entityRevision: {
            id: 257027,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136984,
            title: 'Tag 5: Unverpackt ',
            alias: '/nachhaltigkeit/136984/tag-5-unverpackt',
          },
        },
      },
      {
        id: 278645,
        event: {
          date: '2022-10-02T14:37:47+02:00',
          id: 485271,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257026,
          revision: {
            id: 257026,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136982,
            title: 'Tag 4: Küche',
            alias: '/nachhaltigkeit/136982/tag-4-k%C3%BCche',
          },
          reason: '',
        },
      },
      {
        id: 278642,
        event: {
          date: '2022-10-02T14:37:47+02:00',
          id: 485270,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257026,
          entityRevision: {
            id: 257026,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136982,
            title: 'Tag 4: Küche',
            alias: '/nachhaltigkeit/136982/tag-4-k%C3%BCche',
          },
        },
      },
      {
        id: 278639,
        event: {
          date: '2022-10-02T14:37:47+02:00',
          id: 485269,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257025,
          revision: {
            id: 257025,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136974,
            title: 'Tag 3: Kleiderschrank',
            alias: '/nachhaltigkeit/136974/tag-3-kleiderschrank',
          },
          reason: '',
        },
      },
      {
        id: 278636,
        event: {
          date: '2022-10-02T14:37:46+02:00',
          id: 485268,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257025,
          entityRevision: {
            id: 257025,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136974,
            title: 'Tag 3: Kleiderschrank',
            alias: '/nachhaltigkeit/136974/tag-3-kleiderschrank',
          },
        },
      },
      {
        id: 278632,
        event: {
          date: '2022-10-02T14:37:46+02:00',
          id: 485267,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257024,
          revision: {
            id: 257024,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136885,
            title: 'Tag 2: Werbung',
            alias: '/nachhaltigkeit/136885/tag-2-werbung',
          },
          reason: '',
        },
      },
      {
        id: 278631,
        event: {
          date: '2022-10-02T14:37:46+02:00',
          id: 485266,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257024,
          entityRevision: {
            id: 257024,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136885,
            title: 'Tag 2: Werbung',
            alias: '/nachhaltigkeit/136885/tag-2-werbung',
          },
        },
      },
      {
        id: 278626,
        event: {
          date: '2022-10-02T14:37:44+02:00',
          id: 485265,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257023,
          revision: {
            id: 257023,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136882,
            title: 'Tag 1: Badezimmer',
            alias: '/nachhaltigkeit/136882/tag-1-badezimmer',
          },
          reason: '',
        },
      },
      {
        id: 278625,
        event: {
          date: '2022-10-02T14:37:44+02:00',
          id: 485264,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257023,
          entityRevision: {
            id: 257023,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136882,
            title: 'Tag 1: Badezimmer',
            alias: '/nachhaltigkeit/136882/tag-1-badezimmer',
          },
        },
      },
      {
        id: 278622,
        event: {
          date: '2022-10-02T14:37:43+02:00',
          id: 485263,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257022,
          revision: {
            id: 257022,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136870,
            title: 'Drei Grundsätze ',
            alias: '/nachhaltigkeit/136870/drei-grunds%C3%A4tze',
          },
          reason: '',
        },
      },
      {
        id: 278618,
        event: {
          date: '2022-10-02T14:37:43+02:00',
          id: 485262,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257022,
          entityRevision: {
            id: 257022,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136870,
            title: 'Drei Grundsätze ',
            alias: '/nachhaltigkeit/136870/drei-grunds%C3%A4tze',
          },
        },
      },
      {
        id: 278614,
        event: {
          date: '2022-10-02T14:37:42+02:00',
          id: 485261,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257021,
          revision: {
            id: 257021,
          },
          repository: {
            __typename: 'CoursePage',
            id: 136878,
            title: 'Minimalismus - was ist das?',
            alias: '/nachhaltigkeit/136878/minimalismus-was-ist-das',
          },
          reason: '',
        },
      },
      {
        id: 278611,
        event: {
          date: '2022-10-02T14:37:42+02:00',
          id: 485260,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 257021,
          entityRevision: {
            id: 257021,
          },
          entity: {
            __typename: 'CoursePage',
            id: 136878,
            title: 'Minimalismus - was ist das?',
            alias: '/nachhaltigkeit/136878/minimalismus-was-ist-das',
          },
        },
      },
      {
        id: 278540,
        event: {
          date: '2022-10-02T11:27:11+02:00',
          id: 485075,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256926,
          revision: {
            id: 256926,
          },
          repository: {
            __typename: 'CoursePage',
            id: 167929,
            title: 'Herleitung der Formeln',
            alias: '/f%C3%A4cher-im-aufbau/167929/herleitung-der-formeln',
          },
          reason: '',
        },
      },
      {
        id: 278539,
        event: {
          date: '2022-10-02T11:27:11+02:00',
          id: 485074,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256926,
          entityRevision: {
            id: 256926,
          },
          entity: {
            __typename: 'CoursePage',
            id: 167929,
            title: 'Herleitung der Formeln',
            alias: '/f%C3%A4cher-im-aufbau/167929/herleitung-der-formeln',
          },
        },
      },
      {
        id: 278537,
        event: {
          date: '2022-10-02T11:27:09+02:00',
          id: 485073,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256925,
          revision: {
            id: 256925,
          },
          repository: {
            __typename: 'CoursePage',
            id: 167928,
            title: 'Linsengleichung',
            alias: '/f%C3%A4cher-im-aufbau/167928/linsengleichung',
          },
          reason: '',
        },
      },
      {
        id: 278534,
        event: {
          date: '2022-10-02T11:27:09+02:00',
          id: 485072,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256925,
          entityRevision: {
            id: 256925,
          },
          entity: {
            __typename: 'CoursePage',
            id: 167928,
            title: 'Linsengleichung',
            alias: '/f%C3%A4cher-im-aufbau/167928/linsengleichung',
          },
        },
      },
      {
        id: 278532,
        event: {
          date: '2022-10-02T11:27:08+02:00',
          id: 485071,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256924,
          revision: {
            id: 256924,
          },
          repository: {
            __typename: 'CoursePage',
            id: 167875,
            title: 'Bildentstehung',
            alias: '/f%C3%A4cher-im-aufbau/167875/bildentstehung',
          },
          reason: '',
        },
      },
      {
        id: 278530,
        event: {
          date: '2022-10-02T11:27:08+02:00',
          id: 485070,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256924,
          entityRevision: {
            id: 256924,
          },
          entity: {
            __typename: 'CoursePage',
            id: 167875,
            title: 'Bildentstehung',
            alias: '/f%C3%A4cher-im-aufbau/167875/bildentstehung',
          },
        },
      },
      {
        id: 278523,
        event: {
          date: '2022-10-02T11:17:44+02:00',
          id: 485065,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256921,
          revision: {
            id: 256921,
          },
          repository: {
            __typename: 'CoursePage',
            id: 169727,
            title: 'Äquivalenz und Äquivalenzpfeil',
            alias: '/mathe/169727/%C3%A4quivalenz-und-%C3%A4quivalenzpfeil',
          },
          reason: '',
        },
      },
      {
        id: 278520,
        event: {
          date: '2022-10-02T11:17:43+02:00',
          id: 485064,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256921,
          entityRevision: {
            id: 256921,
          },
          entity: {
            __typename: 'CoursePage',
            id: 169727,
            title: 'Äquivalenz und Äquivalenzpfeil',
            alias: '/mathe/169727/%C3%A4quivalenz-und-%C3%A4quivalenzpfeil',
          },
        },
      },
      {
        id: 278064,
        event: {
          date: '2022-10-01T15:48:24+02:00',
          id: 484693,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256734,
          revision: {
            id: 256734,
          },
          repository: {
            __typename: 'CoursePage',
            id: 221142,
            title: 'Die reinquadratische Gleichung ',
            alias: '/mathe/221142/die-reinquadratische-gleichung',
          },
          reason: '',
        },
      },
      {
        id: 278062,
        event: {
          date: '2022-10-01T15:48:23+02:00',
          id: 484692,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256734,
          entityRevision: {
            id: 256734,
          },
          entity: {
            __typename: 'CoursePage',
            id: 221142,
            title: 'Die reinquadratische Gleichung ',
            alias: '/mathe/221142/die-reinquadratische-gleichung',
          },
        },
      },
      {
        id: 277978,
        event: {
          date: '2022-10-01T00:48:13+02:00',
          id: 484645,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256702,
          revision: {
            id: 256702,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 277977,
        event: {
          date: '2022-10-01T00:48:13+02:00',
          id: 484644,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 196775,
            username: 'Corinna',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256702,
          entityRevision: {
            id: 256702,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 277972,
        event: {
          date: '2022-09-30T19:03:54+02:00',
          id: 484636,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 253695,
            username: 'Hager',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256695,
          entityRevision: {
            id: 256695,
          },
          entity: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
        },
      },
      {
        id: 277959,
        event: {
          date: '2022-09-30T17:24:45+02:00',
          id: 484622,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 253695,
            username: 'Hager',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256686,
          entityRevision: {
            id: 256686,
          },
          entity: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
        },
      },
      {
        id: 277957,
        event: {
          date: '2022-09-30T11:22:57+02:00',
          id: 484609,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256678,
          revision: {
            id: 256678,
          },
          repository: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
          reason: '',
        },
      },
      {
        id: 277956,
        event: {
          date: '2022-09-30T11:22:56+02:00',
          id: 484608,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256678,
          entityRevision: {
            id: 256678,
          },
          entity: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
        },
      },
      {
        id: 277953,
        event: {
          date: '2022-09-30T11:17:58+02:00',
          id: 484607,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256677,
          revision: {
            id: 256677,
          },
          repository: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
          reason: '',
        },
      },
      {
        id: 277952,
        event: {
          date: '2022-09-30T11:17:57+02:00',
          id: 484606,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256677,
          entityRevision: {
            id: 256677,
          },
          entity: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
        },
      },
      {
        id: 277949,
        event: {
          date: '2022-09-29T14:38:32+02:00',
          id: 484526,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256625,
          revision: {
            id: 256625,
          },
          repository: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
          reason: '',
        },
      },
      {
        id: 277948,
        event: {
          date: '2022-09-29T14:38:32+02:00',
          id: 484525,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256625,
          entityRevision: {
            id: 256625,
          },
          entity: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
        },
      },
      {
        id: 277946,
        event: {
          date: '2022-09-29T11:03:04+02:00',
          id: 484524,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256623,
          revision: {
            id: 256623,
          },
          repository: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
          reason: '',
        },
      },
      {
        id: 277944,
        event: {
          date: '2022-09-29T11:03:04+02:00',
          id: 484523,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256623,
          entityRevision: {
            id: 256623,
          },
          entity: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
        },
      },
      {
        id: 277942,
        event: {
          date: '2022-09-29T10:13:14+02:00',
          id: 484522,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256620,
          revision: {
            id: 256620,
          },
          repository: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
          reason: '',
        },
      },
      {
        id: 277939,
        event: {
          date: '2022-09-29T10:13:14+02:00',
          id: 484521,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256620,
          entityRevision: {
            id: 256620,
          },
          entity: {
            __typename: 'Article',
            id: 244476,
            title: 'Hessesche Normalenform',
            alias: '/mathe/244476/hessesche-normalenform',
          },
        },
      },
      {
        id: 277824,
        event: {
          date: '2022-09-28T11:02:18+02:00',
          id: 484076,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256233,
          revision: {
            id: 256233,
          },
          repository: {
            __typename: 'Article',
            id: 1615,
            title:
              'Berechnung der Asymptote bei gebrochen-rationalen Funktionen',
            alias:
              '/mathe/1615/berechnung-der-asymptote-bei-gebrochen-rationalen-funktionen',
          },
          reason: '',
        },
      },
      {
        id: 277817,
        event: {
          date: '2022-09-28T10:59:54+02:00',
          id: 484075,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256234,
          revision: {
            id: 256234,
          },
          repository: {
            __typename: 'Article',
            id: 1743,
            title: 'Satz des Thales',
            alias: '/mathe/1743/satz-des-thales',
          },
          reason: '',
        },
      },
      {
        id: 277752,
        event: {
          date: '2022-09-27T17:55:35+02:00',
          id: 484047,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256357,
          revision: {
            id: 256357,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 277750,
        event: {
          date: '2022-09-27T17:55:35+02:00',
          id: 484046,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256357,
          entityRevision: {
            id: 256357,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 277716,
        event: {
          date: '2022-09-27T16:44:37+02:00',
          id: 484027,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256348,
          revision: {
            id: 256348,
          },
          repository: {
            __typename: 'CoursePage',
            id: 223934,
            title: 'Aussagen und Wahrheitwert (in Arbeit)',
            alias: '/mathe/223934/aussagen-und-wahrheitwert-in-arbeit',
          },
          reason: '',
        },
      },
      {
        id: 277714,
        event: {
          date: '2022-09-27T16:44:37+02:00',
          id: 484026,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256348,
          entityRevision: {
            id: 256348,
          },
          entity: {
            __typename: 'CoursePage',
            id: 223934,
            title: 'Aussagen und Wahrheitwert (in Arbeit)',
            alias: '/mathe/223934/aussagen-und-wahrheitwert-in-arbeit',
          },
        },
      },
      {
        id: 277477,
        event: {
          date: '2022-09-27T11:33:40+02:00',
          id: 483827,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256234,
          entityRevision: {
            id: 256234,
          },
          entity: {
            __typename: 'Article',
            id: 1743,
            title: 'Satz des Thales',
            alias: '/mathe/1743/satz-des-thales',
          },
        },
      },
      {
        id: 277473,
        event: {
          date: '2022-09-27T11:29:51+02:00',
          id: 483826,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 32543,
            username: 'botho',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256233,
          entityRevision: {
            id: 256233,
          },
          entity: {
            __typename: 'Article',
            id: 1615,
            title:
              'Berechnung der Asymptote bei gebrochen-rationalen Funktionen',
            alias:
              '/mathe/1615/berechnung-der-asymptote-bei-gebrochen-rationalen-funktionen',
          },
        },
      },
      {
        id: 277453,
        event: {
          date: '2022-09-26T23:08:35+02:00',
          id: 483819,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 266,
            username: 'Renate',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: false,
          },
          objectId: 256223,
          revision: {
            id: 256223,
          },
          repository: {
            __typename: 'Article',
            id: 2105,
            title: 'Median',
            alias: '/mathe/2105/median',
          },
          reason: '',
        },
      },
      {
        id: 277447,
        event: {
          date: '2022-09-26T23:08:35+02:00',
          id: 483818,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 266,
            username: 'Renate',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: false,
          },
          objectId: 256223,
          entityRevision: {
            id: 256223,
          },
          entity: {
            __typename: 'Article',
            id: 2105,
            title: 'Median',
            alias: '/mathe/2105/median',
          },
        },
      },
      {
        id: 277443,
        event: {
          date: '2022-09-26T21:44:25+02:00',
          id: 483816,
          __typename: 'CreateCommentNotificationEvent',
          actor: {
            id: 169563,
            username: 'Peter',
            isActiveAuthor: true,
            isActiveDonor: true,
            isActiveReviewer: true,
          },
          objectId: 256222,
          comment: {
            id: 256222,
          },
          thread: {
            id: 'dDI1NjE4OA==',
            title: '',
            thread: {
              nodes: [
                {
                  id: 256188,
                },
              ],
            },
            comment: {
              nodes: [
                {
                  id: 256222,
                  content:
                    'Das sollten wir tun. Insbesondere kommt "Zufall"  nicht vor. ',
                },
              ],
            },
          },
        },
      },
      {
        id: 277410,
        event: {
          date: '2022-09-26T12:34:52+02:00',
          id: 483778,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256014,
          revision: {
            id: 256014,
          },
          repository: {
            __typename: 'Article',
            id: 1565,
            title: 'Sinus, Kosinus und Tangens',
            alias: '/mathe/1565/sinus-kosinus-und-tangens',
          },
          reason: '',
        },
      },
      {
        id: 277197,
        event: {
          date: '2022-09-25T14:47:40+02:00',
          id: 483494,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256039,
          revision: {
            id: 256039,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 218212,
            title: 'Teil A I',
            alias: '/mathe/218212/218212',
          },
          reason: '',
        },
      },
      {
        id: 277195,
        event: {
          date: '2022-09-25T14:47:40+02:00',
          id: 483493,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256039,
          entityRevision: {
            id: 256039,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 218212,
            title: 'Teil A I',
            alias: '/mathe/218212/218212',
          },
        },
      },
      {
        id: 277193,
        event: {
          date: '2022-09-25T14:46:07+02:00',
          id: 483492,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256038,
          revision: {
            id: 256038,
          },
          repository: {
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
            id: 218204,
            title: 'Teil A I',
            alias: '/mathe/218204/218204',
          },
          reason: '',
        },
      },
      {
        id: 277192,
        event: {
          date: '2022-09-25T14:46:07+02:00',
          id: 483491,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256038,
          entityRevision: {
            id: 256038,
          },
          entity: {
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
            id: 218204,
            title: 'Teil A I',
            alias: '/mathe/218204/218204',
          },
        },
      },
      {
        id: 277189,
        event: {
          date: '2022-09-25T14:46:06+02:00',
          id: 483490,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256037,
          revision: {
            id: 256037,
          },
          repository: {
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
            id: 218201,
            title: 'Teil A I',
            alias: '/mathe/218201/218201',
          },
          reason: '',
        },
      },
      {
        id: 277187,
        event: {
          date: '2022-09-25T14:46:06+02:00',
          id: 483489,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256037,
          entityRevision: {
            id: 256037,
          },
          entity: {
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
            id: 218201,
            title: 'Teil A I',
            alias: '/mathe/218201/218201',
          },
        },
      },
      {
        id: 277186,
        event: {
          date: '2022-09-25T14:46:04+02:00',
          id: 483488,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256036,
          revision: {
            id: 256036,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 218188,
            title: 'Teil A I',
            alias: '/mathe/218188/218188',
          },
          reason: '',
        },
      },
      {
        id: 277183,
        event: {
          date: '2022-09-25T14:46:04+02:00',
          id: 483487,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 256036,
          entityRevision: {
            id: 256036,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 218188,
            title: 'Teil A I',
            alias: '/mathe/218188/218188',
          },
        },
      },
      {
        id: 277131,
        event: {
          date: '2022-09-25T10:30:19+02:00',
          id: 483455,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 146667,
            username: 'BerndF',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 256014,
          entityRevision: {
            id: 256014,
          },
          entity: {
            __typename: 'Article',
            id: 1565,
            title: 'Sinus, Kosinus und Tangens',
            alias: '/mathe/1565/sinus-kosinus-und-tangens',
          },
        },
      },
      {
        id: 276943,
        event: {
          date: '2022-09-23T18:55:37+02:00',
          id: 483259,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255899,
          revision: {
            id: 255899,
          },
          repository: {
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
            id: 217449,
            title: 'Gruppe A',
            alias: '/mathe/217449/217449',
          },
          reason: '',
        },
      },
      {
        id: 276940,
        event: {
          date: '2022-09-23T18:55:37+02:00',
          id: 483258,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255899,
          entityRevision: {
            id: 255899,
          },
          entity: {
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
            id: 217449,
            title: 'Gruppe A',
            alias: '/mathe/217449/217449',
          },
        },
      },
      {
        id: 276688,
        event: {
          date: '2022-09-23T17:26:53+02:00',
          id: 483057,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255798,
          revision: {
            id: 255798,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 276687,
        event: {
          date: '2022-09-23T17:26:53+02:00',
          id: 483056,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255798,
          entityRevision: {
            id: 255798,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 276684,
        event: {
          date: '2022-09-23T17:25:58+02:00',
          id: 483055,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255797,
          revision: {
            id: 255797,
          },
          repository: {
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
            id: 216683,
            title: 'Teil B, Gruppe 2',
            alias: '/mathe/216683/216683',
          },
          reason: '',
        },
      },
      {
        id: 276683,
        event: {
          date: '2022-09-23T17:25:57+02:00',
          id: 483054,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255797,
          entityRevision: {
            id: 255797,
          },
          entity: {
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
            id: 216683,
            title: 'Teil B, Gruppe 2',
            alias: '/mathe/216683/216683',
          },
        },
      },
      {
        id: 276679,
        event: {
          date: '2022-09-23T17:25:56+02:00',
          id: 483051,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255795,
          revision: {
            id: 255795,
          },
          repository: {
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
            id: 216681,
            title: 'Teil B, Gruppe 2',
            alias: '/mathe/216681/216681',
          },
          reason: '',
        },
      },
      {
        id: 276677,
        event: {
          date: '2022-09-23T17:25:55+02:00',
          id: 483050,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255795,
          entityRevision: {
            id: 255795,
          },
          entity: {
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
            id: 216681,
            title: 'Teil B, Gruppe 2',
            alias: '/mathe/216681/216681',
          },
        },
      },
      {
        id: 276667,
        event: {
          date: '2022-09-23T16:57:46+02:00',
          id: 483041,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255790,
          revision: {
            id: 255790,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 216635,
            title: 'Teil B, Gruppe 2',
            alias: '/mathe/216635/216635',
          },
          reason: '',
        },
      },
      {
        id: 276665,
        event: {
          date: '2022-09-23T16:57:45+02:00',
          id: 483040,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255790,
          entityRevision: {
            id: 255790,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 216635,
            title: 'Teil B, Gruppe 2',
            alias: '/mathe/216635/216635',
          },
        },
      },
      {
        id: 276529,
        event: {
          date: '2022-09-23T16:14:46+02:00',
          id: 482943,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255741,
          revision: {
            id: 255741,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214296,
            title: 'Sachaufgaben zu den Grundrechenarten',
            alias: '/mathe/214296/214296',
          },
          reason: '',
        },
      },
      {
        id: 276528,
        event: {
          date: '2022-09-23T16:14:46+02:00',
          id: 482942,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255741,
          entityRevision: {
            id: 255741,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214296,
            title: 'Sachaufgaben zu den Grundrechenarten',
            alias: '/mathe/214296/214296',
          },
        },
      },
      {
        id: 276525,
        event: {
          date: '2022-09-23T16:14:43+02:00',
          id: 482941,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255740,
          revision: {
            id: 255740,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214294,
            title: 'Sachaufgaben zu den Grundrechenarten',
            alias: '/mathe/214294/214294',
          },
          reason: '',
        },
      },
      {
        id: 276524,
        event: {
          date: '2022-09-23T16:14:43+02:00',
          id: 482940,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255740,
          entityRevision: {
            id: 255740,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
              exerciseGroup: {
                taxonomyTerms: {
                  nodes: [
                    {
                      type: 'exerciseFolder',
                    },
                    {
                      type: 'exerciseFolder',
                    },
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214294,
            title: 'Sachaufgaben zu den Grundrechenarten',
            alias: '/mathe/214294/214294',
          },
        },
      },
      {
        id: 276506,
        event: {
          date: '2022-09-23T15:29:39+02:00',
          id: 482927,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255732,
          revision: {
            id: 255732,
          },
          repository: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
          reason: '',
        },
      },
      {
        id: 276504,
        event: {
          date: '2022-09-23T15:29:38+02:00',
          id: 482926,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 92258,
            username: 'anne22',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255732,
          entityRevision: {
            id: 255732,
          },
          entity: {
            __typename: 'Article',
            id: 253843,
            title: 'Mitmachen (Landingpage)',
            alias: '/community/253843/mitmachen-landingpage',
          },
        },
      },
      {
        id: 276503,
        event: {
          date: '2022-09-23T15:29:31+02:00',
          id: 482925,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 255731,
          revision: {
            id: 255731,
          },
          repository: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
          reason: '',
        },
      },
      {
        id: 276501,
        event: {
          date: '2022-09-23T15:29:31+02:00',
          id: 482924,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 64900,
            username: 'Kowalsky',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: false,
          },
          objectId: 255731,
          entityRevision: {
            id: 255731,
          },
          entity: {
            __typename: 'Article',
            id: 247604,
            title: 'Logistisches Wachstum',
            alias: '/community/247604/logistisches-wachstum',
          },
        },
      },
      {
        id: 276496,
        event: {
          date: '2022-09-23T14:33:31+02:00',
          id: 482911,
          __typename: 'RejectRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255714,
          repository: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
          revision: {
            id: 255714,
            alias: '/entity/repository/compare/255220/255714',
          },
          reason: 'Kein Inhalt',
        },
      },
      {
        id: 276489,
        event: {
          date: '2022-09-23T14:16:49+02:00',
          id: 482905,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255721,
          entityRevision: {
            id: 255721,
          },
          entity: {
            __typename: 'Article',
            id: 224234,
            title: 'Rechnen mit Uhrzeiten und Kalendertagen',
            alias: '/mathe/224234/rechnen-mit-uhrzeiten-und-kalendertagen',
          },
        },
      },
      {
        id: 276480,
        event: {
          date: '2022-09-23T13:45:21+02:00',
          id: 482898,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 87602,
            username: 'Karin',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255718,
          entityRevision: {
            id: 255718,
          },
          entity: {
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
            id: 255220,
            title: 'Aufgaben zur Spieltheorie',
            alias: '/mathe/255220/255220',
          },
        },
      },
      {
        id: 276419,
        event: {
          date: '2022-09-22T17:29:35+02:00',
          id: 482867,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255691,
          revision: {
            id: 255691,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214171,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214171/214171',
          },
          reason: '',
        },
      },
      {
        id: 276418,
        event: {
          date: '2022-09-22T17:29:34+02:00',
          id: 482866,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255691,
          entityRevision: {
            id: 255691,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214171,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214171/214171',
          },
        },
      },
      {
        id: 276415,
        event: {
          date: '2022-09-22T17:29:34+02:00',
          id: 482865,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255690,
          revision: {
            id: 255690,
          },
          repository: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214169,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214169/214169',
          },
          reason: '',
        },
      },
      {
        id: 276414,
        event: {
          date: '2022-09-22T17:29:33+02:00',
          id: 482864,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255690,
          entityRevision: {
            id: 255690,
          },
          entity: {
            exercise: {
              __typename: 'GroupedExercise',
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
                  ],
                },
              },
            },
            __typename: 'Solution',
            id: 214169,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214169/214169',
          },
        },
      },
      {
        id: 276412,
        event: {
          date: '2022-09-22T17:29:33+02:00',
          id: 482863,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255689,
          revision: {
            id: 255689,
          },
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
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 214168,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214168/214168',
          },
          reason: '',
        },
      },
      {
        id: 276410,
        event: {
          date: '2022-09-22T17:29:32+02:00',
          id: 482862,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255689,
          entityRevision: {
            id: 255689,
          },
          entity: {
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
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 214168,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214168/214168',
          },
        },
      },
      {
        id: 276408,
        event: {
          date: '2022-09-22T17:29:31+02:00',
          id: 482861,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255688,
          revision: {
            id: 255688,
          },
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
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 214166,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214166/214166',
          },
          reason: '',
        },
      },
      {
        id: 276406,
        event: {
          date: '2022-09-22T17:29:30+02:00',
          id: 482860,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255688,
          entityRevision: {
            id: 255688,
          },
          entity: {
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
                ],
              },
            },
            __typename: 'GroupedExercise',
            id: 214166,
            title: 'Aufgaben zu linearen Funktionen und Geradengleichungen',
            alias: '/mathe/214166/214166',
          },
        },
      },
      {
        id: 276299,
        event: {
          date: '2022-09-22T16:54:55+02:00',
          id: 482773,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255643,
          revision: {
            id: 255643,
          },
          repository: {
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
            id: 213692,
            title: 'Stochastik II',
            alias: '/mathe/213692/213692',
          },
          reason: '',
        },
      },
      {
        id: 276296,
        event: {
          date: '2022-09-22T16:54:55+02:00',
          id: 482772,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255643,
          entityRevision: {
            id: 255643,
          },
          entity: {
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
            id: 213692,
            title: 'Stochastik II',
            alias: '/mathe/213692/213692',
          },
        },
      },
      {
        id: 276291,
        event: {
          date: '2022-09-22T16:54:54+02:00',
          id: 482769,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255641,
          revision: {
            id: 255641,
          },
          repository: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 213685,
            title: 'Stochastik II',
            alias: '/mathe/213685/213685',
          },
          reason: '',
        },
      },
      {
        id: 276286,
        event: {
          date: '2022-09-22T16:54:54+02:00',
          id: 482768,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255641,
          entityRevision: {
            id: 255641,
          },
          entity: {
            taxonomyTerms: {
              nodes: [
                {
                  type: 'exerciseFolder',
                },
              ],
            },
            __typename: 'ExerciseGroup',
            id: 213685,
            title: 'Stochastik II',
            alias: '/mathe/213685/213685',
          },
        },
      },
      {
        id: 276284,
        event: {
          date: '2022-09-22T16:52:46+02:00',
          id: 482767,
          __typename: 'CheckoutRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255640,
          revision: {
            id: 255640,
          },
          repository: {
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
            id: 213679,
            title: 'Stochastik I',
            alias: '/mathe/213679/213679',
          },
          reason: '',
        },
      },
      {
        id: 276280,
        event: {
          date: '2022-09-22T16:52:46+02:00',
          id: 482766,
          __typename: 'CreateEntityRevisionNotificationEvent',
          actor: {
            id: 240298,
            username: 'Felix_Eccardt',
            isActiveAuthor: true,
            isActiveDonor: false,
            isActiveReviewer: true,
          },
          objectId: 255640,
          entityRevision: {
            id: 255640,
          },
          entity: {
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
            id: 213679,
            title: 'Stochastik I',
            alias: '/mathe/213679/213679',
          },
        },
      },
    ],
  } as GetNotificationsQuery['notifications'],
}
