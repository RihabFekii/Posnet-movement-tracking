//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import cosine_similarity from './utils/pose_utils'
import {bindPage} from './utils/camera_pose'
//import {drawKeypoints, drawSkeleton} from './utils/draw';
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var pose1 = '{"score":0.970882840016309,"keypoints":[{"score":0.9980577230453491,"part":"nose","position":{"x":268.61655624924003,"y":84.64433870426876}},{"score":0.9880929589271545,"part":"leftEye","position":{"x":276.5307522191148,"y":76.05824273847884}},{"score":0.9939249157905579,"part":"rightEye","position":{"x":256.91754352257874,"y":76.23118923795826}},{"score":0.8249800205230713,"part":"leftEar","position":{"x":292.1982286505198,"y":81.5635152735135}},{"score":0.7962579131126404,"part":"rightEar","position":{"x":245.2456866906311,"y":86.68390830667103}},{"score":0.9981082677841187,"part":"leftShoulder","position":{"x":308.40866266985347,"y":139.295905443481}},{"score":0.9984477162361145,"part":"rightShoulder","position":{"x":229.2062514486944,"y":145.36079139561042}},{"score":0.9955794215202332,"part":"leftElbow","position":{"x":322.7820501067759,"y":209.54679437184612}},{"score":0.9962530732154846,"part":"rightElbow","position":{"x":214.81450893535688,"y":214.76939873008877}},{"score":0.9945013523101807,"part":"leftWrist","position":{"x":321.1373711374483,"y":265.09028156443793}},{"score":0.9978019595146179,"part":"rightWrist","position":{"x":209.60787108900018,"y":276.81683492103906}},{"score":0.9929429292678833,"part":"leftHip","position":{"x":288.3417389272252,"y":262.6146706903955}},{"score":0.9953970313072205,"part":"rightHip","position":{"x":248.03775831883056,"y":257.814938437614}},{"score":0.995189905166626,"part":"leftKnee","position":{"x":295.53609528894094,"y":359.3546280322836}},{"score":0.9895787835121155,"part":"rightKnee","position":{"x":244.28986011312168,"y":370.90845130297}},{"score":0.9737228751182556,"part":"leftAnkle","position":{"x":297.5748072524015,"y":450.86935199188355}},{"score":0.9761714339256287,"part":"rightAnkle","position":{"x":237.14540711636675,"y":454.7727473515017}}]}'
pose1 = JSON.parse(pose1);
/*var pose2 = '{"score":0.956752780605765,"keypoints":[{"score":0.9952794313430786,"part":"nose","position":{"x":432.56701636407166,"y":68.17905767418532}},{"score":0.9798464775085449,"part":"leftEye","position":{"x":440.0998756022769,"y":58.6417599689172}},{"score":0.9931899905204773,"part":"rightEye","position":{"x":424.4508664617279,"y":58.18163266905551}},{"score":0.798456072807312,"part":"leftEar","position":{"x":456.2951446414458,"y":67.65302042089084}},{"score":0.7018301486968994,"part":"rightEar","position":{"x":413.90376703284596,"y":64.55761312046867}},{"score":0.99906986951828,"part":"leftShoulder","position":{"x":472.06611484868984,"y":130.35804926653316}},{"score":0.9992176294326782,"part":"rightShoulder","position":{"x":397.9840645994194,"y":131.26298659506475}},{"score":0.99247145652771,"part":"leftElbow","position":{"x":485.10142523027116,"y":206.32319409559673}},{"score":0.9976966977119446,"part":"rightElbow","position":{"x":387.18310404380475,"y":207.64814206134486}},{"score":0.9901171326637268,"part":"leftWrist","position":{"x":483.21853103340834,"y":266.66317535281644}},{"score":0.9976897239685059,"part":"rightWrist","position":{"x":383.7499192531007,"y":279.6866070342899}},{"score":0.9876668453216553,"part":"leftHip","position":{"x":451.9732856008329,"y":266.58156339296573}},{"score":0.9955702424049377,"part":"rightHip","position":{"x":416.4595631402754,"y":260.8647506060767}},{"score":0.9896021485328674,"part":"leftKnee","position":{"x":457.15368129863816,"y":385.80754736518116}},{"score":0.9952103495597839,"part":"rightKnee","position":{"x":413.56603362680875,"y":382.71437233060254}},{"score":0.9017110466957092,"part":"leftAnkle","position":{"x":466.40050390815,"y":485.7439330579706}},{"score":0.9501720070838928,"part":"rightAnkle","position":{"x":400.90382023080315,"y":486.13168204340957}}]}'
pose1 = JSON.parse(pose1);
pose2 = JSON.parse(pose2);
console.log(cosine_similarity(pose1, pose2))


const canvas = document.getElementById('output');
const ctx = canvas.getContext('2d');

canvas.width = 540;
canvas.height = 540;

const scale = 1
const color = 'red'

drawKeypoints(pose1.keypoints, 0, ctx, scale, color);
drawSkeleton(pose1.keypoints, 0, ctx, scale, color);

drawKeypoints(pose2.keypoints, 0, ctx);
drawSkeleton(pose2.keypoints, 0, ctx);*/

bindPage(pose1);
//console.log(cosine_similarity(pose1, pose2));

