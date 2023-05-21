import EmptyState from "../components/EmptyState";

interface pageProps {}

const page = (props: pageProps) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default page;
