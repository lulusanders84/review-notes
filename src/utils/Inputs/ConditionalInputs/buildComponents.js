import { withInputLogicTest } from '../../../HOCs'

export const buildComponent = (component, props) => {
  return withInputLogicTest(component, props)
}