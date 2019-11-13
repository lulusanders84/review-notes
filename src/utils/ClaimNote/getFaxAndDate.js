import * as utils from '../'

const getFaxAndDate =() => {
  return (
    <div>
      Return Fax: 651-662-1235
      <br />Return Due Date: {utils.getTwoWeeksFromNow()}
    </div>
  )   
}