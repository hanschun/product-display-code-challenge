import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingCard = props => (
  <ContentLoader
    speed={2}
    width={363}
    height={363}
    viewBox="0 0 363 363"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-7" y="0" rx="2" ry="2" width="423" height="39" /> 
    <rect x="0" y="44" rx="2" ry="2" width="400" height="400" /> 
    <rect x="282" y="29" rx="0" ry="0" width="2" height="1" />
  </ContentLoader>
)
