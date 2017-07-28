import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import App from './pages/App';
import Mine from './pages/Mine';
import Notice from './pages/Notice';
import Person from './pages/Person';
import FooterTabBar from './components/FooterTabBar';
import CompList from './pages/CompList';
import SearchComp from './pages/SearchComp';
import Collection from './pages/Collection';
import Interview from './pages/Interview';
import InterviewDetail from './pages/InterviewDetail';
import Life from './pages/Life';
import Chat from './pages/Chat';
import Demo from './pages/Demo';
import './style/index.css';

class Roots extends Component {
	 render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute component={App}/>
      <Route path="mine" component={Mine} />
      <Route path="person" component={Person} />
      <Route path="searchComp" component={SearchComp} />
      <Route path="notice" component={Notice} />
      <Route path="comp" component={CompList} />
      <Route path="collection" component={Collection} />
      <Route path="interview" component={Interview} />
      <Route path="interviewDetail" component={InterviewDetail} />
      <Route path="life" component={Life} />
      <Route path="chat" component={Chat} />
      <Route path="demo" component={Demo} />
    </Route>
  </Router>
),
  document.getElementById('root') 
);
