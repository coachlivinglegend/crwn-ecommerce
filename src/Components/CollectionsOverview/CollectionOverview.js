import React from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { selectShopCollectionsForPreview } from '../../redux/Shop/ShopSelectors'
import './CollectionOverview.scss'
import CollectionPreview from '../../Components/PreviewCollection/PreviewCollection';


const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })
            }
        </div>
    )
}






const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)