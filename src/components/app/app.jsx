
import Header from "../header/header";
import Users from '../users/users';
import Posts from "../posts/posts";
import PostDetails from "../post-details/post-details";
import { Route, Switch } from "react-router-dom";
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Header/>
     <div className="content">
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route path="/posts/:itemId?" render={() => <Posts/>}/>
          <Route path="/post-details/:postId?" render={() => <PostDetails/>}/>
        </Switch>
     </div>
    </div>
  );
}

export default App;
