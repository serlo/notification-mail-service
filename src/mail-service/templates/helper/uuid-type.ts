enum UuidRevType {
  Applet = 'AppletRevision',
  Article = 'ArticleRevision',
  Course = 'CourseRevision',
  CoursePage = 'CoursePageRevision',
  Event = 'EventRevision',
  Exercise = 'ExerciseRevision',
  ExerciseGroup = 'ExerciseGroupRevision',
  GroupedExercise = 'GroupedExerciseRevision',
  Page = 'PageRevision',
  Solution = 'SolutionRevision',
  Video = 'VideoRevision',
}

export enum UuidType {
  Comment = 'Comment',
  Thread = 'Thread', // Not a UUID type but used as typename in Events
  Applet = 'Applet',
  Article = 'Article',
  Course = 'Course',
  CoursePage = 'CoursePage',
  Event = 'Event',
  Exercise = 'Exercise',
  ExerciseGroup = 'ExerciseGroup',
  GroupedExercise = 'GroupedExercise',
  Page = 'Page',
  Solution = 'Solution',
  TaxonomyTerm = 'TaxonomyTerm',
  User = 'User',
  Video = 'Video',
}

export type UuidWithRevType = UuidRevType | UuidType
