import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
// import { createStructuredSelector } from 'reselect'
// import { selectIsCollectionsLoaded } from '../../redux/Shop/ShopSelectors'
// import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/firebase.utils'
import { fetchCollectionsStart } from '../../redux/Shop/ShopActions'
//commented this out when we wanted to start saga.
// import { fetchCollectionsStartAsync } from '../../redux/Shop/ShopActions'
import CollectionsOverviewContainer from '../../Components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';
// import WithSpinner from '../../Components/withSpanner/withSpanner'



// const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ShopPage = ({ fetchCollectionsStart, match }) => {
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
    useEffect( () => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className = 'shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
                // render={(props) => <CollectionOverViewWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}               
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
                // render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} 
            />
        </div>
    )
}
// const mapStateToProps = createStructuredSelector({
//     isCollectionFetching: selectIsCollectionFetching,
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)