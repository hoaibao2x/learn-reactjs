import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Album({ album }) {
    return (
        <div className='album'>
            <div className='album__thumb'>
                <img src={album.thumbnailUrl} alt={album.name} />
                
                {/* {Other control} */}
            </div>

            <p className='album__name'>{album.name}</p>
        </div>
    )
}

Album.propTypes = {
    album: PropTypes.object.isRequired
}

export default Album
