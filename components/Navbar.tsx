import { DraftingCompass } from "lucide-react";
import Button from "./ui/Button";
import { useOutletContext } from "react-router";

const Navbar = () => {
  const { isSignedIn, userName, signIn, signOut } =
    useOutletContext<AuthContext>();

  const handleAuthClink = async () => {
    if (isSignedIn) {
      try {
        await signOut();
      } catch (err) {
        console.log(`Puter sign out failed: ${err}`);
      }
      return;
    }

    try {
      await signIn();
    } catch (err) {
      console.log(`Puter sign in failed: ${err}`);
    }
  };
  return (
    <header className=" navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <DraftingCompass className="logo" />
            <span className="name">Archify</span>
          </div>
          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Coummunity</a>
            <a href="#">Enterprize</a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className=" greating">
                {userName ? `Hi, ${userName}` : "Signed in"}
              </span>
              <Button size="sm" onClick={handleAuthClink} className="btn">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="ghost" onClick={handleAuthClink}>
                Log In
              </Button>
              <a className="cta" href="#upload">
                Get Started
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
