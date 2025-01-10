import image1 from "./img/pexels-photo-6758398.jpeg"
import image2 from "./img/pexels-photo-2177482.jpeg"
import image3 from "./img/pexels-photo-4857775.jpeg"

export default function Web(){
    return(
        
<div className="web">
      <div className="container">
          <h2>Web Creations</h2>
          <hr className="my-4 border-secondary p-2 border-1"></hr>
              <div className="row">
                <div className="col-sm-4">
                  <div className="card mb-3">
                      <img src={image1} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title fs-3">Project 1</h5>
                        <p className="card-text lh-lg text-muted fs-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="card mb-3">
                      <img src={image2} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title fs-3">Project 2</h5>
                        <p className="card-text lh-lg text-muted fs-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="card mb-3">
                      <img src={image3} class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title fs-3">Project 3</h5>
                        <p className="card-text lh-lg text-muted fs-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
                </div>
              </div>
      </div>
   </div>
    )
}