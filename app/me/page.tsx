import { getMe } from "@/lib/api";

const Test = async () => {
  const me = await getMe();

  if (!me) {
    return <div>No</div>;
  }

  return <pre>{JSON.stringify(me, null, 2)}</pre>;
};

export default Test;
