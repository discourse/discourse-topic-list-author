import { withPluginApi } from "discourse/lib/plugin-api";
import AuthorColumnContent from "../components/author-column-content";
import AuthorColumnHeader from "../components/author-column-header";
import CustomCategoriesLatestAvatar from "../components/custom-categories-latest-avatar";

export default {
  name: "discourse-topic-list-cards",
  initialize() {
    withPluginApi("1.39.0", (api) => {
      api.renderInOutlet(
        "latest-topic-list-item-topic-poster",
        CustomCategoriesLatestAvatar
      );

      const site = api.container.lookup("service:site");

      if (site.desktopView) {
        api.registerValueTransformer(
          "topic-list-columns",
          ({ value: columns }) => {
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
          }
        );
      } else {
        switch (settings.column_position) {
          case "left":
          case "center":
            api.renderInOutlet(
              "topic-list-item-mobile-avatar",
              AuthorColumnContent
            );
            break;
          default:
            api.renderAfterWrapperOutlet(
              "topic-list-item",
              AuthorColumnContent
            );
            break;
        }
      }
    });
  },
};
