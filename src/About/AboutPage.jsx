import{browseHistory} from 'react-router';

export class AboutPage extends React.Component {
  constructor(props){
    super(props);
    this.changeName = this.changeName.bind(this);
  }
  changeName(){
    browseHistory.push(`/aboout/$(this.input.value)`);
  }
  render() {
    return (
      <div>
        <div>
          hi, I am {this.props.params.name}.
        </div>
        <input type="text" ref={(input) => this.input = input}/>
        <button onClick={this.changeName}>submit</button>
      </div>
    )
  }
}
