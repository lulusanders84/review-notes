export interface INoteContainer {
  id: string
  setNoteData?: Function
  template: Function | string[]
  title: string
  withCapWordButtons: boolean
}