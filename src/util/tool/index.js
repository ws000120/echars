let resizeTimer = null;
export const resize = (echarts, el, el_parent) => {
  $(window).resize(() => {
    if (resizeTimer)
      clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      el.height(el_parent.height())
      resizeTimer && echarts.resize()
    }, 500)

  })
}
