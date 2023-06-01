<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск..." />
    <div class="app__btns">
      <my-button >Создать пост</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
        @change="(choice) => (selectedSort = choice.target.value)"
      ></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form ></post-form>
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      
      v-if="!isPostsLoading"
    ></post-list>
    <div v-else>Loading Posts...</div>
    
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import usePosts from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
import axios from "axios";
import {ref} from 'vue'

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  padding: 10px;
  border: 1px solid black;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>
