import React, { Component } from 'react'

import Grid from '../commom/layout/grid'
import Row from '../commom/layout/row'
import ValueBox from '../commom/widget/valueBox'
 
export default ({credit, debt}) => (
  <Grid cols='12' >
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox cols='12 4' color='green' icon='bank'
          value={`R$ ${credit}`} text='Total de créditos' />
        <ValueBox cols='12 4' color='red' icon='credit-card'
          value={`R$ ${debt}`} text='Total de débitos' />
        <ValueBox cols='12 4' color='blue' icon='money'
          value={`R$ ${credit - debt}`} text='Valor consolidado' />
      </Row>
    </fieldset>
  </Grid>
)
 
