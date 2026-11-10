import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const title = "Loading Button";

const LoadingComponent = () => (
  <Button disabled>
    <Spinner />
    Loading...
  </Button>
);

export default LoadingComponent;
