import { LanguageStrings } from '../type-language-strings'

export const strings: LanguageStrings = {
  entities: {
    applet: 'applet',
    article: 'article',
    course: 'Cours',
    coursePage: 'Page du cours',
    event: 'Événement',
    exercise: 'Exercice',
    exerciseGroup: "Groupe d'exercices",
    topic: 'Dossier',
    groupedExercise: 'Exercice groupé',
    page: 'page',
    solution: 'solution',
    taxonomyTerm: 'Terme de taxonomie',
    user: 'Utilisateur·Utilisatrice',
    video: 'Vidéo',
    exerciseFolder: "Dossier d'exercices",
    comment: 'Commentaire',
    revision: 'Révision',
    thread: 'Thread',
    threads: 'Threads',
    subject: 'Sujet',
    userProfile: "Profil d'utilisateur·utilisatrice",
    privacyPolicy: 'Politique de confidentialité',
    content: 'Contenu',
  },
  events: {
    entityInParentPreposition: 'in',
    commentInParentPreposition: 'on',
    setThreadStateArchived: '%actor% a archivé %thread%.',
    setThreadStateUnarchived: '%actor% a restauré %thread%.',
    createComment: '%actor% a commenté dans %thread%: %comment%.',
    createThread: '%actor% a commencé %thread% dans %object%.',
    createEntity: '%actor% a créé %object%.',
    setLicense: '%actor% a modifié la licence de %repository%.',
    createEntityLink: '%actor% a associé %child% à %parent%.',
    removeEntityLink: '%actor% a dissocié %child% de %parent%.',
    createEntityRevision: '%actor% created %revision% of %entity%.',
    checkoutRevision: '%actor% checked out %revision% in %repository%.',
    rejectRevision: '%actor% did not accept %revision% in %repository%.',
    createTaxonomyLink: '%actor% a ajouté %child% à %parent%.',
    removeTaxonomyLink: '%actor% a retiré %child% de %parent%.',
    createTaxonomyTerm: '%actor% a créé %term%.',
    setTaxonomyTerm: '%actor% a mis à jour %term%.',
    setTaxonomyParentDeleted: '%actor% a supprimé le parent de %child%.',
    setTaxonomyParentChangedFrom:
      '%actor% a changé le parent de %child% de %previousparent% à %parent%.',
    setTaxonomyParentChanged:
      '%actor% a changé le parent de %child% à %parent%.',
    setUuidStateTrashed: '%actor% a mis %object% dans la corbeille.',
    setUuidStateRestored: '%actor% a restauré %object%.',
    inviteToChat:
      '%actor% invited you to the Chat: %comment% Go to %chatLink% to chat with %actor% and others.',
    entityPlaceholderFallback: 'Contenu',
  },
  email: {
    //TODO: translate
    subject: 'Your unread notifications on Serlo',
    greeting: 'Bonjour %user%!',
    initiation:
      "Voici un apercu de ce qui s'est passé avec le contenu que tu as édité ou créé :",
    settings:
      'Vous pouvez %link% pour déterminer le contenu duquel vous voulez recevoir des notifications.',
    linkText: 'changez les paramètres',
  },
}
