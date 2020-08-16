import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/Shop/ShopSelectors'
// import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/firebase.utils'
import CollectionPage from '../Collection/Collection'
import { fetchCollectionsStartAsync } from '../../redux/Shop/ShopActions'
import CollectionOverview from '../../Components/CollectionsOverview/CollectionOverview';
import WithSpinner from '../../Components/withSpanner/withSpanner'
const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    UNSAFE_componentWillMount() {

    }
    // state = {
    //     loading: true
    // }
    // unsubscribeFromSnapshot = null;
    // componentDidMount () {
    //     const { updateCollections } = this.props
    //     const collectionRef = firestore.collection('collections')
    //         //promise style
    //         collectionRef.get().then(snapshot => {
    //             //subscriber observer live method.
    //         // collectionRef.onSnapshot(async snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //         updateCollections(collectionsMap)
    //         this.setState({loading: false})
    //     })

    //     //using normaly rest api calls
    //     // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-991ce/databases/(default)/documents/collections')
    //     // .then(response => response.json())
    //     // .then(collections => console.log(collections))
    // }
    
componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
}

    render () {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props
        return (
            <div className = 'shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverViewWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} />
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)