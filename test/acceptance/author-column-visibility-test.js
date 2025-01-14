import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Discourse Topic List Author", function (needs) {
  needs.settings({
    glimmer_topic_list_mode: "enabled",
  });

  test("Author column is present on the left", async function (assert) {
    settings.column_position = "left";

    await visit("/");

    assert.dom(".custom-author-column").exists();
  });

  test("Author column is present on the right", async function (assert) {
    settings.column_position = "right";

    await visit("/");

    assert.dom(".custom-author-column").exists();
  });

  test("Author column is present in the center", async function (assert) {
    settings.column_position = "center";

    await visit("/");

    assert.dom(".custom-author-column").exists();
  });

  test("Author column is present on the left on mobile", async function (assert) {
    needs.mobileView();
    settings.column_position = "left";

    await visit("/");

    assert.dom(".custom-author-column").exists();
  });

  test("Author column is present on the right on mobile", async function (assert) {
    needs.mobileView();
    settings.column_position = "right";

    await visit("/");

    assert.dom(".custom-author-column").exists();
  });

  test("Author column is present in the center on mobile", async function (assert) {
    needs.mobileView();
    settings.column_position = "center";

    await visit("/");

    assert.dom(".custom-author-column").exists();
  });
});
