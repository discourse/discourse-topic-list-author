import { i18n } from "discourse-i18n";

const AuthorColumnHeader = <template>
  <th class="author topic-list-data" scope="col">
    {{i18n (themePrefix "author")}}
  </th>
</template>;

export default AuthorColumnHeader;
