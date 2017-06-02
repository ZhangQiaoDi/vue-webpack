<!--html-->
<template>
	<div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
		<!--侧滑菜单部分-->
		<aside id="offCanvasSide" class="mui-off-canvas-left">
			<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<div class="title">侧滑导航</div>
					<div class="content">
						这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; 3.点击如下红色按钮
						<span class="android-only">；4.Android手机按back键；5.Android手机按menu键
							</span>。
						<p style="margin: 10px 15px;">
							<button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
						</p>

					</div>
					<div class="title" style="margin-bottom: 25px;">侧滑列表示例</div>
					<ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
						<li class="mui-table-view-cell">
							<!--<a class="mui-navigate-right" href="#/index/ask">
								精华
							</a>	-->
							<button class="mui-navigate-right" @click="linkTo(0)">精华</button>
						</li>
						<li class="mui-table-view-cell">
							<!--<a class="mui-navigate-right" href="#/index/share">
								分享
							</a>-->
							<button class="mui-navigate-right" @click="linkTo(1)">分享</button>
						</li>
						<li class="mui-table-view-cell">
							<!--<a class="mui-navigate-right" href="#/index/job">
								问答
							</a>-->
							<button class="mui-navigate-right" @click="linkTo(2)">问答</button>
						</li>
						<li class="mui-table-view-cell">
							<!--<a class="mui-navigate-right" href="#/index/good">
								招聘
							</a>-->
							<button class="mui-navigate-right" @click="linkTo(3)">招聘</button>
						</li>
					</ul>
				</div>
			</div>
		</aside>
		<!--主界面部分-->
		<div class="mui-inner-wrap mui-slider-group">
			<header class="mui-bar mui-bar-nav">
				<a href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
				<a class="mui-action-back mui-btn mui-btn-link mui-pull-right">关闭</a>
				<h1 class="mui-title">div模式右滑菜单</h1>
			</header>
			<div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
				<div class="mui-scroll">
					<router-view></router-view>
					<div class="mui-content-padded" id='mui-content-padded'>
						<carousel></carousel>
						<list></list>
					</div>
				</div>
			</div>
			
			<!-- off-canvas backdrop -->
			<div class="mui-off-canvas-backdrop"></div>
		</div>
	</div>
</template>
<!--js-->
<script>
	import carousel from "./index/carousel.vue";
	import list from "./index/list.vue";
	module.exports = {
		components: {
			carousel,
			list,
		},
		mounted() {
			mui.init();
			//侧滑容器父节点
			var offCanvasWrapper = mui('#offCanvasWrapper');
			//主界面容器
			var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
			//菜单容器
			var offCanvasSide = document.getElementById("offCanvasSide");

			//移动效果是否为整体移动
			var moveTogether = false;
			
			 //主界面‘显示侧滑菜单’按钮的点击事件
//			document.getElementById('offCanvasShow').addEventListener('tap', function() {
//				offCanvasWrapper.offCanvas('show');
//			});
			 //菜单界面，‘关闭侧滑菜单’按钮的点击事件
			document.getElementById('offCanvasHide').addEventListener('tap', function() {
				offCanvasWrapper.offCanvas('close');
			});
			
			//主界面和侧滑菜单界面均支持区域滚动；
			mui('#offCanvasSideScroll').scroll();
			mui('#offCanvasContentScroll').scroll();
			
			mui('body').on('tap','a',function(){document.location.href=this.href;});
			//
		},
		methods:{
			linkTo(page){
//				console.log(page)
				//跳转路由
				switch(page){
					case 0:
					window.location.href = "#/index/ask";
					break;
					case 1:
					window.location.href = "#/index/share";
					break;
					case 2:
					window.location.href = "#/index/job";
					break;
					case 3:
					window.location.href = "#/index/good";
					break;
				}
//				关闭侧栏菜单
				this.offHide()
			},
			offHide(){
				var offCanvasWrapper = mui('#offCanvasWrapper');
				offCanvasWrapper.offCanvas('show');
				$("#mui-content-padded").css({display:'none'})
			}			
		}
	}
</script>
<!--css sass less-->
<!--scoped lang="scss"-->
<style>
	html,
	body {
		background-color: #efeff4;
	}
	/*p {
		text-indent: 22px;
	}*/
	
	span.mui-icon {
		font-size: 14px;
		color: #007aff;
		/*margin-left: -15px;*/
		padding-right: 10px;
	}
	
	.mui-off-canvas-left {
		color: #fff;
	}
	
	.title {
		margin: 35px 15px 10px;
	}
	
	.title+.content {
		margin: 10px 15px 35px;
		color: #bbb;
		text-indent: 1em;
		font-size: 14px;
		line-height: 24px;
	}
	
	input {
		color: #000;
	}
	/*#offCanvasContentScroll{
		margin-bottom:50px;
	}*/
	.mui-content-padded {
		margin: 0;
	}
</style>