import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import './PreviewColection.scss';

const PreviewColection = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, i) => i < 4).map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )    
}


export default PreviewColection