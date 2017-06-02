<template>
	<div>
		<div class="mui-content">
			<ul id="OA_task_1" class="mui-table-view">
				<li class="mui-table-view-cell" v-for="arrList in arr">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>					
					<div class="mui-slider-handle">
						<a class="mui-navigate-right" :href='arrList.link'>
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
			})(mui);			
		},
		data(){
			return{
				arr:[],
				page:1
			}
		},
		methods: {
			getData(){
				var self = this;
				$.ajax({
					url:"https://cnodejs.org/api/v1/topics",
					type:"GET",
					data:{
						page:self.page,
						tab:"share" 
					},
					success(data){
//						console.log(data)
						self.arr = self.arr.concat(data.data)
//						console.log(self.arr)
					}
				})
				page++;
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