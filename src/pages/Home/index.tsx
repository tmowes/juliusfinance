/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { View, TextInput } from 'react-native'
import ListCard from '../../components/ListCard'

import {
  ENV_SPREADSHEET_URL,
  ENV_GOOGLE_KEY,
  ENV_SPREADSHEET_ID,
} from '../../secrets/env.json'

import {
  Container,
  Title,
  PortifolioTitle,
  Header,
  Empty,
  PortifolioList,
  Portifolio,
  TickersList,
  TickersTitle,
  Footer,
} from './styles'
import { SheetProps } from './types'
import FilterInput from '../../components/FilterInput'

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const tickerInputRef = useRef<TextInput>(null)

  const [sheetData, setSheetData] = useState<SheetProps[]>([])
  useEffect(() => {
    async function loadData() {
      const sheetName = 'DATA'
      const sheetRange = 'C3:G22'
      const { data } = await axios.get(
        `${ENV_SPREADSHEET_URL}/${ENV_SPREADSHEET_ID}/values/${sheetName}!${sheetRange}?key=${ENV_GOOGLE_KEY}`,
      )
      const result = data.values.map((item: SheetProps[]) => {
        return {
          id: item[1],
          ticker: item[1],
          quantity: Number(item[2]),
          price: Number(item[3]).toFixed(2),
        }
      })
      setSheetData(result)
    }
    loadData()
  }, [])

  return (
    <Container>
      <Header>
        <Title>JULIUS da BOLSA</Title>
      </Header>
      <View style={{ backgroundColor: '#343746', paddingVertical: 8 }}>
        <Form ref={formRef} onSubmit={() => {}}>
          <FilterInput
            ref={tickerInputRef}
            autoCorrect={false}
            autoCapitalize="characters"
            name="ticker"
            placeholder="FILTRAR / ADICIONAR ATIVO..."
            icon="plus"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm()
            }}
          />
        </Form>
      </View>
      <PortifolioList>
        <Portifolio
          data={sheetData}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Empty />}
          renderItem={({ item: tickerDetails }) => (
            <ListCard tickerDetails={tickerDetails} />
          )}
        />
      </PortifolioList>
      <Footer />
    </Container>
  )
}

export default Home
