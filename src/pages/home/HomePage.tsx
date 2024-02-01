import { useAppSelector } from "@/shared/model/hook";

function HomePage() {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);

  return <div className="columns-8">Home page</div>;
}
export default HomePage;
