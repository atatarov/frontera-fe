import i18next from "i18next";
import { Switch, Route, Redirect } from "react-router-dom";

import { URLs } from "../__data__/urls";
import { Auth } from "../pages/auth/auth";
import { Personalizations } from "../pages/personalization/personalizations";
import { DetailCourse } from "../pages/detail-course/detail-course";
import { HomePage } from "./homepage";
import { CatalogCourses } from "../pages/catalog-courses/catalog-courses";

export const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={URLs.auth.url} />
      </Route>
      <Route path={URLs.auth.url}>
        <Auth />
      </Route>
      <Route path={URLs.personalizations.url}>
        <Personalizations />
      </Route>
      <Route path={URLs.catalogCourses.url}>
        <CatalogCourses />
      </Route>
      <Route path={URLs.home.url}>
        <HomePage />
      </Route>
      <Route path={`${URLs.coursepage.url}/:id`}>
        {(props) => <DetailCourse courseId={props.match?.params.id} />}
      </Route>
      <Route path="*">
        <h1>{i18next.t("js.navigation.notFound")}</h1>
      </Route>
    </Switch>
  );
};
