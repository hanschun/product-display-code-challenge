import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingBar = props => (
  <ContentLoader
    speed={2}
    width={800}
    height={32}
    viewBox="0 0 800 32"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="3" rx="2" ry="2" width="794" height="26" /> 
  </ContentLoader>
)
