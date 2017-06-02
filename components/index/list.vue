<template>
	<div>
		<div class="mui-content">
			<!--<ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="arrList in arr">
					<a class="mui-navigate-right" :href='arrList.link'>
						<img class="mui-media-object mui-pull-left" :src='arrList.author.avatar_url'>
						<div class="mui-media-body">
							<p class="aaaa">{{arrList.title}}</p>
							<p class='mui-ellipsis'>{{arrList.create_at}}</p>
						</div>
					</a>
				</li>
			</ul>-->
			<ul id="OA_task_1" class="mui-table-view">
				<li class="mui-table-view-cell" v-for="(arrList,index) in arr">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>					
					<div class="mui-slider-handle">					
						<a class="mui-navigate-right" :href="'#/xdetail/'+ arrList.id">
							<img class="mui-media-object mui-pull-left" :src='arrList.author.avatar_url'>
							<div class="mui-media-body">
								<p class="aaaa">{{arrList.title}}</p>
								<p class='mui-ellipsis'>{{arrList.create_at}}</p>
							</div>
						</a>	
					</div>					
				</li>
			</ul>
			<!--<button type="button" class="mui-btn mui-btn-block b_mt" @click="getData()">查看更多</button>-->
		</div>
	</div>
</template>

<script>
	var page = 1;
	var lis = 10;
	module.exports = {
		mounted() {
			this.getData();
//			mui.init({
//				swipeBack: true //启用右滑关闭功能
//			});
			mui.init();
			(function($) {
				//第一个demo，拖拽后显示操作图标，点击操作图标删除元素；
				$('#OA_task_1').on('tap', '.mui-btn', function(event) {
					var elem = this;
					var li = elem.parentNode.parentNode;
					mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function(e) {
						if (e.index == 0) {
							li.parentNode.removeChild(li);
						} else {
							setTimeout(function() {
								$.swipeoutClose(li);
							}, 0);
						}
					});
				});
				var btnArray = ['确认', '取消'];	

				$.ready(function() {
					//循环初始化所有下拉刷新，上拉加载。
					$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
						$(pullRefreshEl).pullToRefresh({
							down: {
								callback: function() {
//									var self = this;
//									setTimeout(function() {						
//										self.endPullDownToRefresh();
//									}, 1000);
								}
							},
							up: {
								callback: function() {
									var self = this;
									setTimeout(function() {		
										console.log(1234)
//										self.getData();
										self.endPullUpToRefresh();
									}, 1000);
								}
							}
						});
					});
				
				});
			})(mui);	
		},
		data(){
			return{
				arr:[],
				page:1,
				lis:10,
			}
		},
		methods: {
			getData(){
				var self = this;
				$.ajax({
					url:"https://cnodejs.org/api/v1/topics",
					type:"GET",
					data:{
						limit:lis,
					},
					success(data){
						self.arr = self.arr.concat(data.data)
						console.log(self.arr);
					}
				})
			}
		}
	}
</script>

<style>
	.title {
		margin: 10px 15px 10px;
		color: #6d6d72;
		font-size: 15px;
	}
	.mui-content > .mui-table-view:first-child{
		margin-top:0;
	}
	.aaaa{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color:#000000;
		width:260px;
	}
</style>