import { Redirect, Route, Switch } from "react-router";
import FavouritesMemes from "../../components/favouritesMemes/FavouritesMemes.component";
import AddMemeForm from "../../components/Form/AddMemeForm.component";
import HotMemes from "../../components/hotMemes/HotMemes.component";
import { PageNotFound } from "../../components/PageNotFound/PageNotFound.component";
import RegularMemes from "../../components/regularMemes/RegularMemes";

const AppRouting = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/hot" />
    </Route>
    <Route path="/hot" component={HotMemes} exact />
    <Route path="/regular" component={RegularMemes} />
    <Route path="/favourites" component={FavouritesMemes} />
    <Route path="/addMeme" component={AddMemeForm} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default AppRouting;
