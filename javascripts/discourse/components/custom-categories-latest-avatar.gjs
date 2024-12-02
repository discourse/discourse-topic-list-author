import UserAvatarFlair from "discourse/components/user-avatar-flair";
import UserLink from "discourse/components/user-link";
import avatar from "discourse/helpers/bound-avatar-template";
import i18n from "discourse-common/helpers/i18n";

const CustomCategoriesLatestAvatar = <template>
  <div class="topic-poster custom-latest-poster">
    <UserLink
      @user={{@topic.creator}}
      aria-label={{if
        @topic.creator.username
        (i18n
          (themePrefix "original_poster_link") username=@topic.creator.username
        )
      }}
    >
      {{avatar @topic.creator.avatar_template "large"}}
    </UserLink>
    <UserAvatarFlair @user={{@topic.creator}} />
  </div>
</template>;

export default CustomCategoriesLatestAvatar;
