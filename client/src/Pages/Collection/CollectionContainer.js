import { connect } from 'react-redux';
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/Shop/ShopSelectors'

import WithSpinner from '../../Components/withSpanner/withSpanner'
import CollectionPage from '../Collection/Collection'


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))
const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
(CollectionPage);

export default CollectionsPageContainer