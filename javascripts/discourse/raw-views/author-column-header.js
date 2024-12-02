import EmberObject from "@ember/object";
import { service } from "@ember/service";

export default class AuthorColumnHeader extends EmberObject {
  @service site;

  get shouldShow() {
    return this.site.desktopView && this.setting === this.position;
  }
}
