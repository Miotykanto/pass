import React from 'react';

class PostTaximan extends React.Component {
    constructor(Props) {
        super(Props);

        this.state = {
            taxiname:'',
            pub:'',
            citation:'',
            phone:'',
            image:''
        };
        this.onchange = this.onchange.bind(this)
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }


    onchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUploadImage(maneva) {
        maneva.preventDefault();

        const data1 = new ImageData();
        data1.append('image', this.uploadInput1.files[0]);
        data1.append('taxiName',this.state.taxiName);
        data1.append('pub',this.state.pub);
        data1.append('citation',this.state.citation);
        data1.append('phone',this.state.phone);
        fetch('http://localhost:8080/createTaximan'+localStorage.getItem('id'), {
             method: 'POST',
             bodio: data1
        })
        .then((Response) => {
            Response.json()
            .then((bodio) =>{
                this.setState({image: `http://localhost:8080/createTaximan/${bodio.image}` });
                console.log('io fa tonga le bodio ôh file ', bodio.image);
                
            })
        })

        this.setState({
            image:'',
            taxiName:'',
            pub:'',
            citation: '',
            phone:'',
            image:''                    

        })
        
    }
    rende() {
        return(
            <div>
            <form class="md-form" onSubmit={this.handleUploadImage}>
  <div class="file-field">
      <label>Nom</label>
    <a class="btn-floating peach-gradient mt-0 float-left">
      <i class="fas fa-paperclip" aria-hidden="true"></i>
      <input type="text"
     className="liga"
       value={this.state.value}
       onChange={this.onChange}
       name="taxiName" />
    </a>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text" placeholder="Upload your file"
      className="liga"
      value={this.state.value}
      onChange={this.onChange}
      name="taxiName" />/>
    </div>
  </div>
</form>
<form class="md-form">
  <div class="file-field">
    <a class="btn-floating blue-gradient mt-0 float-left">
      <i class="far fa-heart" aria-hidden="true"></i>
      <input type="file" 
      className="liga"
      value={this.state.value}
      onChange={this.onChange}
      name="taxiName" />
    </a>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text" placeholder="Upload your file"
      className="liga"
      value={this.state.value}
      onChange={this.onChange}
      name="taxiName" />
    </div>
  </div>
</form>
<form class="md-form">
  <div class="file-field">
    <a class="btn-floating purple-gradient mt-0 float-left">
      <i class="fas fa-cloud-upload-alt" aria-hidden="true"></i>
      <input type="file"
     className="liga"
     value={this.state.value}
     onChange={this.onChange}
     name="taxiName" />
    </a>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text" placeholder="Upload your file"
     className="liga"
     value={this.state.value}
     onChange={this.onChange}
     name="taxiName" />
    </div>
  </div>
</form>
</div>

        )
    }
}

export default PostTaximan;