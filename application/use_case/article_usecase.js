const ArticleRepository=require('../../infrastructure/repository/article_repository');
var dotenv=require("dotenv");
dotenv.config();
module.exports={
   getArticle:async(page)=>{
      var article_repository=new ArticleRepository();
      var data=await article_repository.getArticle(page);
      for(var i=0;i<data.results.length;i++){
         data.results[i].image_url=process.env.HOST+"/images/"+data.results[i].image;
         var date=data.results[i].created_at.toString();
         var d = new Date(date);
         data.results[i].date_create=d.toLocaleDateString('en-GB');
      }
      return data;
   },
   getArticleAMP:async(page)=>{
      var article_repository=new ArticleRepository();
      var data=await article_repository.getArticle(page);
      for(var i=0;i<data.results.length;i++){
         data.results[i].image_url=process.env.HOST+"/images/"+data.results[i].image;
         var date=data.results[i].created_at.toString();
         var d = new Date(date);
         data.results[i].date_create=d.toLocaleDateString('en-GB');
      }
      return data.results;
  },
   searchArticle:async(keyword,page)=>{
    var article_repository=new ArticleRepository();
    var data=await article_repository.searchArticle(keyword,page);
    return data;
   },
   getArticleById:async(id)=>{
    var article_repository=new ArticleRepository();
    var data=await article_repository.getArticleById(id);
    return data;
   },
   getArticleBySlug:async(slug)=>{
      var article_repository=new ArticleRepository();
      var data=await article_repository.getArticleBySlug(slug)
      var date=data.created_at.toString();
      var d = new Date(date);
      data.date_create=d.toLocaleDateString('en-GB');
      data.image_url=process.env.HOST+"/images/"+data.image;
      return data;
   }
  
}