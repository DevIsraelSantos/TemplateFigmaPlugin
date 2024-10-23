import "!./css/output.css";
import { render } from "@create-figma-plugin/ui";
import { useState } from "preact/hooks";
import DefaultPage from "./pages/home";
import { PagesName } from "./types/pages-name";
import { JSX, h } from "preact";
import OtherPage from "./pages/otherPage";

export default render(() => {
  const [pageTitle, setPageTitle] = useState<PagesName>("Home Page");

  function GetPage({ title }: { title: PagesName }): JSX.Element {
    switch (title) {
      case "Home Page":
        return <DefaultPage setPageTitle={setPageTitle} />;

      case "Page 2":
        return <OtherPage setPageTitle={setPageTitle} />;

      default:
        return <DefaultPage setPageTitle={setPageTitle} />;
    }
  }

  return <GetPage title={pageTitle} />;
});
