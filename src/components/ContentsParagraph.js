import React from 'react'
import styled from 'styled-components'
import { flexDirection } from '@/styles/common'
import { Typography } from '@/components'

export const ContentsParagraph = (props) => {
  const { title, paragraph, image, imageDescription } = props

  return (
    <Box>
      <DescriptionBox>
        <Typography
          size={'18px'}
          weight={600}
          spacing={-0.72}
          color={'#323232'}
        >
          {title}
        </Typography>
      </DescriptionBox>

      <DescriptionBox style={{ paddingTop: '16px' }}>
        <Typography
          size={'14px'}
          weight={400}
          spacing={-0.56}
          color={'#323232'}
        >
          {paragraph}
        </Typography>
      </DescriptionBox>

      <img style={{ paddingTop: '24px' }} src={image} alt={imageDescription} />

      <DescriptionBox
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '16px',
          paddingBottom: '48px',
        }}
      >
        <Typography
          size={'12px'}
          weight={500}
          spacing={-0.48}
          color={'#595959'}
        >
          {imageDescription}
        </Typography>
      </DescriptionBox>
    </Box>
  )
}

export default ContentsParagraph

const Box = styled.div`
  ${flexDirection}
`

const DescriptionBox = styled.div`
  ${flexDirection}
  padding: 0 32px;
`
