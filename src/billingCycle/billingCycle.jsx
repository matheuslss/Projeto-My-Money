import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 
import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsHeader'
import TabsContent from '../commom/tab/tabsContent'
import TabHeader from '../commom/tab/tabHeader'
import TabContent from '../commom/tab/tabContent'
import { selectTab, showTabs } from '../commom/tab/tabActions'
import { create } from '../billingCycle/billingCycleActions'

import BillingCycleList from '../billingCycle/billingCycleList'
import BillingCycleForm from '../billingCycle/billingCycleForm'
 
class BillingCycle extends Component {
  
  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }

  render() {

    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'> 
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'> 
                <BillingCycleForm onSubmit={ this.props.create } />
              </TabContent>
              <TabContent id='tabUpdate'> <h1> Alterar </h1></TabContent>
              <TabContent id='tabDelete'> <h1> Excluir </h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = 
  dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch)

  export default connect(null, mapDispatchToProps) (BillingCycle)