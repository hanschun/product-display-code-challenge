import React, {useState, useEffect} from 'react'
import {Box, Header, Image, Footer, Stack} from 'grommet'
import {LoadingCard} from '../Loading/LoadingCard'

export function GroupCard({group, selected}) {
  const [price, setPrice] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    (() => {
      const p = group.priceRange ?
        `$${group.priceRange.selling.low} - ${group.priceRange.selling.high}` :
        `$${group.price.selling}`
      setPrice(p)
      setLoaded(true)
    })()
  }, [price, loaded])


  if (!loaded) {
    return <LoadingCard />
  }
  return (
    <Box
      fill
      direction='column'
      itemscope
      itemtype="http://schema.org/Offer"
    > 
    <Stack
      alignSelf="center"
      anchor="left">
      <Stack anchor="top-left">
        <Image
          fit="cover"
          src={group.hero.href}
          a11yTitle={group.name}
          onClick={() => selected(group.id)}/>
        <Header
          direction='row'
          align='center'
          justify='stretch'
          background={{color: 'dark-1', opacity: 'weak', size: 'cover'}}
          pad={{ left: 'small', right: 'small', vertical: 'small'}}
          margin={{bottom: 'xlarge'}}
          elevation='small'
          style={{ zIndex: '1' }}
          width="363px"
        >
          <div
            dangerouslySetInnerHTML={{__html: group.name.toUpperCase()}}
            itemprop="name">
          </div> 
        </Header>
      </Stack>
      <Footer
        direction="row"
        align="center"
        background="dark-2"
        pad={{left: 'xsmall', vertical: 'xsmall', right: 'xxsmall'}}
        margin={{left: 'small', top: '200px'}}
        width="100%"
        elevation='medium'
        style={{ zIndex: '1' }}
        itemprop="price"
      >
        {price}
      </Footer>
    </Stack>
     
    </Box>
  )
}