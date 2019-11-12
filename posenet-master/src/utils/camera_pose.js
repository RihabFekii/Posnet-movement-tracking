import {drawKeypoints, drawSkeleton} from './draw';
import WebcamSetup from './webcam';
import Model from './model'
import CosineSimilarity from './similarity';


const videoWidth = 540;
const videoHeight = 540;

let minPoseConfidence = 0.2
let minPartConfidence = 0.2
// cosine similarity object
let similarity = new CosineSimilarity(true, 0.85);

/**
 * Feeds an image to posenet to estimate poses - this is where the magic
 * happens. This function loops with a requestAnimationFrame method.
 */
function detectPoseInRealTime(video, net, confront_pose) {
  console.log(net);
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');

    canvas.width = videoWidth;
    canvas.height = videoHeight;

    async function poseDetection() {
      let poses = [];

      let all_poses = await net.estimatePoses(video, {
        flipHorizontal: true,
        decodingMethod: 'multi-person',
        maxDetections: 2,
        scoreThreshold: 0.6,
      });

      poses = poses.concat(all_poses);

      ctx.clearRect(0, 0, videoWidth, videoHeight);

      ctx.save();
      ctx.scale(-1, 1);
      ctx.translate(-videoWidth, 0);
      ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
      ctx.restore();

      poses.forEach(({score, keypoints}) => {
        if (score >= minPoseConfidence) {
            console.log(keypoints);
            drawKeypoints(keypoints, minPartConfidence, ctx);
            drawSkeleton(keypoints, minPartConfidence, ctx);
            //drawBoundingBox(keypoints, ctx);

            console.log(similarity.calculate({score, keypoints}, confront_pose));
        }
      });

      requestAnimationFrame(poseDetection);

    }

    poseDetection();
}

async function loadVideo() {
  // get the loader object
  let loader = new WebcamSetup(document.getElementById('vid'), videoWidth, videoHeight);
  // load the webcam video
  const video = await loader.setupCamera();
  // play it
  video.play();

  return video;
}

/**
 * Kicks off the demo by loading the posenet model, finding and loading
 * available camera devices, and setting off the detectPoseInRealTime function.
 */
export async function bindPage(confront_pose) {
  let model = new Model();
  const net = await model.load();
  
  let video;
  
  try {
    video = await loadVideo();
  } catch (e) {
    console.log(e);
    throw e;
  }
  detectPoseInRealTime(video, net, confront_pose);
}