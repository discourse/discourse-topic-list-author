import UserAvatarFlair from "discourse/components/user-avatar-flair";
import UserLink from "discourse/components/user-link";
import avatar from "discourse/helpers/bound-avatar-template";
import { i18n } from "discourse-i18n";

const CustomCategoriesLatestAvatar = <template>
  <div class="topic-poster custom-latest-poster">
    <UserLink
      @user={{@outletArgs.topic.creator}}
      aria-label={{if
        @outletArgs.topic.creator.username
        (i18n
          (themePrefix "original_poster_link")
          username=@outletArgs.topic.creator.username
        )
      }}
    >
      {{avatar @outletArgs.topic.creator.avatar_template "large"}}
    </UserLink>
    <UserAvatarFlair @user={{@outletArgs.topic.creator}} />
  </div>
</template>;

export default CustomCategoriesLatestAvatar;
