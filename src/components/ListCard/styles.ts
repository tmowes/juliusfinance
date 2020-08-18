/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  margin-top: 8px;
  background-color: #282a36;
  border-radius: 16px;
  z-index: 2;
`
const ButtonDimensions = css`
  min-width: 24px;
  justify-content: center;
  align-items: center;
`
export const RefreshButton = styled.View`
  ${ButtonDimensions}
  background: #5AC6EF;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`
export const CloseValuesButton = styled.View`
  ${ButtonDimensions}
`
export const ToggleDownValuesButton = styled.View`
  ${ButtonDimensions}
  background: #E55838;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`
export const TickerSection = styled.View`
  align-items: center;
  justify-content: space-around;
  padding: 6px 0;
  z-index: 2;
`
export const TickerPrice = styled.Text`
  font-size: 16px;
  color: #47ed78;
  opacity: 0.77;
`
export const TickerTitle = styled.Text`
  font-size: 20px;
  color: #f2f3f8;
  opacity: 0.77;
`
export const TickerDiff = styled.Text`
  font-size: 16px;
  color: #47ed78;
  opacity: 0.77;
`
export const ProfitabilitySection = styled.View`
  flex: 0.65;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px;
`
export const ProfitabilityLine = styled.View`
  align-items: center;
  justify-content: space-around;
`
export const PaddingBottomCard = styled.View`
  height: 16px;
  transform: translateY(-16px);
  background: #21222c;
`
export const ExpandedBottomCard = styled.View`
  flex: 1;
  height: 48px;
  transform: translateY(-16px);
  background: #21222c;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`
export const ProfitabilityValuesSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 0;
`
export const ProfitabilityValues = styled.Text`
  font-size: 14px;
  color: #47ed78;
  opacity: 0.77;
`
export const ProfitabilitySubtitle = styled.Text`
  font-size: 12px;
  color: #f2f3f8;
  opacity: 0.77;
  margin: 0 4px;
`
export const ToggleUpValuesButton = styled.View`
  ${ButtonDimensions}
`
export const ToggleValuesButton = styled.View`
  ${ButtonDimensions}
`
