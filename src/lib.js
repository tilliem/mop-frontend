import React from 'react'

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
  text2paras,
  text2paraJsx
}
