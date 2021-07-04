/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2021-07-04 22:32:53
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2021-07-04 23:22:50
 */

import style from './index.less'

export default {
  mounted () {
    this.$nextTick(() => {
      const componentPrviewRef = document.querySelector('#componentPrviewRef')
      const rulerWrapperRef = document.querySelector('#rulerWrapperRef')
      if (componentPrviewRef && rulerWrapperRef) {
        const posInfo = componentPrviewRef.getBoundingClientRect()

        rulerWrapperRef.setAttribute('style', `height:${posInfo.height - 18}px;width:${posInfo.width - 18}px`)

        console.log(posInfo)
      }
      // eslint-disable-next-line no-undef
      new Ruler().wrap('rulerWrapperRef')
    })
  },
  render () {
    return (
      <div id="componentPrviewRef" className={style.preview}>
        <div id="rulerWrapperRef" className={style.preview__ruler}>
          1231
        </div>
      </div>
    )
  }
}
