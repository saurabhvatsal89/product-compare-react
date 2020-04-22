import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Compare, ProductList } from '../../components'
import * as productActions from '../../actions/product'
import { connect } from 'react-redux'
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const { products, actions } = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <ProductList products={products} compare={actions.compare} />
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts} />
        }
        MessengerCustomerChat: <MessengerCustomerChat
          pageId="<YOUR_PAGE_ID>"
          appId="<YOUR_APP_ID>"
        />

      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
