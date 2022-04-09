import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Header } from "../../components/header/header";
import { PageHeader } from "../../components/page-header";
import { Loader } from "../../components/loader/loader";
import { CourseCardsLarge } from "../../components/course-cards/course-cards";
import { getSuggestions } from "../../__data__/action/suggestions";
import style from "./catalog-courses.module.scss";

export const CatalogCourses = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: any) => ({
    isLoading: state.suggestions.loading,
  }));

  const { courseList } = useSelector((state: any) => ({
    courseList: state.suggestions.courseList,
  }));

  const { errors } = useSelector((state: any) => ({
    errors: state.suggestions.errors,
  }));

  useEffect(() => {
    if (!isLoading) {
      dispatch(getSuggestions());
    }
  }, [courseList]);

  return (
    <>
      <Header />
      <main className={style.container}>
        <PageHeader label={t("catalog.courses.title")} />
        <section>
          {isLoading ? (
            <Loader />
          ) : (
            courseList && (
              <CourseCardsLarge showNumber={false} cards={courseList} />
            )
          )}
          {errors && (
            <span>
              {errors.find((error) => error.field === "suggestions")?.text ??
                ""}
            </span>
          )}
        </section>
      </main>
    </>
  );
};
