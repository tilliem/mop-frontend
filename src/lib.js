import React from 'react'

const formatDate = (date) => {
  const monthAbbr = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  return `${monthAbbr[monthIndex]} ${day}, ${year}`
}

const text2paras = (str) => str.split(/\n+/)

const text2paraJsx = (str) => {
  const paras = text2paras(str)
  return paras.map((paragraph, i) => {
    const paragraphKey = `p${i}`
    return (
      <p key={paragraphKey}>{paragraph}</p>
    )
  })
}

export {
  formatDate,
  text2paras,
  text2paraJsx
}
