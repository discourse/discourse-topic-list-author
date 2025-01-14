import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Discourse Topic List Author - Categories page", function (needs) {
  needs.settings({
    desktop_category_page_style: "categories_and_latest_topics",
    glimmer_topic_list_mode: "enabled",
  });

  test("Categories page uses OP avatar instead of latest poster", async function (assert) {
    await visit("/categories");
    assert.dom(".custom-latest-poster").exists();
  });
});
