import { module, test } from "qunit";
import migrate from "../../../../migrations/settings/0001-migrate-bool-settings";

module(
  "Topic List Author | Unit | Migrations | Settings | 0001-migrate-bool-settings",
  function () {
    test("migrate when both booleans are false or not set", function (assert) {
      const settings = new Map();
      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          column_position: "center",
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries()),
        "Defaults to center when both booleans are false or not set"
      );
    });

    test("migrate when show_topic_author_column_first is true", function (assert) {
      const settings = new Map(
        Object.entries({
          show_topic_author_column_first: true,
          show_topic_author_column_last: false,
        })
      );
      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          column_position: "left",
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries()),
        "Sets column_position to left when show_topic_author_column_first is true"
      );
    });

    test("migrate when show_topic_author_column_last is true", function (assert) {
      const settings = new Map(
        Object.entries({
          show_topic_author_column_first: false,
          show_topic_author_column_last: true,
        })
      );
      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          column_position: "right",
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries()),
        "Sets column_position to right when show_topic_author_column_last is true"
      );
    });

    test("migrate when both booleans are true", function (assert) {
      const settings = new Map(
        Object.entries({
          show_topic_author_column_first: true,
          show_topic_author_column_last: true,
        })
      );
      const result = migrate(settings);

      const expectedResult = new Map(
        Object.entries({
          column_position: "left",
        })
      );

      assert.deepEqual(
        Object.fromEntries(result.entries()),
        Object.fromEntries(expectedResult.entries()),
        "Prioritizes left when both booleans are true"
      );
    });

    test("old settings are removed after migration", function (assert) {
      const settings = new Map(
        Object.entries({
          show_topic_author_column_first: true,
          show_topic_author_column_last: false,
        })
      );
      const result = migrate(settings);

      assert.false(
        result.has("show_topic_author_column_first"),
        "Old setting show_topic_author_column_first is removed"
      );
      assert.false(
        result.has("show_topic_author_column_last"),
        "Old setting show_topic_author_column_last is removed"
      );
    });
  }
);
