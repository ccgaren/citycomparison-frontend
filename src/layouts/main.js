import React from 'react'

//import Navbar from '../components/navbar'

import * as pages from '../pages'

import { to } from '../actions/navigation'

import { connectTo } from '../utils/common'
//import { PAGES_WITH_NAVBAR } from '../constants/navigation'

import styled from 'styled-components'

const Layout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

class MainLayout extends React.Component {
  render() {
    const { page } = this.props
    if (!page) return 'No page was specified'
    const Page = pages[page]
    return (
      <Layout>
        <Page />
      </Layout>
    )
  }
}

export default connectTo(
  state => ({
    page: state.navigation.page
  }),
  { to },
  MainLayout
);
