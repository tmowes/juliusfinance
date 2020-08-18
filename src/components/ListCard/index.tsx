import React, { useMemo } from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  RefreshButton,
  ToggleValuesButton,
  TickerSection,
  TickerPrice,
  TickerTitle,
  TickerDiff,
  ProfitabilitySection,
  ProfitabilityLine,
  ProfitabilityValues,
  ProfitabilitySubtitle,
  ProfitabilityValuesSection,
  ExpandedBottomCard,
  PaddingBottomCard,
  ToggleDownValuesButton,
} from './styles'
import { TickerDTO } from './types'

const ListCard: React.FC<TickerDTO> = ({ tickerDetails }) => {
  const priceNow = useMemo(() => {
    return tickerDetails.price
  }, [])
  return (
    <>
      <Container style={{ elevation: 16 }}>
        <RefreshButton style={{ elevation: 16 }}>
          <Icon name="refresh-cw" size={20} color="#21222c" />
        </RefreshButton>
        <TickerSection>
          <TickerPrice>{`R$${priceNow}`}</TickerPrice>
          <TickerTitle>{tickerDetails.ticker}</TickerTitle>
          <TickerDiff>- 0,12%</TickerDiff>
        </TickerSection>
        <ProfitabilitySection>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>HOJE</ProfitabilitySubtitle>
            <ProfitabilityValues>- 0,12%</ProfitabilityValues>
            <ProfitabilitySubtitle>MÊS</ProfitabilitySubtitle>
            <ProfitabilityValues>24,12%</ProfitabilityValues>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>ACUMULADA</ProfitabilitySubtitle>
            <ProfitabilityValues>41,29%</ProfitabilityValues>
            <ProfitabilitySubtitle>CARTEIRA</ProfitabilitySubtitle>
            <ProfitabilityValues>8,29%</ProfitabilityValues>
          </ProfitabilityLine>
        </ProfitabilitySection>
        <ToggleDownValuesButton style={{ elevation: 16 }}>
          <Icon name="chevron-down" size={20} color="#f4ede8" />
        </ToggleDownValuesButton>
      </Container>
      <PaddingBottomCard />
      <ExpandedBottomCard style={{ elevation: 10 }}>
        <ProfitabilityValuesSection>
          <ToggleValuesButton>
            {/* <Icon name="chevron-down" size={20} color="#f4ede8" /> */}
          </ToggleValuesButton>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>PREÇO MÉDIO</ProfitabilitySubtitle>
            <ProfitabilitySubtitle>QTD</ProfitabilitySubtitle>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilityValues>R$ 46,11</ProfitabilityValues>
            <ProfitabilityValues>{tickerDetails.quantity}</ProfitabilityValues>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>TOTAL</ProfitabilitySubtitle>
            <ProfitabilitySubtitle>LUCRO</ProfitabilitySubtitle>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilityValues>R$ 3257,50</ProfitabilityValues>
            <ProfitabilityValues>R$ 952,00</ProfitabilityValues>
          </ProfitabilityLine>
          <ToggleValuesButton>
            <Icon name="chevron-up" size={20} color="#f4ede8" />
          </ToggleValuesButton>
        </ProfitabilityValuesSection>
      </ExpandedBottomCard>
    </>
  )
}

export default ListCard
