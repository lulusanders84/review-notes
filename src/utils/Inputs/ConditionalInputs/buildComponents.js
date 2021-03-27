import { withConditionTest } from '../../../HOCs'

export const buildComponent = (component, props) => {
  return withConditionTest(component, props)
}