import arrayLib from './arrayLib'
import dateLib from './dateLib'
import numbersLib from './numbersLib'
import stringLib from './stringLib'
import typeJudge from './typeJudge'
import typeTransform from './typeTransform'
const _nv = {
    ...arrayLib,
    ...dateLib,
    ...numbersLib,
    ...stringLib,
    ...typeJudge,
    ...typeTransform
}
export default _nv
