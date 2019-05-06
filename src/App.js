import React, {Component} from 'react';
import Button from '@material/react-button';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import './App.scss';

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <TextField
          label='Username'
          helperText={<HelperText>Enter username</HelperText>}
          onTrailingIconSelect={() => this.setState({username: ''})}
          trailingIcon={<MaterialIcon role="button" icon="clean"/>}
        ><Input
          value={this.state.username}
          onChange={(e) => this.setState({username: e.currentTarget.value})} />
        </TextField>
        <TextField
          label='Email'
          helperText={<HelperText>Enter email</HelperText>}
          onTrailingIconSelect={() => this.setState({email: ''})}
          trailingIcon={<MaterialIcon role="button" icon="clean"/>}
        ><Input
          value={this.state.email}
          onChange={(e) => this.setState({email: e.currentTarget.value})} />
        </TextField>
        <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default App;
