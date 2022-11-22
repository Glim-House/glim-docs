import { useRouter } from "next/router";

export const useRoute = () => {
  const router = useRouter();
  const generatorRoute = [
    {
      name: "Component",
      route: "/docs/generators/component",
      active: router.pathname.includes("/docs/generators/component"),
    },
    {
      name: "Screen",
      route: "/docs/generators/screen",
      active: router.pathname.includes("/docs/generators/screen"),
    },
    {
      name: "Store",
      route: "/docs/generators/store",
      active: router.pathname.includes("/docs/generators/store"),
    },
  ];
  return { generatorRoute };
};
