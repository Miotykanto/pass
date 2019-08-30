
import React from 'react';

class PostFrontToBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     titre: '',
     description:'',
      date:'', 
      debut:'',
      dure:'',
      place_dispo:'',
      place_reserve:'',
      prix:'',
     image:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }




  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('image', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('debut',this.state.debut);
    data.append('dure',this.state.dure);
    data.append('place_dispo',this.state.place_dispo);
    data.append('place_reserve',this.state.place_reserve);
    data.append('prix',this.state.prix);
    fetch('http://localhost:8080/register/'+localStorage.getItem('id'), {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `http://localhost:8080/register/${body.image}` });
        console.log('ity ilay body.fil',body.image);
       
      });
    });
    this.setState({
      titre: '',
      description:'',
       date:'',
       debut:'',
       dure:'',
       place_dispo:'',
      place_reserve:'',
      prix:'',
       image:''
    })
    
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage }
       
    ><div className="form-group">
        <label>Type chambre:</label>
        <input type="text"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="titre" /><br></br></div>

          <div className="form-group">
          <label>Description:</label>
        <input type="textarea"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="description" /><br></br></div>

          <div className="form-group">
        <label>Date de reservation:</label>
        <input type="date"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="date" /><br></br> </div>

          <div className="form-group">
          <label>Date fin de reservation:</label>
        <input type="date"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="debut" /><br></br> </div>

          <div className="form-group">
          <label>Nombre d'Adulte:</label>
        <input type="number"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="dure" /><br></br>  </div>

          <div className="form-group"></div> 
          <label>Nombre d'Enfant:</label>
        <input type="text"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="place_dispo" /><br></br> 

          <div className="form-group">
          <label>Total Personne:</label>
        <input type="text"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="place_reserve" /><br></br> </div> 

          <div className="form-group"> 
          <label>Prix:</label>
        <input type="text"
        className="form-control"
          value={this.state.value}
          onChange={this.onChange}
          name="prix" /><br></br>   </div> 
      
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image"/>
       
          <input type="submit" class="fadeIn fourth" value="Ajouter"/>
      </form>
    );
  }
}

export default PostFrontToBack;