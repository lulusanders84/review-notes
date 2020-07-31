import { formatToSentence } from '../../Notes/formatToSentence';
export const benefits = (value) => {
  const { name } = value;
  return { name, value: formatToSentence(value.value) };
};
