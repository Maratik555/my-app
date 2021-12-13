import React from 'react'
//import s from'./ProfileInfo.module.css'
//import Preloader from "../../common/Preloader/Preloader";
//import idPhoto from "../../../assets/images/1.jpg"

class ProfileStatus extends React.Component {
 state = {
   editMode: false,
   status: this.props.status
 }

 actMode = () => {
   this.setState({ editMode: true})

 }
 deactivateMode = () => {
   this.setState({ editMode: false})
   this.props.updateStatus(this.state.status)
 }

 onStatusChange = (e) => {
   if(e.target.value.length <= 300)
   this.setState({
     status: e.target.value
   })
 }

 componentDidUpdate(prevProps, prevState, snapshot) {
   if (prevProps.status !== this.props.status) {
     this.setState({status: this.props.status})
   }
 }

  render() {
  const props = this.props;
  return (
    <div>
        {!this.state.editMode &&
        <div>
          <span onClick={this.actMode}>{props.status || 'Нет статуса'}</span>
        </div>
      }
        {this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange}
                 onBlur={this.deactivateMode}
                 autoFocus={true} value={this.state.status}/>
          <div style={{color: 'white'}}>{this.state.status.length}/300</div>
        </div>
      }
    </div>
  )
}
}

export default ProfileStatus;