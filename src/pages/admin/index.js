import AuthCheck from '../../components/AuthCheck';

import MetaTags from '../../components/Metatags';
import PostList from '../../components/PostList/PostList';
import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';

const AdminPostsPage = (props) => {
  return (
    <main>
      <MetaTags title="Admin Page" />

      <AuthCheck>
        <PostList />
        <CreateNewPost />
      </AuthCheck>
    </main>
  );
};

export default AdminPostsPage;
