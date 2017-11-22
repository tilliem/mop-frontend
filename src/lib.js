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

const moNumber2base62 = (num) => {
  // This converts a number to base62, and will be used to generate petition redirect urls
  // example: 125962 => 'pju'
  const base62 = 'BCDFoHJKLMNPQRSTVWXYZAEIOU012345p789aeiGubcdfghjklzn6qrstvwxym'
  const char62s = []
  let numLeft = num
  let tooMany = 13
  while (numLeft > 0 && --tooMany) {
    char62s.push(base62[numLeft % 62])
    numLeft = parseInt(numLeft / 62, 10)
  }
  return char62s.reverse().join('')
}

export {
  formatDate,
  text2paras,
  text2paraJsx,
  moNumber2base62
}
