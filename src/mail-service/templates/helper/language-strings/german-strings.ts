import { LanguageStrings } from '../type-language-strings'

export const strings: LanguageStrings = {
  entities: {
    applet: 'Applet',
    article: 'Artikel',
    course: 'Kurs',
    coursePage: 'Kursseite',
    event: 'Veranstaltung',
    exercise: 'Aufgabe',
    exerciseGroup: 'Aufgabe mit Teilaufgaben',
    topic: 'Themenbereich',
    groupedExercise: 'Teilaufgabe',
    page: 'Seite',
    solution: 'Lösung',
    taxonomyTerm: 'Taxonomie-Begriff',
    user: 'Benutzer*in',
    video: 'Video',
    exerciseFolder: 'Aufgabensammlung',
    comment: 'Kommentar',
    revision: 'Bearbeitung',
    thread: 'Diskussion',
    threads: 'Diskussionen',
    subject: 'Fach',
    userProfile: 'Userprofil',
    privacyPolicy: 'Datenschutzerklärung',
    content: 'Inhalt',
  },
  events: {
    entityInParentPreposition: 'in',
    commentInParentPreposition: 'zu',
    setThreadStateArchived: '%actor% hat eine %thread% archiviert.',
    setThreadStateUnarchived:
      '%actor% hat eine %thread% aus dem Archiv geholt.',
    createComment: '%actor% hat einen %comment% in einer %thread% erstellt.',
    createThread: '%actor% hat eine %thread% in %object% erstellt.',
    createEntity: '%actor% hat %object% erstellt.',
    setLicense: '%actor% hat die Lizenz von %repository% geändert.',
    createEntityLink: '%actor% hat %child% zugewiesen zu %parent%.',
    removeEntityLink:
      '%actor% hat die Zuweisung von %child% zu %parent% entfernt.',
    createEntityRevision: '%actor% hat eine %revision% von %entity% erstellt.',
    checkoutRevision:
      '%actor% hat eine %revision% von %repository% übernommen.',
    rejectRevision:
      '%actor% hat eine %revision% in %repository% nicht übernommen.',
    createTaxonomyLink: '%actor% hat %child% in %parent% eingeordnet.',
    removeTaxonomyLink: '%actor% hat %child% aus %parent% entfernt.',
    createTaxonomyTerm: '%actor% hat den %term% erstellt.',
    setTaxonomyTerm: '%actor% hat den %term% geändert.',
    setTaxonomyParentDeleted:
      '%actor% hat den Elternknoten von %child% entfernt.',
    setTaxonomyParentChangedFrom:
      '%actor% hat den Elternknoten von %child% von %previousparent% auf %parent% geändert.',
    setTaxonomyParentChanged:
      '%actor% hat den Elternknoten von %child% auf %parent% geändert.',
    setUuidStateTrashed: '%actor% hat %object% in den Papierkorb verschoben.',
    setUuidStateRestored:
      '%actor% hat %object% aus dem Papierkorb wieder hergestellt.',
    inviteToChat:
      '%actor% hat dich in den Chat eingeladen: %comment% Gehe zu %chatLink% , um mit %actor% und anderen zu chatten.',
    entityPlaceholderFallback: 'Inhalt',
  },
  email: {
    subject: 'Du hast ungelesene Benachrichtigungen auf Serlo',
    greeting: 'Hallo %user%!',
    initiation:
      'Hier ist eine Übersicht, was mit Inhalten passiert ist, die du erstellt oder bearbeitet hast:',
    settings:
      'Zu welchen Inhalten du Benachrichtigungen erhältst, kannst du in deinen %link% ändern.',
    linkText: 'Einstellungen',
  },
}
