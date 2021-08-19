const mongoose  = require('mongoose')
const data = require('../db/data');

const VideoSchema = new mongoose.Schema({
        kind: String,
        etag: String,
        items: 
        [
            {
                kind: String,
                etag: String,
                id: String,
                snippet: {
                    publishedAt: String,
                    channeld: String,
                    title: String,
                    description: String,
                    thumbnails: {
                        default: {
                            url: String,
                            width: Number,
                            height: Number
                        },
                        medium: {
                            url: String,
                            width: Number,
                            height: Number
                        },
                        high: {
                            url: String,
                            width: Number,
                            height: Number
                        },
                        standard: {
                            url: String,
                            width: Number,
                            height: Number
                        },
                        maxres: {
                            url: String,
                            width: Number,
                            height: Number
                        }
                    },
                    channelTitle: String,
                    tags: [
                        String
                    ],
                    categoryId: Number,
                    liveBroadcastContent: String,
                    localized: {
                        title: String,
                        description: String
                    }
                }
            }
        ],
        pageInfo: {
          
            totalResults: Number,
            resultsPerPage: Number,
        
        }
})

const Video = mongoose.model('Video', VideoSchema);



module.exports = {Video}