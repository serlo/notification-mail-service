import { LanguageStrings } from './type-language-strings'
import { UuidWithRevType } from './uuid-type'

export function getEntityStringByTypename(
  typename: UuidWithRevType | undefined,
  strings: LanguageStrings,
) {
  const typenameNoRevs = typename?.replace('Revision', '')
  const lookup = {
    Page: strings.entities.page,
    Article: strings.entities.article,
    Video: strings.entities.video,
    Applet: strings.entities.applet,
    CoursePage: strings.entities.coursePage,
    Exercise: strings.entities.exercise,
    ExerciseGroup: strings.entities.exerciseGroup,
    Event: strings.entities.event,
    Course: strings.entities.course,
    TaxonomyTerm: strings.entities.taxonomyTerm,
    Solution: strings.entities.solution,
    User: strings.entities.user,
    Comment: strings.entities.comment,
    fallback: strings.entities.content,
  }

  if (typenameNoRevs && typenameNoRevs in lookup) {
    return lookup[typenameNoRevs as keyof typeof lookup]
  }
  return lookup.fallback
}
