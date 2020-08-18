/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { SheetProps } from './types'

export const Container = styled.View`
  flex: 1;
  background-color: #21222c;
`
export const Title = styled.Text`
  color: #f4ede8;
  text-align: center;
  font-size: 22px;
`
export const TickersTitle = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  /* background-color: #21222c; */
  width: 60px;
`
export const TickersList = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  /* border-bottom-width: 1px; */
  /* border-color: #5ac6efaa; */
  margin: 4px;
  padding: 4px;
`
export const PortifolioTitle = styled.Text`
  color: #f4ede8;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
`
export const Header = styled.View`
  height: 48px;
  background-color: #21222c;

  /* border-bottom-width: 1px; */
  justify-content: center;
  /* border-color: #5ac6efaa; */
`
export const Empty = styled.View``

export const PortifolioList = styled.View`
  background-color: #343746;
  /* padding: 0 16px; */
`
export const Portifolio = styled(FlatList as new () => FlatList<SheetProps>)`
  padding: 0 8px;
  margin-bottom: 96px;
`
export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #21222c;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #5ac6efaa;
  height: 48px;
  padding: 16px 0 8px;
`
