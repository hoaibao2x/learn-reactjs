import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {

    const albumList = [
        {
            id: 1,
            name: "Anh Ghét Làm Bạn Em",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/3/d/3d1d185e9c0c93e67c6da7b5366d4c16_1374654705.jpg"
        },
        {
            id: 2,
            name: "Vợ Người Ta",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/0/0/0037fa44fb1ffa4a5ec148a4c14dccdf_1442215245.jpg"
        },
        {
            id: 3,
            name: "Đa Đoan (Single)",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/e/0/b/2e0b183fb42467691da395821d86244a.jpg"
        }
    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    )
}

AlbumFeature.propTypes = {}

export default AlbumFeature
