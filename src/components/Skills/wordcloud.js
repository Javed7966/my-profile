import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  //   ['Java', 'React', 'mongoDB', 'Express', 'NodeJS', 'Redux', 'HTML5', 'CSS3', 'JS', 'Flask', 'Flutter', 'Dart', 'FireBase', 'MySQl', 'C++', 'C', 'Pythons', 'Django', 'Git', 'Ubuntu' ]
  const texts = [
    'Sales & Marketing',
    'Decision Making',
    'Leadership Skills',
    'Negotiation Skills',
    'Public Speaking',
    'Self-motivated',
    'Enthusiastic',
    'Business Development Strategies',
    'Industry Knowledge',
    'Excellent Communication Skills',
    'Email Marketing',
    'Problem Solving Skills',
    'Deadline',
    'Hardworking',
    'Analytical Skills',
    'Interpersonal Skills',
    'Good Team Player',
    'Initiave',
    'Customer service',
'Meeting sales goals',
'Closing skills',
'Negotiation',
'Self-confidence',
'Product knowledge',
'Presentation skills',
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      console.log('i fire once')
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
