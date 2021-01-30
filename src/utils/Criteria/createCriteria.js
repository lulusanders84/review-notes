import { buildCriteriaSections } from './buildCriteriaSections';
import { formatSections } from './formatSections';

export const createCriteria = (htmlString, onClick) => {
  const sections = buildCriteriaSections(htmlString)
  return formatSections(sections, onClick)
} 







