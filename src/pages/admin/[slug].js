import AuthCheck from '../../components/AuthCheck';
import PostManager from '../../components/PostManager/PostManager';
import MetaTags from '../../components/Metatags';

const AdminPostEdit = (props) => {
  return (
    <>
      <MetaTags title="Admin Edit Post" />
      <AuthCheck>
        <PostManager />
      </AuthCheck>
    </>
  );
};

export default AdminPostEdit;
