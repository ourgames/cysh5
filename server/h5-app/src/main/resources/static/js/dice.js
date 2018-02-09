//
//var audio_shake;
//window.onload = function() {
//	initAudio();
//}
//var initAudio = function() {
//	audio_shake = document.createElement("audio");
//	audio_shake.src = 'mp3/shakes.mp3';
//}

var SHAKE_THRESHOLD = 1800;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;

if (window.DeviceMotionEvent) {
	window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
	alert('抱歉，你的手机配置实在有些过不去，考虑换个新的再来试试吧');
}


if ('getContext' in document.createElement('canvas')) {
	HTMLImageElement.prototype.play = function() {
		if (this.storeCanvas) {
			// 移除存储的canvas
			this.storeCanvas.parentElement.removeChild(this.storeCanvas);
			this.storeCanvas = null;
			// 透明度还原
			image.style.opacity = '';
		}
		if (this.storeUrl) {
			this.src = this.storeUrl;
		}
	};
	HTMLImageElement.prototype.stop = function() {
		var canvas = document.createElement('canvas');
		// 尺寸
		var width = this.width,
			height = this.height;
		if (width && height) {
			// 存储之前的地址
			if (!this.storeUrl) {
				this.storeUrl = this.src;
			}
			// canvas大小
			canvas.width = width;
			canvas.height = height;
			// 绘制图片帧（第一帧）
			canvas.getContext('2d').drawImage(this, 0, 0, width, height);
			// 重置当前图片
			try {
				this.src = canvas.toDataURL("image/gif");
			} catch (e) {
				// 跨域
				this.removeAttribute('src');
				// 载入canvas元素
				canvas.style.position = 'absolute';
				// 前面插入图片
				this.parentElement.insertBefore(canvas, this);
				// 隐藏原图
				this.style.opacity = '0';
				// 存储canvas
				this.storeCanvas = canvas;
			}
		}
	};
}


var times = 0;

function deviceMotionHandler(eventData) {
	var acceleration = eventData.accelerationIncludingGravity;
	var curTime = new Date().getTime();


	if ((curTime - last_update) > 100) {
		var diffTime = curTime - last_update;
		last_update = curTime;
		x = acceleration.x;
		y = acceleration.y;
		z = acceleration.z;
		var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
		// var status = document.getElementById("status");

		if (speed > SHAKE_THRESHOLD) {


			doResult();
			times++;

		}
		last_x = x;
		last_y = y;
		last_z = z;
	}
}
//播放控制
//function autoPlay() {
//	var index = 0;
//	audio_shake.addEventListener('ended', function() {
//		// Wait 500 milliseconds before next loop  
//		setTimeout(function() {
//			if (index < 1) {
//				audio_shake.play(); index++
//			}
//		}, 500);
//	}, false);
//	audio_shake.play();
//}
//function autoPlayed() {
//	var audio = document.createElement("audio");
//	var index = 0;
//	audio.src = "mp3/skresult.mp3";
//	audio.addEventListener('ended', function() {
//		// Wait 500 milliseconds before next loop  
//		setTimeout(function() {
//			if (index < 0) {
//				audio.play(); index++
//			}
//		}, 0);
//	}, false);
//	audio.play();
//}


function doResult() {
	if (times > 0) {
		return false;
	}

	var rand = Math.floor(Math.random() * 5) + 1;
	alert(rand);
	setTimeout(function() {
		times = 0;
	}, 1000);
}