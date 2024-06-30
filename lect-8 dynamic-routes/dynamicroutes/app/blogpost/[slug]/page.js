export default function Page({ params }) {
    throw new Error("Error")
    let languages = ["python","kobra",'cpp','cs','dhando']
    if(languages.includes(params.slug)){
        
        return <div>My Post: {params.slug}</div>
    }else{
       return <div>Post Not Found</div>

    }


  }