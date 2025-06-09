const Video = require('../models/video');

exports.getVideos = async (req, res) => {
    const videos = await Video.find();
    res.render('videos', { videos });
};

exports.createVideo = async (req, res) => {
    const newVideo = new Video(req.body);
    await newVideo.save();
    res.redirect('/videos');
};
