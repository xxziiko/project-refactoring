import React from 'react'
import styled from 'styled-components'
import { Typography } from '@/components'
import QAIcon from '../icons/QAIcon'

export const QA = (props) => {
  const { qaData } = props
  const { datas } = qaData
  return (
    <Container>
      <Box
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <QAIcon />
        <Typography
          size={'18px'}
          weight={600}
          spacing={-0.72}
          color={'#323232'}
        >
          궁금함을 해결해줄 호기심 보따리
        </Typography>
      </Box>

      {datas.map((data, idx) => (
        <Box
          key={data.id}
          style={{
            paddingTop: '24px',
            gap: '8px',
          }}
        >
          <Typography
            size={'14px'}
            weight={600}
            spacing={-0.56}
            color={'#323232'}
          >
            {idx + 1}. {data.question}
          </Typography>
          <Typography
            size={'14px'}
            weight={400}
            spacing={-0.56}
            color={'#323232'}
          >
            {data.answer}
          </Typography>
        </Box>
      ))}
    </Container>
  )
}

export default QA

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #ffffff;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`
