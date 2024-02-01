import connect from "@/config/connect";
import Blogs from "@/models/blogs";

export async function GET(req){
    const topic = req.nextUrl.searchParams.get("topic") || "none"
    const resultsPerPage = 10;
    let lastPage
    let page = req.nextUrl.searchParams.get("page") >= 1 ?  req.nextUrl.searchParams.get("page") : 1;
    page = page - 1
    const filter  = {
      blog_publish:true
    }
    if(topic !== "none"){
	filter.blog_topic = topic
    }
    await connect()
    const blogs = await Blogs.find(filter).sort({
      blog_creation:-1
    }).limit(resultsPerPage).skip(resultsPerPage * page)
    const total_blogs = await Blogs.countDocuments(filter)
    lastPage = Math.floor(total_blogs/resultsPerPage) <= page + 1  
    return Response.json({
      topic,
      resultsPerPage,
      page:page+1,
      total_blogs,
      blogs,
      lastPage
    })
}
