import React, {useState, useEffect} from 'react'
import {Grommet, Box, Grid, Heading, Layer, ResponsiveContext, Image, Stack, Carousel, Button} from 'grommet'
import {FormClose, StatusGoodSmall} from 'grommet-icons'
import {savedData} from './data/data.js'
import {GroupCard} from './components/GroupCard/GroupCard'
import {AppBar} from './components/AppBar/AppBar'
import {Loading} from './components/Loading/Loading'
import Axios from 'axios'

const theme = {
  global: {
    colors: {
      brand: '#b2001a'
    },
    font: {
      family: 'Roboto',
      size: '11px',
      height: '20px',
    },
  },
  button: {
    size: 'small'
  },
  carousel: {
    icons: {
      current: StatusGoodSmall
    }
  }
}

const dataURL = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'

function App({testing = false}) {
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])
  const [selectedGroup, setSelectedGroup] = useState()

  useEffect(() => {
    (async() => {
      try {
        const d = !testing ? await Axios.get(dataURL) : {data: savedData}
        setData(d.data)
      } catch(e) {
        console.log('DATA RETRIEVAL ERROR:', e)
        setData(savedData)
      }
      
    })()
  }, [data, testing])

  function handleClick(e) {
    const g = data.groups.find(i => i.id === e)
    setSelectedGroup(g)
    setShow(true)
  }

  if(!data || !data.groups) {
    return <Loading />
  }

  return (
    <Grommet theme={theme}full>
     <ResponsiveContext.Consumer>
     {size => (
        <Box fill>
          { show && (
            <Layer
              full={false}
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
            >
              <Box height="medium" width="large" overflow="hidden">
                <Stack anchor="top-right">
                  <Carousel
                    fill={true}>
                    {selectedGroup.images.map((image, index) => {
                      // because the assigned data did not include alt text for images, I wanted to have something here.
                      const itemDescAry = image.href.split('/') 
                      const altText = itemDescAry[itemDescAry.length - 1].split('.')[0].split('-').join(' ')
                      return <Image key={`${selectedGroup.id}-${index}`} fit="cover" src={image.href} alt={altText} />
                    })}
                  </Carousel>
                  <Button
                    icon={<FormClose />}
                    onClick={() => setShow(false)}
                  />
                </Stack>
              </Box>
            </Layer>
          )}
          <AppBar>
            <Heading level='3' margin='none'>
              {data.name}
            </Heading>
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='start'>
              {size !== 'small' ?(
                <Grid
                  rows={['medium', 'medium', 'medium']}
                  columns={['medium', 'medium', 'medium']}
                  gap="small"
                >
                  {data.groups.map(group => { return <GroupCard key={group.id} group={group} selected={handleClick}/>})}
                </Grid>
              ) : (
                <Grid
                  rows={['medium']}
                  columns={['medium']}
                  gap="small"
                >
                  {data.groups.map(group => { return <GroupCard key={group.id} group={group} selected={handleClick}/>})}
                </Grid>
              )}
            </Box>
          </Box>
        </Box>
      )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
