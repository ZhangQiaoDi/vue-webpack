<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
		</header>
		<div v-html='content'></div>
	</div>
</template>

<script>
	module.exports = {
		mounted(){
			this.getData();
		},
		data:function(){
			return {
				newsDetail:[],
				title:'',
				content:''
			}
		},
		methods: {
			getData(){
//			console.log(this)
//			console.log(this.$route.params.id)
				var self = this;
				$.ajax({
					url:"https://cnodejs.org/api/v1/topic/" +  this.$route.params.id,
					data:{
						mdrender:true
					},
					type:"GET",
					dataType:'json',
					success(data){
						console.log(data.data);
//						self.newsDetail = data.showapi_res_body.pagebean.contentlist[self.$route.params.id]
						self.newsDetail = data.data					
						self.title = self.newsDetail.title
						self.content = self.newsDetail.content
						
						
//						self.datailNews=data.data
//	                    self.title=self.datailNews.title;
//	                    self.content=self.datailNews.content;
						
					}
				})
			}
		}
	}	
</script>

<style>
	.weui-article{
		margin-top: 44px;
	}
	.h3_t{
		text-align: center;
		padding:5% 0;
	}
	.p_desc{
		text-indent:2em;
		line-height: 30px;
		padding:0 5%;
	}
	.p_img{
	    width: 100%;

	    box-sizing: border-box;
	}
	.p_img img{
		width:100%;
		padding: 5%;
    	box-sizing: border-box;
    	float: left;
	}
</style>