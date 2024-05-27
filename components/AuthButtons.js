import UserNav from "./UserNav";
import { Button } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function AuthButtons() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="">
      {(await isAuthenticated()) ? (
        <UserNav
          email={user?.email}
          image={user?.picture}
          name={user?.given_name}
        />
      ) : (
        <div>
          <div className="space-x-4">
            <LoginLink>
              <Button>Sign In</Button>
            </LoginLink>
            <RegisterLink>
              <Button variant="outline">Sign Up</Button>
            </RegisterLink>
          </div>
        </div>
      )}
    </div>
  );
}
