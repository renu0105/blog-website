import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";
const AdminPage = async () => {
  const session = await auth();
  return (
    <>
      <div>
        <div>
          <AdminPosts />
        </div>
        <div>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div>
        <div>
          <AdminUsers />
        </div>
        <div>
          <AdminUserForm />
        </div>
      </div>
    </>
  );
};
export default AdminPage;
