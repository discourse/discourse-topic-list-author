import Component from "@ember/component";
import { classNames } from "@ember-decorators/component";
import CustomCategoriesLatestAvatar from "../../components/custom-categories-latest-avatar";

@classNames("above-latest-topic-list-item-outlet", "author-avatar-connector")
export default class AuthorAvatarConnector extends Component {
  <template>
    <CustomCategoriesLatestAvatar @topic={{@outletArgs.topic}} />
  </template>
}
