import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/firebase.utils'
import CollectionPage from '../Collection/Collection'
import { updateCollections } from '../../redux/Shop/ShopActions'
import CollectionOverview from '../../Components/CollectionsOverview/CollectionOverview';
class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount () {
        
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            this.props.updateCollections(collectionsMap)
        })
    }
    
    render () {
        const { match } = this.props
        return (
            <div className = 'shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)