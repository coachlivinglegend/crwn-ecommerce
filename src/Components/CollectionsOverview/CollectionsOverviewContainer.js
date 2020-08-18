import { connect } from 'react-redux';
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/Shop/ShopSelectors'

import WithSpinner from '../withSpanner/withSpanner'
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
(CollectionOverview);

export default CollectionsOverviewContainer