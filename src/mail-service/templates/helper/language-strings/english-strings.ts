export const strings = {
  entities: {
    applet: 'Applet',
    article: 'Article',
    course: 'Course',
    coursePage: 'Course Page',
    event: 'Event',
    exercise: 'Exercise',
    exerciseGroup: 'Exercise Group',
    topic: 'Folder',
    groupedExercise: 'Grouped Exercise',
    page: 'Page',
    solution: 'Solution',
    taxonomyTerm: 'Taxonomy Term',
    user: 'User',
    video: 'Video',
    exerciseFolder: 'Exercise folder',
    comment: 'Comment',
    revision: 'Revision',
    thread: 'Thread',
    threads: 'Threads',
    subject: 'Subject',
    userProfile: 'User Profile',
    privacyPolicy: 'Privacy Policy',
    content: 'Content',
  },
  events: {
    entityInParentPreposition: 'in',
    commentInParentPreposition: 'on',
    setThreadStateArchived: '%actor% archived %thread%.',
    setThreadStateUnarchived: '%actor% restored %thread%.',
    createComment: '%actor% commented in %thread%: %comment%.',
    createThread: '%actor% started %thread% on %object%.',
    createEntity: '%actor% created %object%.',
    setLicense: '%actor% changed the license of %repository%.',
    createEntityLink: '%actor% associated %child% with %parent%.',
    removeEntityLink: '%actor% dissociated %child% from %parent%.',
    createEntityRevision: '%actor% created %revision% of %entity%.',
    checkoutRevision: '%actor% checked out %revision% in %repository%.',
    rejectRevision: '%actor% did not accept %revision% in %repository%.',
    createTaxonomyLink: '%actor% added %child% to %parent%.',
    removeTaxonomyLink: '%actor% removed %child% from %parent%.',
    createTaxonomyTerm: '%actor% created %term%.',
    setTaxonomyTerm: '%actor% updated %term%.',
    setTaxonomyParentDeleted: '%actor% removed the parent of %child%.',
    setTaxonomyParentChangedFrom:
      '%actor% changed parent of %child% from %previousparent% to %parent%.',
    setTaxonomyParentChanged:
      '%actor% changed parent of %child% to %parent%.',
    setUuidStateTrashed: '%actor% trashed %object%.',
    setUuidStateRestored: '%actor% restored %object%.',
    inviteToChat:
      '%actor% invited you to the Chat: %comment% Go to %chatLink% to chat with %actor% and others.',
    entityPlaceholderFallback: 'Content',
  },
  email: {
    subject: 'Your unread notifications on Serlo',
    greeting: 'Hello %user%!',
    initiation: 'Here\'s a heads up of what has happened with content you edited or created:',
    settings: 'You can <a href=%href%>change the settings</a> for which content you want to receive notifications.',
  },
}