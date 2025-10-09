import Component from "@glimmer/component";
import avatar from "discourse/helpers/avatar";

export default class AuthorColumnContent extends Component {
  get topic() {
    return this.args.topic || this.args.outletArgs?.topic;
  }

  <template>
    <td class="custom-author-column topic-list-data">
      <a
        href={{this.topic.creator.path}}
        data-user-card={{this.topic.creator.username}}
      >
        {{avatar this.topic.creator imageSize="45"}}
      </a>
    </td>
  </template>
}
