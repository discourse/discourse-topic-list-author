import { apiInitializer } from "discourse/lib/api";
import AuthorColumnContent from "../components/author-column-content";
import AuthorColumnHeader from "../components/author-column-header";
import CustomCategoriesLatestAvatar from "../components/custom-categories-latest-avatar";

export default apiInitializer("1.39.0", (api) => {
  api.renderInOutlet(
    "latest-topic-list-item-topic-poster",
    CustomCategoriesLatestAvatar
  );

  // desktop
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    let position;

    switch (settings.column_position) {
      case "left":
        position = { before: "topic" };
        break;
      case "center":
        position = { before: "replies" };
        break;
      default:
        // otherwise default to right
        position = {};
        break;
    }

    columns.add(
      "topic-list-author",
      {
        item: AuthorColumnContent,
        header: AuthorColumnHeader,
      },
      position
    );

    return columns;
  });

  // mobile
  switch (settings.column_position) {
    case "left":
    case "center":
      api.renderInOutlet("topic-list-item-mobile-avatar", AuthorColumnContent);
      break;
    default:
      api.renderAfterWrapperOutlet(
        "topic-list-item",
        class extends AuthorColumnContent {
          static shouldRender(args, context) {
            return context.site.mobileView;
          }
        }
      );
      break;
  }
});
