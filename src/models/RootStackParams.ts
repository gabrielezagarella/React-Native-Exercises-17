import { Profile } from "./Contact";

type RootStackParams = {
  Home: undefined;
  Detail: {
    item : Profile,
    name?: string,
  };
  Setting: undefined;
};

export default RootStackParams;
