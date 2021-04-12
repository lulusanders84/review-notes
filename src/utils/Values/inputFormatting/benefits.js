import { formatToSentence } from '../../formatting/formatToSentence';
export const benefits = (value) => {
  const { name } = value;
  return { name, value: formatToSentence(value.value) };
};
